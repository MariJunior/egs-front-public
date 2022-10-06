import { CommonIconLinkProps } from '../../types';

import VkRoundIcon from '../../storybook/icons/icon-round-vk.svg';
import TgRoundIcon from '../../storybook/icons/icon-round-telegram.svg';
import ZenRoundIcon from '../../storybook/icons/icon-round-zen.svg';

export const socials: CommonIconLinkProps[] = [
  {
    name: 'Вконтакте',
    logo: VkRoundIcon,
    link: '/',
  },
  {
    name: 'Телеграм',
    logo: TgRoundIcon,
    link: '/',
  },
  {
    name: 'Я.Дзен',
    logo: ZenRoundIcon,
    link: '/',
  },
];
