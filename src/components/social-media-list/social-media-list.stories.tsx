import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { socials } from './data';
import { SocialMediaList, SocialMediaListProps } from './social-media-list';

export default {
  component: SocialMediaList,
  title: 'Components/SocialMediaList',
  decorators: [withKnobs],
} as Meta;

const SocialMediaListStory: Story<SocialMediaListProps> = (props: SocialMediaListProps) => (
  <SocialMediaList {...props} platforms={socials} />
);

export const Default = SocialMediaListStory.bind({});
