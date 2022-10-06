import { Meta, Story } from '@storybook/react';

import FullArticlePage from './[id]';

export default {
  component: FullArticlePage,
  title: 'Pages/FullArticlePage',
} as Meta;

const FullArticlePageStory: Story = () => <p>Not pereneseno</p>;

export const Default = FullArticlePageStory.bind({});
