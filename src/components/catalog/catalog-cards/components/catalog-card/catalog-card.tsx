import { FC } from 'react';
import styled from '@emotion/styled';

import { MainInformation } from './components';

import { getMediaquery, fontColors } from '../../../../../helpers';
import { CardsCatalogPage } from '../../../../../../pages/catalog-page';

export interface CatalogCardProps {
  card: CardsCatalogPage;
}

export const CatalogCard: FC<CatalogCardProps> = ({ card }) => {
  return (
    <Card>
      <MainInformation card={card} />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  height: 180px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 10px 10px 10px;
  box-shadow: 0px 0px 30px var(--colors-lightblue);
  border-radius: 20px;
  margin-bottom: 20px;
  :nth-last-of-type(1) {
    margin-bottom: 0;
  }

  ${getMediaquery('sm')} {
    max-width: 335px;
    justify-content: normal;
    box-sizing: content-box;
    align-self: center;
  }

  ${getMediaquery('md')} {
    max-width: 728px;
    justify-content: normal;
    box-sizing: border-box;
  }

  ${getMediaquery('lg')} {
    max-width: 904px;

    justify-content: flex-start;
    :hover {
      transition: 1s;
      box-shadow: 0px 10px 30px ${fontColors.mayaBlue};
    }
  }
`;
