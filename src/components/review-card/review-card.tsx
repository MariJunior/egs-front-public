import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { getFont, getMediaquery } from '../../helpers';

import { ReviewCardBasicProps } from './types';

export interface ReviewCardProps
  extends ReviewCardBasicProps,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function ReviewCard({ headline, rating, review, author, date, ...props }: ReviewCardProps) {
  return (
    <Card {...props}>
      <CardHead>
        <CardTitle>{headline}</CardTitle>
        <RatingWrapper>
          {rating}
          <StyledRating
            name="rating-customized"
            defaultValue={rating}
            precision={0.5}
            disabled={true}
            emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
            icon={<StarRoundedIcon fontSize="inherit" />}
          />
        </RatingWrapper>
      </CardHead>
      <Review>{review}</Review>
      <CardMeta>
        <ReviewAuthor>{author}</ReviewAuthor>
        <ReviewDate>{date}</ReviewDate>
      </CardMeta>
    </Card>
  );
}

const StyledRating = withStyles({
  root: {
    marginLeft: '5px',
    fontSize: '14px',
  },
  iconFilled: {
    color: '#1B8EFF',
  },
  iconEmpty: {
    color: '#1B8EFF',
  },
  disabled: {
    opacity: '1 !important',
  },
})(Rating);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 295px;
  padding: 20px;
  background-color: var(--colors-white);
  box-shadow: 0px 0px 30px #d8e8ff;
  border-radius: 20px;
  backdrop-filter: blur(80px);

  ${getMediaquery('md')} {
    max-width: 400px;
  }
`;

const CardHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  ${getMediaquery('md')} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const CardTitle = styled.strong`
  margin-bottom: 5px;
  ${getFont('title')};

  ${getMediaquery('md')} {
    margin-right: 15px;
    margin-bottom: 0;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  ${getFont('title')};
  font-weight: 600 !important;
`;

const Review = styled.blockquote`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 20px;
  margin-left: 0;
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: var(--colors-darkblue);
  opacity: 0.8;

  ${getMediaquery('md')} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: var(--colors-darkblue);
  opacity: 0.5;

  ${getMediaquery('md')} {
    font-size: 14px;
    line-height: 16px;
  }
`;

const ReviewAuthor = styled.cite`
  margin-right: 20px;
  font-style: normal;
`;

const ReviewDate = styled.time`
  flex-shrink: 0;
`;
