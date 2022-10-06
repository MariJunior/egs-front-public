import iLiveHere from '../../../../public/assets/social-icons-main/iLiveHere.svg';
import loveSpb from '../../../../public/assets/social-icons-main/loveSpb.svg';
import { SocialRoleProps } from './types';

export const mainSocialBtnsArray: SocialRoleProps[] = [
  {
    id: 1,
    created_at: 'today',
    updated_at: 'yesterday',
    Name: 'Все',
  },

  {
    id: 2,
    created_at: 'today',
    updated_at: 'yesterday',
    Name: 'Я люблю Петербург',
    Icon: loveSpb,
  },
  {
    id: 3,
    created_at: 'today',
    updated_at: 'yesterday',
    Name: 'Я здесь живу',
    Icon: iLiveHere,
  },
];
