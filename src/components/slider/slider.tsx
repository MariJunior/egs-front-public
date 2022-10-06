import { FC, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { SliderControls } from './components/slider-controls/slider-controls';
import { Slide } from './components/slide/slide';

import { getMediaquery } from '../../helpers';

export interface SlideProps {
  id: number | string;
  Image: { url: string; width: number; height: number };
  Link: string;
  Description?: string;
  Title: string;
}

export interface SliderProps {
  slides: SlideProps[];
}

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Slider: FC<SliderProps> = ({ slides }) => {
  const swiper = useRef<null | {
    slideNext: () => void;
    slidePrev: () => void;
  }>(null);

  function swiperInit() {
    swiper.current = new Swiper('.swiper-container_main-banner', {
      slidesPerView: 1,
      height: 440,
      direction: 'horizontal',
      spaceBetween: 35,
      loop: true,
      autoplay: { delay: 4650, disableOnInteraction: false },
      pagination: { clickable: true, el: '.swiper-pagination ' },
    });
  }

  useEffect(() => {
    swiperInit();
  }, []);

  const goNextSlide = () => {
    if (!swiper.current) return;
    swiper.current.slideNext();
  };

  const goPrevSlide = () => {
    if (!swiper.current) return;
    swiper.current.slidePrev();
  };

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <div className="swiper-slide" key={index}>
        <Slide {...slide} key={index} />
      </div>
    ));
  };

  return (
    <StyledSwiper>
      <div className="swiper-container_main-banner">
        <div className="swiper-wrapper">{renderSlides()}</div>
      </div>
      <SliderControls goPrevSlide={goPrevSlide} goNextSlide={goNextSlide} />
    </StyledSwiper>
  );
};

const Bulls = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
  `;

const StyledSwiper = styled.div`
  max-width: 864px;
  overflow: hidden;
  ${getMediaquery('sm')} {
    margin-bottom: 30px;
  }
  ${getMediaquery('lg')} {
    margin-bottom: 0;
  }

  .swiper-wrapper {
    max-width: 864px;
    max-height: 425px;
    position: relative;
  }

  .swiper-container_main-banner {
    border-radius: 20px;
    margin-top: 20px;

    ${getMediaquery('sm')} {
      max-width: 335px;
      height: 429px;
      margin: 0 auto;
    }

    ${getMediaquery('md')} {
      max-width: 728px;
      height: 300px;
    }

    ${getMediaquery('lg')} {
      max-width: 864px;
      height: 440px;
    }
  }

  .swiper-slide {
    position: relative;
    display: flex;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);

    ${getMediaquery('sm')} {
      max-width: 728px;
      height: 429px;
    }

    ${getMediaquery('md')} {
      max-width: 728px;
      height: 300px;
    }

    ${getMediaquery('lg')} {
      max-width: 864px;
      height: 440px;
    }
  }

  .swiper-pagination {
    position: relative;
    max-width: 864px;
  }
  .swiper-pagination-bullet-active::after {
    content: '';
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(25, 80, 132);
    animation: ${Bulls} 5s linear;
    z-index: 10;
    border-radius: 10px;
  }
  .swiper-pagination-bullet {
    position: relative;
    display: inline-block;
    background: rgba(25, 80, 132, 0.35);
    opacity: 1;
    margin-right: 10px;
    border-radius: 10px;

    ${getMediaquery('sm')} {
      width: 45px;
      height: 5px;
    }

    ${getMediaquery('md')} {
      width: 103px;
    }

    ${getMediaquery('lg')} {
      width: 125px;
    }
  }
  .swiper-pagination-bullet:not(.swiper-pagination-bullet-active
      ~ .swiper-pagination-bullet):not(.swiper-pagination-bullet-active) {
    background: rgba(25, 80, 132);
    opacity: 1;
  }
`;
