import { Meta, Story } from '@storybook/react';

import { PopularServices } from './popular-services';
import { PopularServicesProps } from './types';

import health from '../../assets/article/health.svg';
import map from '../../assets/article/karta.svg';
import openCity from '../../assets/article/open-city.svg';
import uslugi from '../../assets/article/uslugi.svg';

export default {
  component: PopularServices,
  title: 'Components/PopularServices',
  args: {
    services: [
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
        image: health,
        type: 'top',
        tag: 'discussed',
        rating: 4.3,
      },
      {
        title: 'Твой бюждет',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
        mark: 'popular',
        image: openCity,
        type: 'top',
        tag: 'discussed',
        rating: 4.5,
      },
      {
        title: 'Наш Санкт-Петербург',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',
        mark: 'popular',
        image: uslugi,
        type: 'bottom',
        tag: 'popular',
        rating: 3.5,
      },
      {
        title: 'Мои документы',
        subtitle: 'Государственные и муниципальные услуги',
        mark: 'popular',
        image: uslugi,
        type: 'bottom',
        tag: 'significant',
        rating: 2,
      },
      {
        title: 'Единая карта петербуржца',
        subtitle: 'Образовательынй онлайн портал',
        mark: 'new',
        image: map,
        type: 'top',
        tag: 'significant',
        rating: 2.2,
      },
    ],
  },
} as Meta;

const PopularServicesStory: Story<PopularServicesProps> = (args) => <PopularServices {...args} />;

export const Default = PopularServicesStory.bind({});
