import { FC } from 'react';
import styled from '@emotion/styled';

import { getFont } from '../../helpers';
import { getMediaquery } from '../../helpers';
import { fontColors } from '../../helpers';

export interface BannerProps {
  href: string;
  iconImage: StaticImageData;
  linkText: string;
  mainImage: StaticImageData;
  subtitle: string;
  title: string;
}

export const Banner: FC<BannerProps> = ({ title, subtitle, linkText, href, mainImage, iconImage }) => {
  return (
    <Wrapper>
      <MainContent>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <ContentNavigation>
          <LinkText href={href}>{linkText}</LinkText>
          <BottomIconComponent src={iconImage.src} alt="bottom_icon" />
        </ContentNavigation>
      </MainContent>
      <MainImage src={mainImage.src} alt="image" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${getMediaquery('sm')} {
    width: 335px;
    align-self: center;
    display: flex;
    height: 429px;
    padding-top: 50px;
    padding-bottom: 35px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 30px;
  }

  ${getMediaquery('md')} {
    width: 768px;
    height: 300px;
    padding: 20px;
    justify-content: space-between;
    flex-direction: row;
  }

  ${getMediaquery('lg')} {
    position: relative;
    width: 100%;
    max-width: 853px;
    color: #195084;
    height: 440px;
    justify-content: space-between;
    padding: 46px 37px 23px 54px;
    margin-bottom: 83px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainImage = styled.img`
  ${getMediaquery('sm')} {
    max-width: 335px;
    margin-bottom: 20px;
  }
  ${getMediaquery('md')} {
    margin-bottom: 0;
  }

  ${getMediaquery('lg')} {
    max-width: 448px;
  }
`;

const BottomIconComponent = styled.img`
  max-width: 200px;
  align-self: flex-start;

  ${getMediaquery('md')} {
    position: static;
  }
`;

const LinkText = styled.a`
  ${getMediaquery('sm')} {
    max-width: 139px;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 13px 0 13px;
    background: ${fontColors.dodgerBlue};
    border-radius: 10px;
    color: white;
    margin-left: 10px;
    text-decoration: none;
  }
  ${getMediaquery('md')} {
    height: auto;
    max-width: 305px;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: ${fontColors.dodgerBlue};
    background: none;
    margin-left: 0;
    margin-bottom: 0px;
    align-self: center;
    padding: 0;
  }
  ${getMediaquery('lg')} {
    margin-bottom: 94px;
    align-self: baseline;
  }
`;

const ContentNavigation = styled.div`
  ${getMediaquery('sm')} {
    position: relative;
    display: flex;
    padding-bottom: 20px;
    flex-direction: row-reverse;
    align-items: center;
    max-width: 335px;
    align-self: center;
  }
  ${getMediaquery('md')} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 0;
    padding-bottom: 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    align-self: left;
  }

  ${getMediaquery('lg')} {
    max-width: 100%;
    flex-direction: column;
    align-items: left;
  }
`;

const Header = styled.div`
  ${getMediaquery('sm')} {
    display: flex;
    flex-direction: column;
    max-width: 295px;
    align-self: center;
    margin-bottom: 20px;
  }
  ${getMediaquery('md')} {
    max-width: 100%;
    margin-bottom: 61px;
    align-self: flex-start;
  }

  ${getMediaquery('lg')} {
    margin-bottom: 32px;
  }
`;

const Title = styled.h2`
  ${getMediaquery('sm')} {
    ${getFont('title')};
    max-width: 295px;
    font-size: 24px;
    padding-left: 0;
    margin: 0 0 10px 0;
  }
  ${getMediaquery('md')} {
    max-width: 350px;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 100%;
    padding-left: 4px;
    color: #195084;
  }
`;

const Subtitle = styled.p`
  ${getMediaquery('sm')} {
    width: 295px;
    font-size: 14px;
    line-height: 120%;
    color: #195084;
    text-align: center;
  }
  ${getMediaquery('md')} {
    font-size: 16px;
    margin-bottom: 0;
    font-size: 16px;
    text-align: left;
  }
  ${getMediaquery('lg')} {
    margin: 0;
  }
`;
