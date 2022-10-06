import styled from '@emotion/styled';

import { CatalogSection } from '../../src/components/catalog/catalog-section';
import Logo from '../../src/storybook/icons/logo.svg';
import { thirdPartyLinksAuth } from '../../src/helpers/content/authorization/data';
import { socials } from '../../src/components/social-media-list/data';
import { generalPartners, alsoPartners } from '../../src/components/partners-list/data';
import { headerPagesList } from '../../src/layouts/header/data';
import { footerPagesList, footerCopyright } from '../../src/layouts/footer/data';
import { MainLayout } from '../../src/layouts/main-layout';
import { Header } from '../../src/layouts/header';
import { Footer } from '../../src/layouts/footer';

import { mainSocialBtnsArray } from 'components/catalog/catalog-header/data';
import { GetServerSideProps } from 'next';
import { client } from '../apolloClient';
import {
  Enum_Application_Category,
  GetAllApplicationDocument,
  GetAllApplicationQuery,
  GetApplicationsDocument,
  GetApplicationsQuery,
  GetEditorsApplicationsDocument,
  GetEditorsApplicationsQuery,
  GetSidebarArticlesDocument,
  GetSidebarArticlesQuery,
} from '../../src/generated/graphql';
import { ApplicationLogo } from '../../src/components';
import {
  appCatalogPageToProps,
  editorChoiceCatalogToProps,
  sidebarArticlesResponseToProps,
} from '../../src/apigql/converters';
import { NewsProps } from '../../src/components/article-sidebar/types';

export interface CatalogLinkProps {
  Link: string;
  __typename: string;
  id: string;
}

export interface CatalogMetaInfoProps {
  Link: string;
  Title: string;
  Value: string;
  __typename: string;
  id: string;
}

export interface CardsCatalogPage {
  title: string;
  logo: ApplicationLogo;
  about?: string;
  category?: Enum_Application_Category | null;
  props?: CatalogMetaInfoProps[];
  links?: CatalogLinkProps[];
  cover?: {
    id: string;
    height: number;
    width: number;
    url: string;
  } | null;
}

export interface CatalogPageProps {
  catalogCards: CardsCatalogPage[];
  editorChoiceCards: CardsCatalogPage[];
  sidebarNews: NewsProps[];
  catalogCardsCount: number;
}

export const PAGE_SIZE = 4;

export default function CatalogPage({
  catalogCards,
  sidebarNews,
  editorChoiceCards,
  catalogCardsCount,
}: CatalogPageProps) {
  return (
    <>
      <MainLayout
        header={
          <Header
            icon={Logo.src}
            currentPage="Новости"
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
        <Wrapper>
          <CatalogSection
            catalogCards={catalogCards}
            roles={mainSocialBtnsArray}
            sidebarNews={sidebarNews}
            editorChoiceCards={editorChoiceCards}
            catalogCardsCount={catalogCardsCount}
          />
        </Wrapper>
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<CatalogPageProps> = async () => {
  const [appCatalogRawData, sidebarNews, editorChoiceRawData, catalogCardsCount] = await Promise.all([
    client.query<GetApplicationsQuery>({
      query: GetApplicationsDocument,
      variables: {
        start: 0,
        limit: PAGE_SIZE,
      },
    }),
    client.query<GetSidebarArticlesQuery>({
      query: GetSidebarArticlesDocument,
    }),
    client.query<GetEditorsApplicationsQuery>({
      query: GetEditorsApplicationsDocument,
    }),
    client.query<GetAllApplicationQuery>({
      query: GetAllApplicationDocument,
    }),
  ]);

  return {
    props: {
      catalogCards: appCatalogPageToProps(appCatalogRawData),
      editorChoiceCards: editorChoiceCatalogToProps(editorChoiceRawData),
      sidebarNews: sidebarArticlesResponseToProps(sidebarNews),
      catalogCardsCount: catalogCardsCount?.data?.applicationsCount,
    },
  };
};

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 0 auto 160px;

  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
`;
