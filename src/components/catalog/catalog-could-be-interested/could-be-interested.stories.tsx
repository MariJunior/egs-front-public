import { Meta, Story } from '@storybook/react';

import { CouldBeInterested, CouldBeInterestedProps } from './could-be-interested';

import yandex from '../../../icons/fa-solid_yandex.svg';

export default {
  component: CouldBeInterested,
  title: 'Components/Catalog/CouldBeInterested',
  args: {
    cards: [
      {
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
          {
            icon: yandex,
            title: 'website.spb.ru',
            href: 'http://website.spb.ru',
          },
          {
            icon: yandex,
            title: 'website.spb.ru',
            href: 'http://website.spb.ru',
          },
          {
            icon: yandex,
            title: 'website.spb.ru',
            href: 'http://website.spb.ru',
          },
        ],
      },
      {
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
    ],
  },
} as Meta;

const CouldBeInterestedStory: Story<CouldBeInterestedProps> = (args) => <CouldBeInterested {...args} />;

export const Default = CouldBeInterestedStory.bind({});
