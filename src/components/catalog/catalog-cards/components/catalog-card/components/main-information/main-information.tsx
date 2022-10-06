import { FC } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Header } from '../main-information/components/header';

import { CatalogLinksList } from '../../../../../catalog-links-list';

import { getMediaquery, getFont } from '../../../../../../../helpers';
import { CardsCatalogPage } from '../../../../../../../../pages/catalog-page';

// export interface CatalogCardMainInfoProps {
//   card: CardProps;
// }
export const MainInformation: FC<CardsCatalogPage> = ({ card }) => {
  return (
    <>
      <ImageWrapper>
        <Image src={card.logo.url} alt={card.title} width={card.logo.width} height={card.logo.height} />
      </ImageWrapper>

      <Wrapper>
        <StyledHeader
          logo={card.logo}
          title={card.title}
          // rating={card.rating}
          // reviewsCount={card.reviewsCount}
          link={card.link!}
          // tabletLinks={card.tabletLinks}
        />
        <AboutApp>{card.about}</AboutApp>
        {/*<RatingWrapper>*/}
        {/*  <RatingComponent isReviews rating={card.rating} reviewsCount={card.reviewsCount} />*/}
        {/*</RatingWrapper>*/}
        {card.links.length ? <CatalogLinksList mobile links={card.links} /> : null}
      </Wrapper>
    </>
  );
};

const RatingWrapper = styled.div`
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: block;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${getMediaquery('lg')} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const ImageWrapper = styled.div`
  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('md')} {
    display: block;
    margin-right: 20px;
    width: 160px;
    height: 160px;

    > div {
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledHeader = styled(Header)`
  margin-bottom: 10px;
`;

const AboutApp = styled.p`
  ${getFont('medium')};
  font-size: 14px;
  opacity: 0.5;
  margin: 0;

  ${getMediaquery('sm')} {
    max-width: 100%;
    margin-bottom: 10px;
  }

  ${getMediaquery('md')} {
    max-width: 500px;
    margin-bottom: 0px;
  }
`;
