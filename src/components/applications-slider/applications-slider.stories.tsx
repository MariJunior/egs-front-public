import { Meta, Story } from '@storybook/react';

import { ApplicationsSlider, ApplicationSliderProps } from './applications-slider';

import health from '../../assets/application-slider/health.svg';

export default {
  component: ApplicationsSlider,
  title: 'Components/ApplicationsSlider',
  args: {
    slides: [
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',

        icon: health,
        type: 'top',
      },
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',

        icon: health,
        type: 'top',
      },
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',

        icon: health,
        type: 'top',
      },
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',

        icon: health,
        type: 'top',
      },
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',

        icon: health,
        type: 'top',
      },
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',

        icon: health,
        type: 'top',
      },
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',

        icon: health,
        type: 'top',
      },
      {
        title: 'Здоровье петербуржца',
        subtitle: 'Краткое описание Поддержка и развитие регионов  и развитие регионов',

        icon: health,
        type: 'top',
      },
    ],
  },
} as Meta;

const ApplicationsSliderStory: Story<ApplicationSliderProps> = (props) => <ApplicationsSlider {...props} />;

export const Default = ApplicationsSliderStory.bind({});
