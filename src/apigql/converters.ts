import {
  Enum_Application_Category,
  GetApplicationQuery,
  GetApplicationsQuery,
  GetArticleQuery,
  GetFeaturedBannerQuery,
  GetNewestArticlesQuery,
  GetPrimaryBannersQuery,
  GetPrimaryCardsQuery,
  GetSidebarArticlesQuery,
  GetSocialRolesQuery,
} from '../generated/graphql';
import {
  ApplicationCardProps,
  InformationCardProps,
  ArticleProps,
  SlideProps,
  BannerProps,
  FullArticlePropsArticle,
} from '../components';
import { ApolloQueryResult } from '@apollo/client';
import { SocialRoleProps } from '../components/social-roles/types';
import { CardsCatalogPage, CatalogLinkProps, CatalogMetaInfoProps } from '../../pages/catalog-page';
import { NewsProps } from '../components/article-sidebar/types';
import dateFormat from '../helpers/dateFormat';
import { AppPageProps } from '../../pages/app-page/[id]';
import { appLinkProperties } from '../components/cards/card-detailed/data';

export function applicationsResponseToProps({ data }: ApolloQueryResult<GetApplicationsQuery>): ApplicationCardProps[] {
  const arr: ApplicationCardProps[] = [];

  data?.applications?.forEach((item) => {
    arr.push({
      Name: item?.Name || '',
      ShortDescription: item?.ShortDescription || '',
      Category: item?.Category || null,
      Logo: {
        url: item?.Logo?.url || '',
        width: item?.Logo?.width || 0,
        height: item?.Logo?.height || 0,
      },
    });
  });

  return arr;
}

export function socialRolesResponseToProps({ data }: ApolloQueryResult<GetSocialRolesQuery>): SocialRoleProps[] {
  const arr: SocialRoleProps[] = [];

  data?.socialRoles?.forEach((item) => {
    arr.push({
      Description: item?.Description || '',
      Name: item?.Name || '',
      id: item?.id || '',
      Icon: {
        src: item?.Icon?.url || '',
        width: item?.Icon?.width || 0,
        height: item?.Icon?.height || 0,
      },
    });
  });

  return arr;
}

export function primaryCardsResponseToProps({ data }: ApolloQueryResult<GetPrimaryCardsQuery>): InformationCardProps[] {
  const arr: InformationCardProps[] = [];

  data?.primaryCard?.Cards.forEach((item) => {
    arr.push({
      id: item?.id || 0,
      Title: item?.Title || '',
      Description: item?.Description || '',
      Link: item?.Link || '',
      Image: {
        url: item?.Image?.url || '',
        width: item?.Image?.width || 0,
        height: item?.Image?.height || 0,
      },
    });
  });

  return arr;
}

export function primaryBannersResponseToProps({ data }: ApolloQueryResult<GetPrimaryBannersQuery>): SlideProps[] {
  const arr: SlideProps[] = [];

  data?.primaryBanners?.forEach((item) => {
    if (!item) return;

    const { id = 0, Link = '', Description = '', Title = '' } = item;
    const { Image } = item;

    arr.push({
      id,
      Link,
      Description: Description || '',
      Title,
      Image: {
        url: Image?.url || '',
        width: Image?.width || 0,
        height: Image?.height || 0,
      },
    });
  });

  return arr;
}

export function newestArticlesResponseToProps({ data }: ApolloQueryResult<GetNewestArticlesQuery>): ArticleProps[] {
  const arr: ArticleProps[] = [];

  data.newsArticles?.forEach((item) => {
    if (!item) return;

    const { id = 0, published_at: date = '', Title: title = '', ShortDescription: subtitle = '' } = item;
    const { Cover } = item;

    arr.push({
      id: +id,
      date,
      title,
      subtitle,
      tag: '',
      image: {
        src: Cover?.url || '',
        height: Cover?.height || 0,
        width: Cover?.width || 0,
      },
    });
  });

  return arr;
}

export function sidebarArticlesResponseToProps({ data }: ApolloQueryResult<GetSidebarArticlesQuery>): NewsProps[] {
  const arr: NewsProps[] = [];

  data?.newsArticles?.forEach((item) => {
    arr.push({
      title: item?.Title || '',
      date: dateFormat(item?.published_at, 'ru'),
      link: `/articles/${item?.id}`,
    });
  });

  return arr;
}

export function featuredBannerResponseToProps({ data }: ApolloQueryResult<GetFeaturedBannerQuery>): BannerProps {
  const { featuredBanner } = data;
  const primary_banner = featuredBanner?.primary_banner;
  const Application = primary_banner?.Application;

  return {
    href: primary_banner?.Link || '',
    iconImage: {
      src: Application?.Logo?.url || '',
      width: Application?.Logo?.width || 0,
      height: Application?.Logo?.height || 0,
    },
    linkText: 'Узнать больше',
    mainImage: {
      src: primary_banner?.Image?.url || '',
      width: primary_banner?.Image?.width || 0,
      height: primary_banner?.Image?.height || 0,
    },
    subtitle: primary_banner?.Description || '',
    title: primary_banner?.Title || '',
  };
}

export function appPageToProps({ data }: ApolloQueryResult<GetApplicationQuery>): AppPageProps {
  const info: { [key: string]: any } = {
    name: data?.application?.Name || '%appName%',
    icon: data?.application?.Logo?.url || '',
    summary: data?.application?.ShortDescription || '%appDescription%',
  };

  info.links =
    data?.application?.ApplicationLinks?.map((data) => {
      const typename = data?.__typename;
      const Link = data?.Link;
      //https://eslint.org/docs/rules/no-prototype-builtins
      //resolve of typename!
      const linkData = appLinkProperties[typename!];
      const LinkText = linkData.text === '%%' ? Link : linkData.text;
      return {
        id: data?.id,
        link: Link,
        linkText: LinkText,
        linkTypeName: typename,
      };
    }) || [];

  info.props =
    data?.application?.ApplicationProperties?.map((data) => {
      return {
        title: data?.Title || '',
        value: data?.Value || '',
        link: data?.Link || '',
      };
    }) || [];

  return info as AppPageProps;
}

export function articleResponseToProps({ data }: ApolloQueryResult<GetArticleQuery>): FullArticlePropsArticle {
  const { newsArticle } = data;
  return {
    title: newsArticle?.Title || '',
    date: newsArticle?.published_at || '',
    body: newsArticle?.Body || '',
    cover: {
      url: newsArticle?.Cover?.url || '',
      width: newsArticle?.Cover?.width || 0,
      height: newsArticle?.Cover?.height || 0,
    },
  };
}

export function appCatalogPageToProps({ data }: ApolloQueryResult<GetApplicationsQuery>) {
  const catalogCards: Array<CardsCatalogPage> = [];

  data?.applications?.forEach((item, index) => {
    if (!item) return;

    const {
      id = '',
      Name = '',
      ShortDescription = '',
      Category = null,
      ApplicationLinks = [],
      ApplicationProperties = [],
      Logo,
    } = item;

    if (Category !== Enum_Application_Category.EditorsChoise) {
      const currentItem = {
        title: Name,
        about: ShortDescription,
        category: Category,
        links: ApplicationLinks as CatalogLinkProps[],
        props: ApplicationProperties as CatalogMetaInfoProps[],
        logo: {
          height: Logo?.height || 0,
          width: Logo?.width || 0,
          url: Logo?.url || '',
        },
      };

      catalogCards.push(currentItem);
    }
  });

  return catalogCards;
}

export function editorChoiceCatalogToProps({ data }: ApolloQueryResult<GetApplicationsQuery>) {
  const editorChoiceCards: Array<CardsCatalogPage> = [];

  data?.applications?.forEach((item, index) => {
    if (!item) return;

    const {
      id = '',
      Name = '',
      ShortDescription = '',
      Category = null,
      ApplicationLinks = [],
      ApplicationProperties = [],
      Logo,
      Cover,
    } = item;

    const currentItem = {
      title: Name,
      about: ShortDescription,
      category: Category,
      links: ApplicationLinks as CatalogLinkProps[],
      props: ApplicationProperties as CatalogMetaInfoProps[],
      logo: {
        height: Logo?.height || 0,
        width: Logo?.width || 0,
        url: Logo?.url || '',
      },
      cover: {
        height: Cover?.height || 0,
        width: Cover?.width || 0,
        url: Cover?.url || '',
        id: Cover?.id || '0',
      },
    };

    editorChoiceCards.push(currentItem);
  });

  return editorChoiceCards;
}
