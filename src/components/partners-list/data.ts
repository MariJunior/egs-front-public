import { CommonIconLinkProps } from '../../types';

import SpbGovIcon from '../../storybook/cards/spbGovernment.svg';
import TouristBureauIcon from '../../storybook/cards/tourismSpbBuro.svg';
import CongressBureauIcon from '../../storybook/cards/CongressBuroSpb.svg';
import NationalTourismPortalIcon from '../../storybook/cards/NationalTouristPortal.png';
import YandexIcon from '../../storybook/cards/Yandex.svg';
import VKIcon from '../../storybook/cards/VK.svg';
import CulturalCapitalIcon from '../../storybook/cards/cultureCapital.svg';
import BestPetersburgIcon from '../../storybook/cards/BestPetersburg.svg';

export const generalPartners: CommonIconLinkProps[] = [
  {
    logo: SpbGovIcon,
    name: 'Правительство Санкт-Петербурга Комитет по развитию  туризма Санкт-Петербурга',
    link: '/',
  },
  {
    logo: TouristBureauIcon,
    name: 'Туристско-информационное бюро Санкт-Петербурга',
    link: '/',
  },
  {
    logo: CongressBureauIcon,
    name: 'Конгрессно-выставочное бюро Санкт-Петербурга',
    link: '/',
  },
  {
    logo: NationalTourismPortalIcon,
    name: 'Национальный туристический портал',
    link: '/',
  },
];

export const alsoPartners: CommonIconLinkProps[] = [
  {
    logo: YandexIcon,
    name: 'Яндекс',
    link: '/',
  },
  {
    logo: VKIcon,
    name: 'Вконтакте',
    link: '/',
  },
  {
    logo: CulturalCapitalIcon,
    name: 'Культурная столица',
    link: '/',
  },
  {
    logo: BestPetersburgIcon,
    name: 'Best Petersburg',
    link: '/',
  },
];
