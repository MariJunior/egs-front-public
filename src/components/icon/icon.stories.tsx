import { Meta, Story } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { Icon, IconProps } from './icon';

export default {
  component: Icon,
  title: 'Components/Icon',
  decorators: [withKnobs],
} as Meta;

const IconStory: Story<IconProps> = (props: IconProps) => (
  <Icon {...props} icon={text('icon name', '')} width={number('width', 24)} height={number('height', 24)} />
);

export const Default = IconStory.bind({});
