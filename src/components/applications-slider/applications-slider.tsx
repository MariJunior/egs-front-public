import { FC, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { ApplicationSliderCard } from './components/application-slider-card';
import { ApplicationSliderHeader } from './components/application-slider-header';
import { ApplicationTablet } from './components/application-tablet';

import arrow from '../../../public/assets/application-slider/arrow_right.svg';

export interface TabProps {
  action: () => void;
  label: string;
  value: string;
}

export interface ApplicationCardProps {
  Category?: 'new' | 'editors_choise' | 'popular' | null;
  Logo: ApplicationLogo;
  Name: string;
  ShortDescription: string;
  id?: number | string;
  position?: string;
}

export interface ApplicationLogo {
  url: string;
  height: number;
  width: number;
}

export interface AppHeaderSliderProps {
  defaults: { action: () => void; label: string; value: string };
  tabs: TabProps[];
  tabsTitle: string;
}

export interface ApplicationSliderProps {
  slides: ApplicationCardProps[];
}

export const ApplicationsSlider: FC<ApplicationSliderProps> = ({ slides }) => {
  const popularCards = slides && slides.filter((item) => item.Category === 'popular');
  const [currentTab, setCurrentTab] = useState<typeof slides>(popularCards);

  const newCards =
    slides &&
    slides.filter((item) => {
      return item.Category === 'new';
    });

  const preparedSlides = useMemo(() => {
    const perChunk = 2; // items per chunk
    const inputArray = currentTab;

    const result = inputArray.reduce((resultArray: typeof slides[], item, index) => {
      const chunkIndex = Math.floor(index / perChunk);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);
    return [...result, ...result, ...result];
  }, [currentTab]);

  const choosedCards = slides && slides.filter((item) => item.Category === 'editors_choise');

  const getAllCards = () => {
    setCurrentTab(slides);
  };

  const getNew = () => {
    setCurrentTab(newCards);
  };

  const getFavorites = () => {
    setCurrentTab(choosedCards);
  };

  const getPopular = () => {
    setCurrentTab(popularCards);
  };

  const applicationSlidesRender = () => {
    return preparedSlides?.map((slide, index) => {
      const [slideTop, slideBottom] = slide;
      return (
        <SwiperSlide key={index}>
          <ApplicationSliderCard
            Name={slideTop?.Name}
            Category={slideTop?.Category}
            Logo={slideTop?.Logo}
            ShortDescription={slideTop.ShortDescription}
          />
          {slideBottom && (
            <div style={{ transform: 'translateX(50%)' }}>
              <ApplicationSliderCard
                Name={slideBottom?.Name}
                Category={slideBottom?.Category}
                Logo={slideBottom?.Logo}
                ShortDescription={slideBottom?.ShortDescription}
              />
            </div>
          )}
        </SwiperSlide>
      );
    });
  };

  const applicationsTabletRender = () => {
    return (
      <ApplicationTablet cardsLength={currentTab.length}>
        {currentTab?.slice(0, 6).map((slide) => (
          <ApplicationSliderCard
            key={slide.id}
            Name={slide.Name}
            Logo={slide.Logo}
            Category={slide.Category}
            ShortDescription={slide.ShortDescription}
          />
        ))}
      </ApplicationTablet>
    );
  };

  const ApplicationSliderTabs = [
    {
      label: 'Популярные',
      value: 'popular',
      action: () => getPopular(),
    },
    {
      label: 'Выбор редакции',
      value: 'choosed',
      action: () => getFavorites(),
    },
    {
      label: 'Новинки',
      value: 'news',
      action: () => getNew(),
    },
    {
      label: 'Все',
      value: 'all',
      action: () => getAllCards(),
    },
  ];

  const filtersDefaults = {
    label: 'Популярные',
    value: 'popular',
    action: () => getPopular(),
  };

  const SwiperConfig = {
    loop: true,
    navigation: true,
    breakpoints: {
      '1024': {
        slidesPerView: 3,
      },
      '1500': {
        slidesPerView: 4,
      },
      '1700': {
        slidesPerView: 5,
      },
      '2000': {
        slidesPerView: 6,
      },
    },
  };

  return (
    <>
      <Desktop>
        <Section>
          <ApplicationSliderHeader defaults={filtersDefaults} tabs={ApplicationSliderTabs} tabsTitle="Приложения" />
          <div className="slider-container">
            <StyledSwiper>
              <Swiper {...SwiperConfig}>
                {applicationSlidesRender()}
                <div className="swiper_opacity_left"></div>
                <div className="swiper_opacity_right"></div>
              </Swiper>
            </StyledSwiper>
          </div>
        </Section>
      </Desktop>
      <Mobile>
        <ApplicationSliderHeader defaults={filtersDefaults} tabs={ApplicationSliderTabs} tabsTitle="Приложения" />
        {applicationsTabletRender()}
      </Mobile>
    </>
  );
};

const opacityGradient = 'linear-gradient(180deg, #fffbfb 22.4%, rgba(255, 255, 255, 0) 100%)';

const Section = styled.section`
  position: relative;
`;

const Desktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: relative;
  }
`;

const Mobile = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: flex;
    max-width: 768px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSwiper = styled.div`
  .slider-container {
    max-width: 2500px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
  .swiper-wrapper {
    display: flex;
    padding-top: 58px;
    padding-bottom: 25px;
    height: 410px;
  }
  .swiper-button-next {
    width: 25px;
    height: 44px;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;

    cursor: pointer;
    background-image: url(${arrow.src});
    right: 55px;
    top: 50%;
  }
  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-prev {
    width: 25px;
    height: 44px;
    position: absolute;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    z-index: 10;
    background-image: url(${arrow.src});
    background-repeat: no-repeat;
    transform: rotate(180deg);
    left: 55px;
    top: 50%;
  }
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-slide {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
  }
  .swiper_opacity_left {
    position: absolute;
    left: 0;
    top: 50px;
    width: 428px;
    height: 428px;
    background: ${opacityGradient};
    transform: rotate(-90deg);
    z-index: 1;
  }

  .swiper_opacity_right {
    position: absolute;
    right: 0;
    top: 50px;
    width: 428px;
    height: 427px;
    background: ${opacityGradient};
    transform: rotate(90deg);
    z-index: 2;
  }
`;
