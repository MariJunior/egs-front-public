import { Meta, Story } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { ReviewCard, ReviewCardProps } from './review-card';

export default {
  component: ReviewCard,
  title: 'Components/ReviewCard',
  decorators: [withKnobs],
} as Meta;

const ReviewCardStory: Story<ReviewCardProps> = (props: ReviewCardProps) => (
  <ReviewCard
    {...props}
    headline={text('headline', 'Очень хороший ресурс! Просто классный')}
    rating={number('rating', 3.7, { range: true, min: 0, max: 5, step: 0.1 })}
    review={text(
      'review',
      'Наряду с этим, изменение глобальной стратегии развивает культурный имидж. До недавнего времени считалось, что реклама вырождена. Рекламное сообщество определяет пресс-клиппинг.',
    )}
    author={text('author', 'Смирнов Павел')}
    date={text('date', '15 дек. 2021')}
  />
);

export const Default = ReviewCardStory.bind({});
