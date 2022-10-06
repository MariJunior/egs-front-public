import { FC } from 'react';
import styled from '@emotion/styled';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

import { SlideProps } from '../../slider';

import LinkIconImage from '../../../../../public/assets/link_icon.svg';
import { getFont, getMediaquery, fontColors } from '../../../../helpers';

export const Slide: FC<SlideProps> = ({ Title, Description, Link, Image: slideImage }) => {
  return (
    <div className="swiper-slide">
      <SwiperContent>
        <MainContent>
          <div>
            <TitleWrapper>
              <SwiperTitle>{Title}</SwiperTitle>
            </TitleWrapper>
            <SwiperSubtitle>{Description}</SwiperSubtitle>
          </div>
          <ContentNavigation href={Link}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <LinkText>Узнать больше</LinkText>
              <LinkIcon />
            </div>
          </ContentNavigation>
        </MainContent>
        <MainImage>
          <Image src={slideImage.url} alt="image" width={slideImage.width} height={slideImage.height} />
        </MainImage>
      </SwiperContent>
    </div>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  ${getMediaquery('sm')} {
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
    justify-content: center;
  }

  ${getMediaquery('md')} {
    font-size: 36px;
    text-align: left;
    margin: 0 0 10px 0;
    justify-content: flex-start;
  }

  ${getMediaquery('lg')} {
    margin: 0 0 32px 0;
  }
`;
const SwiperContent = styled.div`
  width: 100%;

  ${getMediaquery('sm')} {
    padding: 38px 20px 35px 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }

  ${getMediaquery('md')} {
    padding: 30px;
    flex-direction: row;
    justify-content: space-between;
  }

  ${getMediaquery('lg')} {
    padding: 80px 30px 50px 30px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  ${getMediaquery('md')} {
    justify-content: space-between;
  }
  ${getMediaquery('lg')} {
    justify-content: space-between;
  }
`;

const MainImage = styled.div`
  ${getMediaquery('sm')} {
    max-width: 335px;
    position: relative;
    margin: 0 auto 26px;
    max-width: 100%;
    height: 268px;
  }

  ${getMediaquery('md')} {
    margin: 0;
    max-width: 360px;
    height: auto;
  }

  ${getMediaquery('lg')} {
    margin: 0;
    max-width: 400px;
    height: auto;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  max-width: 200px;
  margin-right: 10px;
  align-self: flex-start;
`;

const LinkText = styled.p`
  ${getMediaquery('sm')} {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 0 13px 0 13px;
    background: ${fontColors.dodgerBlue};
    border-radius: 10px;
    color: white;
    margin-right: 0px;
  }

  ${getMediaquery('md')} {
    background: none;
    border-radius: 0;
    padding: 0;
    font-weight: 600;

    font-size: 16px;
    line-height: 120%;
    justify-content: initial;
    color: ${fontColors.dodgerBlue};
    text-decoration: none;
  }
  ${getMediaquery('lg')} {
    margin-right: 12px;
  }
`;

const ContentNavigation = styled.a`
  height: 25px;
  text-decoration: none;

  ${getMediaquery('sm')} {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    text-decoration: none;
  }

  ${getMediaquery('md')} {
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  ${getMediaquery('lg')} {
    width: 100%;
  }
`;

const SwiperTitle = styled.h2`
  ${getFont('title')};

  font-style: normal;
  font-weight: bold;
  color: ${fontColors.chathamsBlue};
  line-height: 100%;

  ${getMediaquery('sm')} {
    font-size: 20px;
    text-align: center;
  }

  ${getMediaquery('md')} {
    font-size: 36px;
    text-align: left;
  }
`;

const SwiperSubtitle = styled.p`
  line-height: 120%;
  color: ${fontColors.chathamsBlue};

  ${getMediaquery('sm')} {
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
  }

  ${getMediaquery('md')} {
    font-size: 16px;
    text-align: left;
    margin: 0;
  }
`;

const LinkIcon = styled.button`
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-image: url(${LinkIconImage.src});
  width: 25px;
  height: 25px;

  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('md')} {
    display: block;
    align-self: center;
  }
`;
