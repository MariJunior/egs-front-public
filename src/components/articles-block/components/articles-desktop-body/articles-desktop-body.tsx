import { FC } from 'react';
import styled from '@emotion/styled';

import { MainArticlesCard } from '../main-card';

import { ArticlesBlockPropsInterface } from '../../articles-block';

import { LinkButtonRounded } from '../../../link-button/link-button-rounded';
import { NewsCard } from '../../../news-card';

import { getMediaquery } from '../../../../helpers';

export const ArticlesDesktopBody: FC<ArticlesBlockPropsInterface> = ({ cards }) => {
  const renderDesktopMainCards = () => {
    return cards
      .slice(0, 2)
      .map((card) => (
        <MainArticlesCard
          key={card.id}
          title={card.title}
          subtitle={card.subtitle!}
          date={card.date!}
          image={card.image}
        />
      ));
  };

  const renderDesktopSecondaryCards = () => {
    return cards
      .slice(2, 5)
      .map((card) => (
        <NewsCard key={card.id} title={card.title} subtitle={card.subtitle!} date={card.date!} imageSrc={card.image} />
      ));
  };

  return (
    <>
      <Cards>
        {renderDesktopMainCards()}
        {renderDesktopSecondaryCards()}
      </Cards>
      {cards.length >= 6 && (
        <MoreLink link="/articles" platform="text" length="regular" colors="white" text="Показать еще" />
      )}
    </>
  );
};

const Cards = styled.div`
  ${getMediaquery('sm')} {
    margin-bottom: 30px;
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
    margin-top: 44px;
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
