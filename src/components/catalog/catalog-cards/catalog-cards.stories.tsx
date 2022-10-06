import { Meta, Story } from '@storybook/react';

import { CatalogCards, CatalogCardsProps } from './catalog-cards';

export default {
  component: CatalogCards,
  title: 'Components/Catalog/Catalog-Cards',
  args: {
    catalogCards: [
      {
        title: 'title',
        icon: 'icon',
        link: { href: 'href', text: 'text' },
        about: 'about',
        rating: 4,
        developer: 'developer',
        socialNetworks: [{ title: 'title', href: 'https://vk.com' }],
        updated: 'Сегодня',
        tabletLinks: [
          {
            icon: 'icon',
            title: 'title',
            href: 'http://website.spb.ru',
          },
        ],
      },
    ],
  },
} as Meta;

const CatalogCardsStory: Story<CatalogCardsProps> = (args: CatalogCardsProps) => <CatalogCards {...args} />;

export const Default = CatalogCardsStory.bind({});
