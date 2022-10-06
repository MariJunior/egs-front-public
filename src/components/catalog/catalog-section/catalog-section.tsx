import { FC } from 'react';
import styled from '@emotion/styled';

import { CatalogCards } from '../catalog-cards';
import { CatalogHeader, CatalogHeaderProps } from '../catalog-header';
import { ArticleSidebar } from 'components';
import { PopularServices } from 'components/popular-services';
import { services } from 'components/popular-services/data';
import { CatalogPageProps } from '../../../../pages/catalog-page';

export type CatalogSectionProps = CatalogPageProps & CatalogHeaderProps;

export const CatalogSection: FC<CatalogSectionProps> = ({
  catalogCards,
  sidebarNews,
  roles,
  editorChoiceCards,
  catalogCardsCount,
}) => {
  return (
    <Catalog>
      <CatalogHeader roles={roles} foundApps={catalogCards.length} />
      <Row>
        <CatalogCards
          catalogCards={catalogCards}
          editorChoiceCards={editorChoiceCards}
          catalogCardsCount={catalogCardsCount}
        />
        <ArticleSidebar news={sidebarNews} />
      </Row>
      <PopularServices services={services} />
    </Catalog>
  );
};

const Catalog = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;
