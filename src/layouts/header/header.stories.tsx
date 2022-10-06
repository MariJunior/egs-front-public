import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Logo from '../../storybook/icons/logo.svg';
import { thirdPartyLinksAuth } from '../../helpers/content/authorization/data';

import { headerPagesList } from './data';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'Layouts/Header/Header',
  decorators: [withKnobs],
} as Meta;

const HeaderStory: Story<HeaderProps> = (props: HeaderProps) => (
  <Header
    {...props}
    icon={Logo}
    currentPage={text('currentPage', 'Каталог сервисов ')}
    pages={headerPagesList}
    authRecoveryLink="/"
    authGosuslugi="/"
    authThirdPartyLinks={thirdPartyLinksAuth}
  />
);

export const Default = HeaderStory.bind({});
