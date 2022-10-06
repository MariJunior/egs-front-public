import { Meta, Story } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { reviewsEkpSpb } from './data';
import { Reviews, ReviewsProps } from './reviews';
import { ReviewsSlider } from '../../components/reviews-slider';

export default {
  component: Reviews,
  title: 'Content/Reviews',
  decorators: [withKnobs],
} as Meta;

const ReviewsStory: Story<ReviewsProps> = (props: ReviewsProps) => (
  <Reviews
    {...props}
    reviewsCount={number('reviewsCount', 125)}
    reviewsSlider={<ReviewsSlider sliderId="ekp-reviews-slider" reviews={reviewsEkpSpb} />}
  />
);

export const Default = ReviewsStory.bind({});
