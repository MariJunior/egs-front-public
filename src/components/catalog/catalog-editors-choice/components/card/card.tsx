import { FC } from 'react';
import styled from '@emotion/styled';

import { getMediaquery, getFont, fontColors } from '../../../../../helpers';
import { CardsCatalogPage } from '../../../../../../pages/catalog-page';

export const Card: FC<CardsCatalogPage> = ({ logo, cover, title }) => {
  return (
    <Wrapper>
      <ImageWrapper style={{ backgroundImage: `url(${cover?.url})` }} />
      <Padding>
        <Header>
          <Icon alt={title} src={logo.url} />
          {/*<RatingComponent rating={rating} isReviews={false} />*/}
        </Header>
        <Title>{title}</Title>
      </Padding>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${getMediaquery('sm')} {
    width: 260px;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 102, 255, 0.15);
    border-radius: 20px;
    margin-right: 20px;

    :nth-last-of-type(1) {
      margin-right: 0;
    }
  }
  ${getMediaquery('lg')} {
    width: 275px;
    margin-right: 40px;
  }

  :hover {
    transition: 1s;
    box-shadow: 0px 10px 30px ${fontColors.mayaBlue};
  }
`;

const ImageWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  ${getMediaquery('sm')} {
    width: 100%;
    height: 249px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  position: absolute;
  bottom: 0px;
  width: 88px;
  height: 88px;
`;

const Header = styled.div`
  position: relative;
  margin-bottom: 10px;

  > div {
    justify-content: flex-end;
  }
`;

const Title = styled.h4`
  ${getFont('title')}
  margin: 0;
`;

const Padding = styled.div`
  padding: 0 9px 25px 20px;
`;
