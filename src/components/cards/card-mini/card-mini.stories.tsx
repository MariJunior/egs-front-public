import { Meta, Story } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import EkpSpbCard from '../../../storybook/cards/unity-map-petersburg.png';

import { CardMini, CardMiniProps } from './card-mini';

export default {
  component: CardMini,
  title: 'Components/Cards/CardMini',
  decorators: [withKnobs],
} as Meta;

const CardMiniStory: Story<CardMiniProps> = (props: CardMiniProps) => (
  <CardMini
    {...props}
    appIcon={EkpSpbCard}
    appName={text('appTitle', 'Единая карта петербуржца')}
    appRating={number('appRating', 4.9, {
      range: true,
      min: 0,
      max: 5,
      step: 0.1,
    })}
  />
);

export const Default = CardMiniStory.bind({});
