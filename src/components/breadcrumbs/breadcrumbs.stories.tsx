import { Meta, Story } from '@storybook/react';

import { BreadCrumbs, BreadCrumbsProps } from './breadcrumbs';

export default {
  component: BreadCrumbs,
  title: 'Components/ArticleBreadcrumbs',
  args: {
    link: '/',
    place: 'Новости',
    currentPlace: 'Статья',
  },
} as Meta;

const ArticleBreadCrumbsStory: Story<BreadCrumbsProps> = (args: BreadCrumbsProps) => <BreadCrumbs {...args} />;

export const Default = ArticleBreadCrumbsStory.bind({});
