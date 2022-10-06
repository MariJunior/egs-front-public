import { Meta, Story } from '@storybook/react';

import { CatalogCard, CatalogCardProps } from './catalog-card';

import yandex from '../../../../../icons/fa-solid_yandex.svg';

export default {
  component: CatalogCard,
  title: 'Components/Cards/CatalogCard',
  args: {
    card: {
      title: 'title',
      icon: yandex,
      link: { href: 'http://link.com', text: 'text' },
      about:
        'Портала электронных сервисов здравоохранения принадлежит Комитету по здравоохранению и Администрации города Санкт-Петербурга',
      rating: 4,
      developer: 'mailRu',
      socialNetworks: [{ title: 'vk', href: 'https://vk.com' }],
      updated: 'Сегодня',
      tabletLinks: [
        {
          icon: yandex,
          title: 'website.spb.ru',
          href: 'http://website.spb.ru',
        },
      ],
    },
    type: 'primary' || 'secondary',
  },
} as Meta;

const CatalogCardStory: Story<CatalogCardProps> = (args) => <CatalogCard {...args} />;

export const Default = CatalogCardStory.bind({});
