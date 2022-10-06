import { FC } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import { getMediaquery, getFont, fontColors } from 'helpers';

import { TabletLink, LinkProps } from 'components/catalog/catalog-cards/types';
import { ApplicationLogo } from '../../../../../../../../applications-slider';

export interface HeaderProps {
  logo: ApplicationLogo;
  link: LinkProps;
  rating: number;
  reviewsCount: number;
  tabletLinks: TabletLink[];
  title: string;
  className?: string;
}

export const Header: FC<HeaderProps> = ({ title, logo, rating, reviewsCount, tabletLinks, link, className }) => {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      <MobileImage>
        <Image src={logo.url} alt={title} width={logo.width} height={logo.height} />
      </MobileImage>

      <MobileTitleWrapper>
        <MobileTitle>{title}</MobileTitle>
        {/*<RatingComponent isReviews rating={rating} reviewsCount={reviewsCount} />*/}
      </MobileTitleWrapper>
      {/*<CatalogLinksList mobile={false} links={tabletLinks} />*/}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  ${getMediaquery('sm')} {
    flex-direction: row;
  }
  ${getMediaquery('md')} {
    flex-direction: column;
  }
`;

const MobileTitleWrapper = styled.div`
  ${getMediaquery('sm')} {
    display: flex;
    flex-direction: column;
  }
  ${getMediaquery('md')} {
    display: none;
  }
`;

const MobileImage = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  ${getMediaquery('md')} {
    display: none;
  }
`;

const Title = styled.h3`
  ${getFont('title')};
  color: ${fontColors.chathamsBlue};
  margin: 0;
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: block;
    margin-bottom: 7px;
    margin-right: 0;
  }
`;

const MobileTitle = styled.h3`
  ${getFont('title')};
  color: ${fontColors.chathamsBlue};
  font-size: 14px;
  margin: 0;
  margin-bottom: 3px;

  ${getMediaquery('md')} {
    display: none;
  }
`;
