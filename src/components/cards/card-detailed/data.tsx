import { AppLinkProps, AppMetaInfoProps } from './types';

import { WebIcon } from 'helpers/icons/fa-solid_web';
import { ChatBotIcon } from 'helpers/icons/fa-solid_robot';
import { YandexIcon } from 'helpers/icons/fa-solid_yandex';
import { VkIcon } from 'helpers/icons/fa-solid_vk';
import { GooglePlayIcon } from 'helpers/icons/fa-solid_google-play';
import { AppleIcon } from 'helpers/icons/fa-solid_apple';

export const appLinkProperties = {
  ComponentApplicationLinkChatBotLink: {
    icon: <ChatBotIcon />,
    text: 'Чат-бот',
  },
  ComponentApplicationLinkAppStoreLink: {
    icon: <AppleIcon />,
    text: 'App store',
  },
  ComponentApplicationLinkHomepageLink: {
    icon: <WebIcon />,
    text: '%%',
  },
  ComponentApplicationLinkVkMiniAppLink: {
    icon: <VkIcon />,
    text: 'min app',
  },
  ComponentApplicationLinkGooglePlayLink: {
    icon: <GooglePlayIcon />,
    text: 'Google Play',
  },
};

export const appLinksEkpspb: AppLinkProps[] = [
  {
    link: '1',
    content: (
      <>
        <WebIcon /> website.spb.ru
      </>
    ),
  },
  {
    link: '/2',
    content: (
      <>
        <ChatBotIcon /> Чат-бот
      </>
    ),
  },
  {
    link: '/3',
    content: (
      <>
        <YandexIcon /> Yandex
      </>
    ),
  },
  {
    link: '/4',
    content: (
      <>
        <VkIcon /> mini app
      </>
    ),
  },
  {
    link: '/5',
    content: (
      <>
        <GooglePlayIcon /> Google Play
      </>
    ),
  },
  {
    link: '/6',
    content: (
      <>
        <AppleIcon /> App store
      </>
    ),
  },
];

export const appDetailsEkpspb: AppMetaInfoProps = {
  currentVer: '3.5.7',
  updateDate: '15 мая 2021 г.',
  size: '50,7 МБ',
  installs: '50 000 +',
  compability: {
    android: 'Android 6.0 и выше',
    ios: 'iOS 9.0 и выше',
  },
  developer: {
    name: 'СПб ГУП “СПб ИАЦ”',
  },
  permissionsLink: '/',
  reportLink: '/',
  contacts: {
    tel: '+7 (812) 432-18-32',
    website: 'gorod.gov.spb.ru',
    email: 'gorod.gov@spb.ru',
  },
  legalAddress: '197183, город Санкт-петербург, Дибуновская улица, дом 1/14',
  roles: [
    {
      roleName: 'Я люблю Петербург',
      link: '/',
    },
    {
      roleName: 'Я гражданин',
      link: '/',
    },
    {
      roleName: 'Я живу здесь',
      link: '/',
    },
    {
      roleName: 'Я молодец',
      link: '/',
    },
    {
      roleName: 'Я с питомцем',
      link: '/',
    },
  ],
};
