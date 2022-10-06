import { CommonIconLinkProps } from '../../../types';

import YandexAuthIcon from '../../../storybook/icons/icon-auth-yandex.svg';
import VkAuthIcon from '../../../storybook/icons/icon-auth-vkontakte.svg';
import MailAuthIcon from '../../../storybook/icons/icon-auth-mail.svg';
import FacebookAuthIcon from '../../../storybook/icons/icon-auth-facebook.svg';
import GoogleAuthIcon from '../../../storybook/icons/icon-auth-google.svg';
import OkAuthIcon from '../../../storybook/icons/icon-auth-ok.svg';

export const thirdPartyLinksAuth: CommonIconLinkProps[] = [
  {
    name: 'Яндекс',
    link: '/',
    logo: YandexAuthIcon,
  },
  {
    name: 'Вконтакте',
    link: '/',
    logo: VkAuthIcon,
  },
  {
    name: 'Mail.ru',
    link: '/',
    logo: MailAuthIcon,
  },
  {
    name: 'Facebook',
    link: '/',
    logo: FacebookAuthIcon,
  },
  {
    name: 'Google',
    link: '/',
    logo: GoogleAuthIcon,
  },
  {
    name: 'Одноклассники',
    link: '/',
    logo: OkAuthIcon,
  },
];
