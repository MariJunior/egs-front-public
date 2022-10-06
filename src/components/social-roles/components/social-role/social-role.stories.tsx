import { Meta, Story } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { SocialRole } from './social-role';

import { SocialButtonProps } from '../../types';

import worker from '../../../../assets/social-icons-main/worker.svg';

export default {
  component: SocialRole,
  title: 'Components/Social-role-button',
} as Meta;

const SocialButtonStory: Story<SocialButtonProps> = (props) => (
  <SocialRole {...props} title={text('title', 'Тестирование кнопки')} icon={text('icon', worker)} />
);

export const Default = SocialButtonStory.bind({});
