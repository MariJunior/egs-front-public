import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Header } from '../header';
import { Footer } from '../footer';
import { headerPagesList } from '../header/data';
import { footerPagesList } from '../footer/data';
import { thirdPartyLinksAuth } from '../../helpers/content/authorization/data';
import { socials } from '../../components/social-media-list/data';
import { generalPartners, alsoPartners } from '../../components/partners-list/data';
import Logo from '../../storybook/icons/logo.svg';

import { MainLayout, MainLayoutProps } from './main-layout';

export default {
  component: MainLayout,
  title: 'Layouts/MainLayout',
  decorators: [withKnobs],
} as Meta;

const MainLayoutStory: Story<MainLayoutProps> = (props: MainLayoutProps) => (
  <MainLayout
    {...props}
    header={
      <Header
        icon={Logo}
        currentPage={text('currentPage', 'Каталог сервисов ')}
        pages={headerPagesList}
        authRecoveryLink="/"
        authGosuslugi="/"
        authThirdPartyLinks={thirdPartyLinksAuth}
      />
    }
    footer={
      <Footer
        pagesList={footerPagesList}
        socialMediaList={socials}
        generalPartnersList={generalPartners}
        otherPartnersList={alsoPartners}
        copyright={text('Copyright', 'Petersburg.ru 2021 ©  Комитет по информатизации и связи')}
      />
    }
  />
);

export const Default = MainLayoutStory.bind({});
