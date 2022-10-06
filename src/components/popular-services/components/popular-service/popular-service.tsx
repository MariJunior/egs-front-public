import { FC } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import Rating from '@material-ui/lab/Rating';
import { RatingComponent } from 'components/rating';
import { PopularServiceProps } from '../../types';

import { fontColors, getFont } from 'helpers';

export const PopularService: FC<PopularServiceProps> = ({ image, title, rating }) => {
  return (
    <Card>
      <Image src={image.src} />
      <ContentWrapper>
        <Title>{title}</Title>
        <RatingComponent rating={rating!} isReviews={false} />
      </ContentWrapper>
    </Card>
  );
};

const Card = styled.div`
  width: 184px;
  display: flex;
  flex-direction: column;
  background-color: ${fontColors.white};
  box-shadow: 0px 0px 30px ${fontColors.lightBlue};
  border-radius: 20px;
  padding: 10px;
`;
const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;
const Title = styled.h4`
  ${getFont('small')};
  color: ${fontColors.bahamaBlue};
  width: 100%;
  text-align: left;
  margin-bottom: 13px;
`;
const CurrentRating = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  margin-right: 5px;
  color: ${fontColors.bahamaBlue};
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RatingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledRating = withStyles({
  root: {
    marginBottom: 'auto',
  },
  sizeSmall: {
    fontSize: '20px',
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
