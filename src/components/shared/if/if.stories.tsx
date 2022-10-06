import { Meta, Story } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { If, IfProps } from './if';

export default {
  component: If,
  title: 'Components/Shared/If',
  decorators: [withKnobs],
} as Meta;

const TestChildren = () => {
  return <h2>Condition is met</h2>;
};

const TestElseChildren = () => {
  return <h2>Condition not met</h2>;
};

const IfStory: Story<IfProps> = (props: IfProps) => (
  <If {...props} condition={boolean('Condition state', true)} elseChildren={<TestElseChildren />}>
    <TestChildren />
  </If>
);

export const Default = IfStory.bind({});
