import { Meta, Story } from '@storybook/react';

import { CatalogSection, CatalogSectionProps } from './catalog-section';

import { CATALOG_CARDS_ARRAY, INTERESTED_CARDS } from '../catalog-cards/data';
import { MAIN_SOCIAL_BTNS_ARRAY } from '../catalog-header/data';
export default {
  component: CatalogSection,
  title: 'Components/Catalog/CatalogSection',
} as Meta;

const CatalogSectionStory: Story<CatalogSectionProps> = () => (
  <CatalogSection
    catalogCards={CATALOG_CARDS_ARRAY}
    interestedCards={INTERESTED_CARDS}
    roles={MAIN_SOCIAL_BTNS_ARRAY}
  />
);

export const Default = CatalogSectionStory.bind({});
