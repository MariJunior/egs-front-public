import { FC } from 'react';
import styled from '@emotion/styled';

import { CouldBeInterestedCardProps } from './types';

import { CatalogCard } from '../catalog-cards/components/catalog-card';

import { getMediaquery, getFont } from '../../../helpers';

export interface CouldBeInterestedProps {
  cards: CouldBeInterestedCardProps[];
}

export const CouldBeInterested: FC<CouldBeInterestedProps> = ({ cards }) => {
  return (
    <Wrapper>
      <Title>Вам могут быть интересны:</Title>
      {cards.map((item) => (
        <CatalogCard key={item.id} card={item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  ${getMediaquery('sm')} {
    max-width: 375px;
  }

  ${getMediaquery('md')} {
    max-width: 728px;
  }
  ${getMediaquery('lg')} {
    max-width: 904px;
  }
`;
const Title = styled.h2`
  ${getFont('title')};
  margin: 0 0 30px 0;
`;
