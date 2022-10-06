import { FC, useEffect, useState } from 'react';
import { Header } from 'components/articles-block-header';
import styled from '@emotion/styled';
import { NewsCardMain } from 'components/cards/card-news-main';
import { NewsCardBasic } from 'components/cards/card-news-basic';
import { Banner, BannerProps } from 'components';
import { getMediaquery } from 'helpers';
import { ArticleProps } from 'components/articles-block';
import RoundedButton from '../rounded-button';
import { GetNewestArticlesQuery, useGetNewestArticlesLazyQuery } from '../../generated/graphql';
import dateFormat from '../../helpers/dateFormat';
import { newestArticlesResponseToProps } from '../../apigql/converters';
import { ApolloQueryResult } from '@apollo/client';

export interface NewsListingProps {
  title: string;
  articles: ArticleProps[];
  banner: BannerProps;
}

const initialArticlsCount = 7;
const loadMoreCount = 10;

function articleDateToText(date: string | undefined): string {
  return dateFormat(date || '', 'ru').toLowerCase();
}

export const NewsListing: FC<NewsListingProps> = ({ title, articles, banner }) => {
  const [currentTab, setCurrentTab] = useState<typeof articles>(articles);
  const [articlesList, setArticlesList] = useState(articles);
  const [moreShown, setMoreShown] = useState(articlesList.length >= initialArticlsCount);

  const mainArticle = currentTab[0];
  const articlesBeforeBanner = articlesList.slice(1, 5);
  const articlesAfterBanner = articlesList.slice(5);

  const [loadMore, { called, loading, data, fetchMore }] = useGetNewestArticlesLazyQuery({
    variables: {
      start: articlesBeforeBanner.length + articlesAfterBanner.length,
      limit: loadMoreCount,
    },
  });

  useEffect(() => {
    if (loading || !called) {
      return;
    }
    const moreArticles = newestArticlesResponseToProps({ data } as ApolloQueryResult<GetNewestArticlesQuery>);
    setArticlesList([...articlesList, ...moreArticles]);
    if (moreArticles.length < loadMoreCount) {
      setMoreShown(false);
    }
  }, [loading]);

  const onMoreClick = (): void | undefined => {
    if (!called) {
      loadMore();
      return;
    }
    if (fetchMore) {
      fetchMore({
        variables: {
          start: articlesBeforeBanner.length + articlesAfterBanner.length,
          limit: loadMoreCount,
        },
      });
    }
  };

  return (
    <Wrapper>
      <Header title={title} cards={articles} setCurrentTab={setCurrentTab} hideFilters={true} />
      <CardsWrapper>
        <NewsCardMain
          imageSrc={mainArticle.image.src}
          title={mainArticle.title}
          subtitle={mainArticle.subtitle!}
          date={articleDateToText(mainArticle.date).toLowerCase()}
        />
        <Row>
          {articlesBeforeBanner.map((article) => (
            <NewsCardBasic
              key={article.id}
              imageSrc={article.image.src}
              title={article.title}
              subtitle={article.subtitle!}
              date={articleDateToText(article.date).toLowerCase()}
            />
          ))}
        </Row>
        <Banner {...banner} />
        <Row>
          {articlesAfterBanner.map((article) => (
            <NewsCardBasic
              key={article.id}
              imageSrc={article.image.src}
              title={article.title}
              subtitle={article.subtitle!}
              date={articleDateToText(article.date).toLowerCase()}
            />
          ))}
        </Row>
      </CardsWrapper>
      <MoreWrapper>{moreShown && <RoundedButton onClick={onMoreClick}>Показать ещё</RoundedButton>}</MoreWrapper>
    </Wrapper>
  );
};

const MoreWrapper = styled.div`
  display: flex;
  justify-content: end;

  width: 100%;

  margin-top: 60px;
  ${getMediaquery('lg')} {
    margin-top: 65px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-right: 40px;

  ${getMediaquery('lg')} {
    max-width: 853px;
  }
`;

const Row = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  row-gap: 40px;

  ${getMediaquery('sm')} {
    width: 335px;
  }
  ${getMediaquery('md')} {
    width: 753px;
  }
  ${getMediaquery('lg')} {
    width: 853px;
  }
`;
const CardsWrapper = styled.div`
  margin-top: 40px;
  margin-right: 60px;

  ${getMediaquery('sm')} {
    margin-right: 0;
  }
`;
