import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { SubscribeForm, SubscribeFormProps } from './subscribe-form';

export default {
  component: SubscribeForm,
  title: 'Components/SubscribeForm',
  decorators: [withKnobs],
} as Meta;

const SubscribeFormStory: Story<SubscribeFormProps> = (props: SubscribeFormProps) => <SubscribeForm {...props} />;

export const Default = SubscribeFormStory.bind({});
