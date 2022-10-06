import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import NewsCardFirst from '../../storybook/images/news-card-1.png';

import { NewsCard } from './news-card';
import { NewsCardProps } from './types';

export default {
  component: NewsCard,
  title: 'Components/NewsCard',
  decorators: [withKnobs],
} as Meta;

const NewsCardStory: Story<NewsCardProps> = (props: NewsCardProps) => (
  <NewsCard
    {...props}
    imageSrc={NewsCardFirst}
    title={text('title', 'Что изменилось в начислении пособий для безработных в 2020 году')}
    subtitle={text('subtitle', 'Новые суммы и условия')}
    date={text('date', '2 декабря 2021')}
  />
);

export const Default = NewsCardStory.bind({});
