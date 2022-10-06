import { Meta, Story } from '@storybook/react';

import { ArticleSidebar } from './article-sidebar';
import { ArticleSidebarProps } from './types';

export default {
  component: ArticleSidebar,
  title: 'Components/ArticleSidebar',
  args: {
    news: [
      {
        title: 'Как получить выплату на детей с 3 до 16 лет',
        date: '27 мая 2021',
        link: '/',
      },
      {
        title: 'Как получить выплату на детей с 3 до 16 лет',
        date: '16 мая 2021',
        link: '/',
      },
      {
        title: 'Как получить выплату на детей с 3 до 16 лет',
        date: '03 мая 2021',
        link: '/',
      },
      {
        title: 'Как получить выплату на детей с 3 до 16 лет',
        date: '07 мая 2021',
        link: '/',
      },
    ],
  },
} as Meta;

const ArticleSidebarStory: Story<ArticleSidebarProps> = (args: ArticleSidebarProps) => <ArticleSidebar {...args} />;

export const Default = ArticleSidebarStory.bind({});
