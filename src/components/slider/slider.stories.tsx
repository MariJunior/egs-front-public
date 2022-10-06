import { Meta, Story } from '@storybook/react';

import { Slider, SliderProps } from './slider';

import { testSlidesArray } from './data';

export default {
  component: Slider,
  title: 'Components/slider',
} as Meta;

const SliderStory: Story<SliderProps> = (props) => <Slider {...props} slides={testSlidesArray} />;

export const Default = SliderStory.bind({});
