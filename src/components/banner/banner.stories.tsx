import { Meta, Story } from '@storybook/react';

import { Banner, BannerProps } from './banner';

import bannerImage from '../../assets/banner_image.png';
import bannerButton from '../../assets/banner_button.svg';

export default {
  component: Banner,
  title: 'Components/Banner',
  args: {
    title: 'Здоровье петербуржца',
    subtitle: 'Поддержка и развитие регионов',
    linkText: 'Узнать больше',
    href: '/',
    mainImage: bannerImage,
    iconImage: bannerButton,
  },
} as Meta;

const BannerStory: Story<BannerProps> = (args: BannerProps) => <Banner {...args} />;

export const Default = BannerStory.bind({});
