import { Meta, Story } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Components/Button',
  decorators: [withKnobs],
} as Meta;

const ButtonStory: Story<ButtonProps> = (props: ButtonProps) => (
  <Button {...props} secondary={boolean('secondary', false)}>
    {text('content', 'smth')}
  </Button>
);

export const Default = ButtonStory.bind({});
