import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { reviewsEkpSpb } from './data';
import { ReviewsSlider, ReviewsSliderProps } from './reviews-slider';

export default {
  component: ReviewsSlider,
  title: 'Components/ReviewsSlider',
  decorators: [withKnobs],
} as Meta;

const ReviewsSliderStory: Story<ReviewsSliderProps> = (props: ReviewsSliderProps) => (
  <ReviewsSlider {...props} sliderId="ekp-reviews-slider" reviews={reviewsEkpSpb} />
);

export const Default = ReviewsSliderStory.bind({});
