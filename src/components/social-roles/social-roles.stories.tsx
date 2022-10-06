import { Meta, Story } from '@storybook/react';

import { SocialRoles } from './social-roles';
import { SocialRolesProps } from './types';
import { mainSocialBtnsArray } from './data';

export default {
  component: SocialRoles,
  title: 'Components/SocialRoles',
} as Meta;

const SocialButtonStory: Story<SocialRolesProps> = (props) => (
  <SocialRoles {...props} socialRoles={mainSocialBtnsArray} />
);

export const Default = SocialButtonStory.bind({});
