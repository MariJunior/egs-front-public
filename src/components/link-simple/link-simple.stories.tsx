import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ReactComponent as ChatBotIcon } from '../../icons/fa-solid_robot.svg';

import { LinkSimple, LinkSimpleProps } from './link-simple';

export default {
  component: LinkSimple,
  title: 'Components/LinkSimple',
  decorators: [withKnobs],
} as Meta;

const LinkSimpleStory: Story<LinkSimpleProps> = (props: LinkSimpleProps) => (
  <LinkSimple {...props} link="/">
    <ChatBotIcon />
    Чат-бот
  </LinkSimple>
);

export const Default = LinkSimpleStory.bind({});
