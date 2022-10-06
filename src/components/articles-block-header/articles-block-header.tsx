import { FC } from 'react';
import styled from '@emotion/styled';

import { fontColors, getMediaquery } from 'helpers';

import { ArticleProps } from '../articles-block/articles-block';

import { OptionProps } from '../cards-filters/types';
import { CardsFilters } from '../cards-filters';

export interface OptionsInterface {
  action: () => void;
  label: string;
  value: string;
}

export interface HeaderProps {
  cards: ArticleProps[];
  setCurrentTab: (arg: ArticleProps[]) => void;
  title: string;
  hideFilters: boolean;
}

export const Header: FC<HeaderProps> = ({ title, cards, setCurrentTab, hideFilters = false }) => {
  const showAll = () => {
    setCurrentTab(cards);
  };

  const showDiscussed = () => {
    const discussedNews = cards.filter((newCard) => newCard.tag === 'discussed');
    setCurrentTab(discussedNews);
  };

  const showSignificant = () => {
    const significantNews = cards.filter((newCard) => newCard.tag === 'significant');
    setCurrentTab(significantNews);
  };

  const showPopular = () => {
    const popularNews = cards.filter((newCard) => newCard.tag === 'popular');
    setCurrentTab(popularNews);
  };

  const filtersDefaults: OptionProps = {
    label: 'все',
    value: 'all',
    action: () => showAll(),
  };
  const filtersOptions: OptionProps[] = [
    {
      label: 'популярные',
      value: 'popular',
      action: () => showPopular(),
    },
    {
      label: 'значимые',
      value: 'significant',
      action: () => showSignificant(),
    },
    {
      label: 'все',
      value: 'all',
      action: () => showAll(),
    },
  ];

  return (
    <Head>
      <Title>{title}</Title>
      {!hideFilters && <CardsFilters options={filtersOptions} defaults={filtersDefaults} />}
    </Head>
  );
};

const Title = styled.h1`
  font-family: Gilroy, 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;

  color: ${fontColors.chathamsBlue};
`;

const Head = styled.div`
  ${getMediaquery('sm')} {
    width: 330px;
    display: flex;
    color: var(--colors-darkblue);
    flex-direction: column;
    overflow-y: scroll;
    padding: 0 20px;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
  ${getMediaquery('md')} {
    width: 728px;
    flex-direction: row;
    overflow: visible;
    align-items: flex-start;
    padding: 0;
  }

  ${getMediaquery('lg')} {
    width: 747px;
    display: flex;
    align-items: center;
  }
`;
