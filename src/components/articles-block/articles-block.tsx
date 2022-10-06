import { FC, useState } from 'react';
import styled from '@emotion/styled';

import { Header } from '../articles-block-header';
import { ArticlesDesktopBody } from './components/articles-desktop-body';
import { ArticlesTabletBody } from './components/articles-tablet-body';

import { getMediaquery } from '../../helpers';

export interface ArticleProps {
  date?: string;
  id: number;
  image: StaticImageData;
  subtitle?: string;
  tag?: string;
  title: string;
}

export interface ArticlesBlockPropsInterface {
  cards: ArticleProps[];
  onMoreClick?: (e: any) => any;
}

export const ArticlesBlock: FC<ArticlesBlockPropsInterface> = ({ cards, onMoreClick }) => {
  const [currentTab, setCurrentTab] = useState<typeof cards>(cards);

  const sortedCards = cards.sort((a, b) => {
    if (a.date! > b.date!) {
      return 1;
    }
    return -1;
  });

  return (
    <>
      <PCWrapper>
        <Header setCurrentTab={setCurrentTab} cards={sortedCards} title="Интересно и полезно" />
        <ArticlesDesktopBody cards={currentTab} onMoreClick={onMoreClick} />
      </PCWrapper>
      <TabletWrapper>
        <Header title="Интересно и полезно" setCurrentTab={setCurrentTab} cards={sortedCards} />
        <ArticlesTabletBody cards={currentTab} onMoreClick={onMoreClick} />
      </TabletWrapper>
      <MobileWrapper>
        <Header title="Интересно и полезно" setCurrentTab={setCurrentTab} cards={sortedCards} />
        <ArticlesTabletBody cards={currentTab} onMoreClick={onMoreClick} />
      </MobileWrapper>
    </>
  );
};

const PCWrapper = styled.div`
  max-width: 1260px;
  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('md')} {
    display: none;
  }

  ${getMediaquery('lg')} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 172px auto;
  }
`;

const TabletWrapper = styled.div`
  display: none;
  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('md')} {
    max-width: 768px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }

  ${getMediaquery('lg')} {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  ${getMediaquery('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${getMediaquery('md')} {
    display: none;
  }

  ${getMediaquery('lg')} {
    display: none;
  }
`;
