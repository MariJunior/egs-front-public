import { Meta, Story } from '@storybook/react';

import { CatalogHeader, CatalogHeaderProps } from './catalog-header';

import { MAIN_SOCIAL_BTNS_ARRAY } from './data';

export default {
  component: CatalogHeader,
  title: 'Components/Catalog/CatalogHeader',
} as Meta;

const CatalogHeaderStory: Story<CatalogHeaderProps> = (props: CatalogHeaderProps) => (
  <CatalogHeader roles={MAIN_SOCIAL_BTNS_ARRAY} foundApps={4} />
);

export const Default = CatalogHeaderStory.bind({});
