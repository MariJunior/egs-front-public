import { FC, useState } from 'react';
import styled from '@emotion/styled';

import { CatalogCard } from './components/catalog-card';
import { FILTER_OPTIONS } from './data';
import { CatalogCardsSelect } from './components/catalog-cards-select';
import { CatalogEditorsChoice } from '..';
import { PaginationComponent } from '../../pagination/pagination';
import { getMediaquery } from 'helpers';
import { CardsCatalogPage, PAGE_SIZE } from '../../../../pages/catalog-page';
import { client } from '../../../../pages/apolloClient';
import { GetApplicationsDocument, GetApplicationsQuery } from '../../../generated/graphql';
import { appCatalogPageToProps } from '../../../apigql/converters';

export interface CatalogCardsProps {
  catalogCards: CardsCatalogPage[];
  editorChoiceCards: CardsCatalogPage[];
  catalogCardsCount: number;
}

export const CatalogCards: FC<CatalogCardsProps> = ({ catalogCards, editorChoiceCards, catalogCardsCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [catalogArray, setCatalogArray] = useState(catalogCards);
  const [startPivot, setStartPivot] = useState(PAGE_SIZE);

  const beforeEditorSection = () => {
    let lengthOfBeforeCatalogArray = 0;

    if (catalogArray.length >= 3) {
      lengthOfBeforeCatalogArray = 3;
    } else {
      lengthOfBeforeCatalogArray = catalogArray.length;
    }

    return catalogArray.slice(0, lengthOfBeforeCatalogArray).map((item, index) => {
      return <CatalogCard card={item} key={index} />;
    });
  };

  const afterEditorSection = () => catalogArray.slice(3).map((item, index) => <CatalogCard key={index} card={item} />);

  const loadMoreCards = async () => {
    const data = await client.query<GetApplicationsQuery>({
      query: GetApplicationsDocument,
      variables: {
        start: startPivot,
        limit: PAGE_SIZE,
      },
    });

    const loadedCards = appCatalogPageToProps(data);

    setCatalogArray((prev) => prev.concat(loadedCards));

    setStartPivot((prev) => prev + PAGE_SIZE);
  };

  return (
    <Wrapper>
      <CatalogCardsSelect list={FILTER_OPTIONS} />
      {beforeEditorSection()}
      <CatalogEditorsChoice editorsChoiceCards={editorChoiceCards} sectionTitle="Выбор редакции" />
      {catalogArray.length >= 3 ? afterEditorSection() : null}
      <PaginationComponent
        pageSize={PAGE_SIZE}
        clickHandler={loadMoreCards}
        totalCardsLength={catalogCardsCount}
        currentPageLength={catalogArray.length}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getMediaquery('sm')} {
    max-width: 375px;
    margin-right: 0;
  }

  ${getMediaquery('md')} {
    max-width: 728px;
  }
  ${getMediaquery('lg')} {
    max-width: 904px;
    margin-right: 60px;
  }
`;
