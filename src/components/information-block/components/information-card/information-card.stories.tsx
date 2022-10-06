import { Meta, Story } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { InformationCard } from './information-card';

import { InformationCardProps } from '../../information-block';

export default {
  component: InformationCard,
  title: 'Components/information-card',
} as Meta;

const InformationCardStory: Story<InformationCardProps> = (props) => (
  <InformationCard
    {...props}
    title={text('title', 'Администрация')}
    subtitle={text('subtitle', 'Текст текст текст')}
    cardImage={text(
      'image',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hermitage_Museum_in_Saint_Petersburg.jpg/600px-Hermitage_Museum_in_Saint_Petersburg.jpg',
    )}
  />
);

export const Default = InformationCardStory.bind({});
