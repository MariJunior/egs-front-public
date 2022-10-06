import styled from '@emotion/styled';

import { MainLayout } from 'layouts/main-layout';
import { Header } from 'layouts/header';
import { Footer } from 'layouts/footer';
import { headerPagesList } from 'layouts/header/data';
import { footerPagesList, footerCopyright } from 'layouts/footer/data';
import Logo from 'storybook/icons/logo.svg';
import { thirdPartyLinksAuth } from 'helpers/content/authorization/data';
import { socials } from 'components/social-media-list/data';
import { generalPartners, alsoPartners } from 'components/partners-list/data';

import { getMediaquery } from 'helpers';

import { NewsListing } from 'components/news-listing';
import { ArticleProps, ArticleSidebar, BannerProps } from 'components';
import { GetServerSideProps, NextPage } from 'next';
import {
  GetFeaturedBannerDocument,
  GetFeaturedBannerQuery,
  GetNewestArticlesDocument,
  GetNewestArticlesQuery,
  GetSidebarArticlesDocument,
  GetSidebarArticlesQuery,
} from '../../src/generated/graphql';
import { client } from '../apolloClient';
import {
  featuredBannerResponseToProps,
  newestArticlesResponseToProps,
  sidebarArticlesResponseToProps,
} from '../../src/apigql/converters';
import { NewsProps } from '../../src/components/article-sidebar/types';

interface NextPageProps {
  initialArticles: ArticleProps[];
  sidebarNews: NewsProps[];
  featuredBanner: BannerProps;
}

const NewsPage: NextPage<NextPageProps> = ({ initialArticles, sidebarNews, featuredBanner }) => {
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
      <Wrapper>
        <NewsListing articles={initialArticles} title={'Новости'} banner={featuredBanner} />
        {/*<ArticleSidebar news={sidebarNews} />*/}
      </Wrapper>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [initialArticles, sidebarNews, featuredBanner] = await Promise.all([
    client.query<GetNewestArticlesQuery>({
      query: GetNewestArticlesDocument,
      variables: {
        start: 0,
        limit: 7,
      },
    }),
    client.query<GetSidebarArticlesQuery>({ query: GetSidebarArticlesDocument }),
    client.query<GetFeaturedBannerQuery>({ query: GetFeaturedBannerDocument }),
  ]);

  return {
    props: {
      initialArticles: newestArticlesResponseToProps(initialArticles),
      sidebarNews: sidebarArticlesResponseToProps(sidebarNews),
      featuredBanner: featuredBannerResponseToProps(featuredBanner),
    },
  };
};

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
    padding-bottom: 40px;
    overflow: hidden;
  }

  ${getMediaquery('lg')} {
    flex-direction: row;
    padding-bottom: 70px;
    overflow: visible;
  }
`;

export default NewsPage;
