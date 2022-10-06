import { Meta, Story } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { MoreButton, MoreButtonProps } from './more-button';

export default {
  component: MoreButton,
  title: 'Components/rounded-button',
  decorators: [withKnobs],
} as Meta;

const MoreButtonStory: Story<MoreButtonProps> = (props: MoreButtonProps) => (
  <MoreButton {...props} contentOpened={boolean('contentOpened', false)} />
);

export const Default = MoreButtonStory.bind({});
