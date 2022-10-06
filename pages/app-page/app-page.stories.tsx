import { Meta, Story } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import EkpSpbLogo from '../../storybook/cards/ekp-spb-logo.svg';

import { AppPage, AppPageProps } from '.';

export default {
  component: AppPage,
  title: 'Pages/AppPage',
  decorators: [withKnobs],
} as Meta;

const AppPageStory: Story<AppPageProps> = (props: AppPageProps) => (
  <AppPage
    {...props}
    appIcon={EkpSpbLogo}
    appName={text('appName', 'Наш Санкт-Петербург')}
    appSummary={text(
      'appSummary',
      'Портал «Наш Санкт-Петербург» создан по инициативе Губернатора Санкт-Петербурга для оперативного взаимодействия жителей города с представителями органов власти Санкт-Петербурга.',
    )}
    appRating={number('appRating', 4.5, {
      range: true,
      min: 0,
      max: 5,
      step: 0.1,
    })}
  />
);

export const Default = AppPageStory.bind({});
