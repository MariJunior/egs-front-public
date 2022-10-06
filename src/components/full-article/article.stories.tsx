import { Meta, Story } from '@storybook/react';

import { Article, FullArticleProps } from './article';
import { fullArticle, socialNetworks } from './data';

import { services } from '../popular-services/data';

export default {
  component: Article,
  title: 'Components/Article',
} as Meta;

const ArticleStory: Story<FullArticleProps> = (args: FullArticleProps) => (
  <Article article={fullArticle} services={services} socialNetworks={socialNetworks} />
);

export const Default = ArticleStory.bind({});
