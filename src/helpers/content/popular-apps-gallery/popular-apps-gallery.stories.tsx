import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { popularAppsData } from './data';
import { PopularAppsGallery, PopularAppsGalleryProps } from './popular-apps-gallery';

export default {
  component: PopularAppsGallery,
  title: 'Content/PopularAppsGallery',
  decorators: [withKnobs],
} as Meta;

const PopularAppsGalleryStory: Story<PopularAppsGalleryProps> = (props: PopularAppsGalleryProps) => (
  <PopularAppsGallery {...props} filtersId="popular-apps-list" apps={popularAppsData} />
);

export const Default = PopularAppsGalleryStory.bind({});
