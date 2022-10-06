import { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { MainLayout } from 'layouts/main-layout';
import { Header } from 'layouts/header';
import { Footer } from 'layouts/footer';
import { headerPagesList } from 'layouts/header/data';
import { footerPagesList, footerCopyright } from 'layouts/footer/data';
import Logo from 'storybook/icons/logo.svg';
import { thirdPartyLinksAuth } from 'helpers/content/authorization/data';
import { socials } from 'components/social-media-list/data';
import { generalPartners, alsoPartners } from 'components/partners-list/data';
import { Slider } from 'components/slider';
import { SocialRoles } from 'components/social-roles';
import { InformationBlock, InformationCardProps } from 'components/information-block';
import { ApplicationCardProps, ApplicationsSlider } from 'components/applications-slider/applications-slider';
import { ArticlesBlock } from 'components/articles-block';
import { data } from 'components/articles-block/data';
import { getMediaquery } from 'helpers';
import { gql } from '@apollo/client';
import { client } from './apolloClient';
import {
  GetApplicationsDocument,
  GetApplicationsQuery,
  GetPrimaryBannersDocument,
  GetPrimaryBannersQuery,
  GetPrimaryCardsDocument,
  GetPrimaryCardsQuery,
  GetSocialRolesDocument,
  GetSocialRolesQuery,
} from 'generated/graphql';
import {
  applicationsResponseToProps,
  primaryBannersResponseToProps,
  primaryCardsResponseToProps,
  socialRolesResponseToProps,
} from 'apigql/converters';
import { SocialRoleProps } from 'components/social-roles/types';
import { SlideProps } from 'components';

gql`
  query GetBanners {
    primaryBanners {
      id
      icon
    }
  }
`;

interface MainPageProps {
  appSlides: ApplicationCardProps[];
  socialRoles: SocialRoleProps[];
  primaryCards: InformationCardProps[];
  primarySlides: SlideProps[];
}

const MainPage: FC<MainPageProps> = ({ appSlides, socialRoles, primaryCards, primarySlides }) => {
  return (
    <MainLayout
      header={
        <Header
          icon={Logo.src}
          currentPage="Каталог сервисов"
          pages={headerPagesList}
          authRecoveryLink="#"
          authGosuslugi="#"
          authThirdPartyLinks={thirdPartyLinksAuth}
        />
      }
      footer={
        <Footer
          pagesList={footerPagesList}
          socialMediaList={socials}
          generalPartnersList={generalPartners}
          otherPartnersList={alsoPartners}
          copyright={footerCopyright}
        />
      }
    >
      <BlueSphere />
      <PinkSphere />
      <Wrapper>
        <Slider slides={primarySlides} />
        <InformationBlock informationCards={primaryCards} />
      </Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <SocialRoles socialRoles={socialRoles} />
      </div>
      <ApplicationsSlider slides={appSlides} />
      <ArticlesBlock cards={data} />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const [appData, rolesData, infoData, slidesData] = await Promise.all([
    client.query<GetApplicationsQuery>({ query: GetApplicationsDocument }),
    client.query<GetSocialRolesQuery>({ query: GetSocialRolesDocument }),
    client.query<GetPrimaryCardsQuery>({ query: GetPrimaryCardsDocument }),
    client.query<GetPrimaryBannersQuery>({ query: GetPrimaryBannersDocument }),
  ]);

  return {
    props: {
      appSlides: applicationsResponseToProps(appData),
      socialRoles: socialRolesResponseToProps(rolesData),
      primaryCards: primaryCardsResponseToProps(infoData),
      primarySlides: primaryBannersResponseToProps(slidesData),
    },
  };
}

const FadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
  `;

const Wrapper = styled.div`
  position: relative;
  min-height: 440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  ${getMediaquery('sm')} {
    align-items: center;
    flex-direction: column;
    margin-bottom: 63px;
    overflow: hidden;
  }

  ${getMediaquery('lg')} {
    flex-direction: row;
    margin-bottom: 100px;
    overflow: visible;
  }
`;

const BlueSphere = styled.div`
  position: absolute;
  opacity: 0.8;
  animation: ${FadeAnimation} ease infinite;
  z-index: -2;
  background: radial-gradient(50% 50% at 53% 50%, #44a5ff 0, rgba(158, 191, 255, 0) 100%);
  overflow: hidden;
  ${getMediaquery('sm')} {
    width: 375px;
    height: 569px;
    bottom: -5%;
    right: 15%;
  }

  ${getMediaquery('md')} {
    width: 615px;
    height: 569px;
    top: 5%;
    right: -5%;
  }

  ${getMediaquery('lg')} {
    top: 20%;
    right: 60%;
  }
`;

const PinkSphere = styled.div`
  position: absolute;
  opacity: 0.8;
  animation: ${FadeAnimation} ease infinite;
  z-index: -1;
  overflow: hidden;
  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 173, 222, 0.5) 0, rgba(249, 111, 252, 0) 100%);

  ${getMediaquery('sm')} {
    width: 675px;
    height: 569px;
    top: 10%;
    right: -30%;
  }

  ${getMediaquery('md')} {
    width: 615px;
    height: 569px;
    top: 5%;
    left: -10%;
  }

  ${getMediaquery('lg')} {
    top: 30%;
    left: 50%;
  }
`;

export default MainPage;
