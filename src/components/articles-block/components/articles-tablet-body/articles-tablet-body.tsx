import { FC } from 'react';
import styled from '@emotion/styled';

import { MainArticlesCard } from '../main-card';

import { ArticlesBlockPropsInterface } from '../../articles-block';

import { NewsCard } from '../../../news-card';
import { LinkButtonRounded } from '../../../link-button/link-button-rounded';

import { getMediaquery } from '../../../../helpers';

export const ArticlesTabletBody: FC<ArticlesBlockPropsInterface> = ({ cards, onMoreClick }) => {
  const renderTabletMainCards = () => {
    return cards
      .slice(0, 1)
      .map((card) => (
        <MainArticlesCard
          key={Math.random()}
          title={card.title}
          subtitle={card.subtitle!}
          date={card.date!}
          image={card.image}
        />
      ));
  };

  const renderTabletSecondaryCards = () => {
    return cards
      .slice(1, 3)
      .map((card) => (
        <NewsCard
          key={Math.random()}
          title={card.title}
          subtitle={card.subtitle!}
          date={card.date!}
          imageSrc={card.image}
        />
      ));
  };

  return (
    <>
      <Cards>
        {renderTabletMainCards()}
        {renderTabletSecondaryCards()}
      </Cards>
      <MoreLink link="/articles" platform="text" length="regular" colors="white" text="Показать еще" />
    </>
  );
};

const Cards = styled.div`
  ${getMediaquery('sm')} {
    margin-top: 30px;
  }
  ${getMediaquery('md')} {
    max-width: 768px;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }
  ${getMediaquery('lg')} {
    max-width: 1260px;
    display: flex;
    justify-content: space-between;
  }
`;

const MoreLink = styled(LinkButtonRounded)`
  ${getMediaquery('sm')} {
    width: 170px;
    height: 50px;
    margin: 20px auto;
  }

  ${getMediaquery('md')} {
    margin: 70px auto;
  }

  ${getMediaquery('lg')} {
    margin-top: 53px;
  }
`;
