import { AppCardMiniBasicProps } from '../../components/cards/types';

import GosuslugiCard from '../../storybook/cards/gosuslugi.png';
import EkpCard from '../../storybook/cards/unity-map-petersburg.png';
import OtkrytyiGorodCard from '../../storybook/cards/open-city.png';
import ZdorovyePeterburzhtsaCard from '../../storybook/cards/health.png';
import TvoiByudzhetCard from '../../storybook/cards/your-budget.png';
import NashSPbCard from '../../storybook/cards/ourspb.png';

export const popularAppsData: AppCardMiniBasicProps[] = [
  {
    appIcon: GosuslugiCard,
    appName: 'Санкт-петербург госуслуги',
    appRating: 4.9,
  },
  {
    appIcon: EkpCard,
    appName: 'Единая карта петербуржца',
    appRating: 4.9,
  },
  {
    appIcon: OtkrytyiGorodCard,
    appName: 'Открытый город',
    appRating: 4.9,
  },
  {
    appIcon: ZdorovyePeterburzhtsaCard,
    appName: 'Здоровье петербуржца',
    appRating: 4.9,
  },
  {
    appIcon: TvoiByudzhetCard,
    appName: 'Твой бюджет',
    appRating: 3,
  },
  {
    appIcon: NashSPbCard,
    appName: 'Наш Санкт-Петербург',
    appRating: 4.9,
  },
];
