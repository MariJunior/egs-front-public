import { FC } from 'react';
import styled from '@emotion/styled';

import { Article, ArticleSidebar, BannerProps, FullArticlePropsArticle } from '../../src/components';
import Logo from '../../src/storybook/icons/logo.svg';
import { thirdPartyLinksAuth } from '../../src/helpers/content/authorization/data';
import { socials } from '../../src/components/social-media-list/data';
import { generalPartners, alsoPartners } from '../../src/components/partners-list/data';
import { headerPagesList } from '../../src/layouts/header/data';
import { footerPagesList, footerCopyright } from '../../src/layouts/footer/data';
import { MainLayout } from '../../src/layouts/main-layout';
import { Header } from '../../src/layouts/header';
import { Footer } from '../../src/layouts/footer';
import { socialNetworks } from '../../src/components/full-article/data';
import { GetServerSideProps } from 'next';
import { client } from '../apolloClient';
import {
  GetArticleDocument,
  GetArticleQuery,
  GetFeaturedBannerDocument,
  GetFeaturedBannerQuery,
  GetSidebarArticlesDocument,
  GetSidebarArticlesQuery,
} from '../../src/generated/graphql';
import {
  articleResponseToProps,
  featuredBannerResponseToProps,
  sidebarArticlesResponseToProps,
} from '../../src/apigql/converters';
import { NewsProps } from '../../src/components/article-sidebar/types';

interface FulLArticlePageProps {
  article: FullArticlePropsArticle;
  news: NewsProps[];
  banner: BannerProps;
}

const FullArticlePage: FC<FulLArticlePageProps> = ({ article, news, banner }) => {
  return (
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
      <ArticleWrapper>
        <Row>
          <Article banner={banner} article={article} socialNetworks={socialNetworks} />
          <ArticleSidebar news={news} />
        </Row>
      </ArticleWrapper>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<FulLArticlePageProps, { id: string }> = async (context) => {
  const id = context?.params?.id as string;
  const [articleData, sidebarNews, bannerData] = await Promise.all([
    client.query<GetArticleQuery>({ query: GetArticleDocument, variables: { id } }),
    client.query<GetSidebarArticlesQuery>({ query: GetSidebarArticlesDocument }),
    client.query<GetFeaturedBannerQuery>({ query: GetFeaturedBannerDocument }),
  ]);
  return {
    props: {
      article: articleResponseToProps(articleData),
      news: sidebarArticlesResponseToProps(sidebarNews),
      banner: featuredBannerResponseToProps(bannerData),
    },
  };
};

const ArticleWrapper = styled.div`
  max-width: 1260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 160px;
  overflow: hidden;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;

export default FullArticlePage;
