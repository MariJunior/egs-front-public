import { Meta, Story } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Flex, FlexProps } from './flex';

export default {
  component: Flex,
  title: 'Components/Flex',
  decorators: [withKnobs],
} as Meta;

const FlexStory: Story<FlexProps> = (props: FlexProps) => (
  <Flex
    justify={select('justify', ['flex-start', 'center', 'flex-end', 'space-between'], 'flex-start')}
    align={select('align', ['flex-start', 'center', 'flex-end'], 'flex-start')}
    direction={select('direction', ['row', 'column'], 'row')}
  >
    <div style={{ background: 'hotpink', color: 'white' }}>block 1</div>
    <div style={{ background: 'cadetblue', color: 'white' }}>block 2</div>
  </Flex>
);

export const Default = FlexStory.bind({});
