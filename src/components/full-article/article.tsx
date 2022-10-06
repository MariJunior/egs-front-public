import React, { FC } from 'react';
import styled from '@emotion/styled';

import { fontColors, switchProp } from '../../helpers';
import { getMediaquery } from '../../helpers';
import { ArticleHeader } from './components/article-header';
import { ArticleShare, ArticleShareSocialNetworksProp } from './components/article-share';
import { compiler } from 'markdown-to-jsx';
import { Banner, BannerProps } from '../banner';
import { css } from '@emotion/react';

export interface FullArticlePropsArticle {
  title: string;
  date: string;
  body: string;
  cover: {
    url: string;
    width: number;
    height: number;
  };
}

export interface FullArticleProps {
  article: FullArticlePropsArticle;
  banner: BannerProps;
  socialNetworks: ArticleShareSocialNetworksProp[];
}

export const Article: FC<FullArticleProps> = ({ article, banner, socialNetworks }) => {
  const { body } = article;

  return (
    <ArticleWrapper>
      <ArticleHeader title={article.title} date={article.date} />
      <HeadImage src={article.cover.url} alt="Article cover" />
      {compiler(body, {
        wrapper: null,
        createElement(tag, props, ...children) {
          switch (tag) {
            case 'h1':
            case 'h2':
            case 'h3':
              return <SubtitleBig as={tag}>{children}</SubtitleBig>;
            case 'h4':
            case 'h5':
            case 'h6':
              return <SubtitleSmall as={tag}>{children}</SubtitleSmall>;
            case 'strong':
              return <strong>{children}</strong>;
            case 'em':
              return <em>{children}</em>;
            case 'u':
              return <u>{children}</u>;
            case 'del':
              return <del>{children}</del>;
            case 'code':
              return <code>{children}</code>;
            case 'a':
              return <a {...props}>{children}</a>;
            case 'p':
              return <Paragraph>{children}</Paragraph>;
            case 'img':
              return <ContentImage {...props} />;
            case 'ul':
            case 'ol':
              return <List as={tag}>{children}</List>;
            case 'blockquote':
              return <Quote>{children}</Quote>;
            case 'pre':
              return <SideIndent as={tag}>{children}</SideIndent>;
            case 'li':
              return <li>{children}</li>;
            default:
              return <p>{children}</p>;
          }
        },
      })}
      <Banner {...banner} />
      <ArticleShare socialNetworks={socialNetworks} />
    </ArticleWrapper>
  );
};

const SideIndent = styled.div`
  padding: 0 20px;

  ${getMediaquery('lg')} {
    padding: 0 10px;
  }
`;

const ArticleWrapper = styled.div`
  width: 100%;
  max-width: 853px;

  padding-bottom: 32px;

  font-family: Ubuntu, sans-serif;
  letter-spacing: -0.154px;
  color: ${fontColors.grey};

  ${getMediaquery('md')} {
    max-width: 100%;
  }

  ${getMediaquery('lg')} {
    margin-right: 40px;
  }

  & > img[alt='Article cover'] + * {
    margin-top: 0;
  }
`;

const Quote = styled.blockquote`
  padding: 16px;
  background-color: ${fontColors.blueSky};

  p {
    margin: 0;
  }

  border-radius: unset;

  ${getMediaquery('lg')} {
    border-radius: 10px;
  }
`;

type ListProps = {
  as: 'ol' | 'ul';
};

const List = styled.ol<ListProps>`
  margin: 12px 0 24px 0;
  padding: 0 40px;

  ${switchProp('as', {
    ol: css`
      & > li {
        padding-left: 4px;
      }
    `,
    ul: css`
      & > li {
        margin-left: 3px;
      }
    `,
  })}

  ${getMediaquery('sm')} {
    margin: 18px 0 32px 0;
  }

  ${getMediaquery('lg')} {
    margin: 12px 0 32px 0;
    padding: 0 20px;
  }
`;

const SubtitleBig = styled(SideIndent.withComponent('h3'))`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: ${fontColors.bahamaBlue};

  margin: 36px 0 18px 0;

  ${getMediaquery('sm')} {
    margin: 44px 0 19px 0;
  }
  ${getMediaquery('lg')} {
    margin: 44px 0 32px 0;
  }
`;

const SubtitleSmall = styled(SideIndent.withComponent('h6'))`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${fontColors.bahamaBlue};

  margin: 24px 0 12px 0;

  ${getMediaquery('sm')} {
    margin: 32px 0 18px 0;
  }
  ${getMediaquery('lg')} {
    margin: 32px 0 12px 0;
  }
`;

const HeadImage = styled.img`
  object-fit: contain;

  width: 100%;
  height: 400px;

  margin: 0 0 24px 0;

  border-radius: 0;

  ${getMediaquery('sm')} {
    margin: 0 0 32px 0;
    height: 220px;
  }

  ${getMediaquery('md')} {
    height: 360px;
  }

  ${getMediaquery('lg')} {
    border-radius: 5px;
  }
`;

const ContentImage = styled.img`
  object-fit: contain;

  width: 100%;
  height: 220px;
  margin: 32px 0;
  border-radius: 8px;

  ${getMediaquery('md')} {
    height: 360px;
  }
`;

const Paragraph = styled(SideIndent.withComponent('p'))`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: ${fontColors.grey};

  img {
    position: relative;
    left: -20px;
    width: calc(100% + 40px);
    ${getMediaquery('lg')} {
      left: 0;
      width: 100%;
    }
  }
`;
