import { FC } from 'react';
import styled from '@emotion/styled';

import { Card } from './components/card';

import { getMediaquery, getFont } from '../../../helpers';
import { CardsCatalogPage } from '../../../../pages/catalog-page';

export interface CatalogEditorsChoiceProps {
  editorsChoiceCards: CardsCatalogPage[];
  sectionTitle: string;
}

export const CatalogEditorsChoice: FC<CatalogEditorsChoiceProps> = ({ editorsChoiceCards, sectionTitle }) => {
  return (
    <Wrapper>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Cards>
        {editorsChoiceCards.map(({ title, logo, cover }, index) => (
          <Card title={title} cover={cover} logo={logo} key={index} />
        ))}
      </Cards>
    </Wrapper>
  );
};

const SectionTitle = styled.h3`
  ${getFont('title')}
  margin: 0 0 30px;
  padding-left: 20px;
  align-self: flex-start;

  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('md')} {
    display: block;
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0 80px 0;
  ${getMediaquery('sm')} {
    width: 375px;
    overflow-x: scroll;
  }
  ${getMediaquery('md')} {
    width: 728px;
  }
  ${getMediaquery('lg')} {
    width: 904px;
    overflow: visible;
  }
`;

const Cards = styled.div`
  display: grid;

  ${getMediaquery('sm')} {
    width: 375px;
    overflow-x: scroll;
    grid-template-columns: repeat(3, 260px);
    grid-gap: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
  }
  ${getMediaquery('md')} {
    width: 728px;
  }
  ${getMediaquery('lg')} {
    width: 904px;
    overflow: visible;
    grid-template-columns: repeat(3, 275px);
    grid-gap: 40px;
  }
`;
