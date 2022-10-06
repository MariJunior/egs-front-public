import { FC } from 'react';
import styled from '@emotion/styled';
import Rating from '@material-ui/lab/Rating';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { fontColors, getFont, getMediaquery } from 'helpers';

export interface RatingProps {
  rating: number;
  reviewsCount?: number;
  isReviews: boolean;
}
export const RatingComponent: FC<RatingProps> = ({ rating, reviewsCount, isReviews }) => {
  return (
    <RatingWrapper>
      <CurrentRating>{rating}</CurrentRating>
      <RatingContainer>
        <Rating
          name="rating-customized"
          value={rating}
          precision={0.5}
          disabled
          size="small"
          icon={<StarRoundedIcon fontSize="inherit" />}
        />
      </RatingContainer>
      {isReviews && <RatingCount>{reviewsCount} отзывов</RatingCount>}
    </RatingWrapper>
  );
};
const RatingContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  margin: 0 10px 0 10px;

  .MuiSvgIcon-fontSizeInherit {
    stroke: var(--colors-blue);
  }

  .MuiRating-root.Mui-disabled {
    opacity: 1 !important;
  }

  .MuiRating-iconEmpty {
    color: var(--colors-white) !important;
  }

  .MuiRating-icon,
  .MuiRating-iconFilled {
    color: var(--colors-blue);
  }
`;
const RatingCount = styled.p`
  ${getFont('medium')};
  font-size: 14px;
  opacity: 0.5;
  margin: 0;
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: block;
  }
`;

const CurrentRating = styled.p`
  ${getFont('medium')};
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  margin-right: 5px;
  color: ${fontColors.bahamaBlue};
  margin: 0;
`;

const RatingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
