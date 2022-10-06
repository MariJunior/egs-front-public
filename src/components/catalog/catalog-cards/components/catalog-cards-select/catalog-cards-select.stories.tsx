import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { CatalogCardsSelect, CatalogCardsSelectProps } from './catalog-cards-select';

export default {
  component: CatalogCardsSelect,
  title: 'Components/Catalog/CatalogCardsSelect',
  decorators: [withKnobs],
  args: {
    list: [
      { value: text('value', 'test1'), label: text('label', 'test1') },
      { value: text('value', 'test2'), label: text('label', 'test2') },
      { value: text('value', 'test3'), label: text('label', 'test3') },
    ],
  },
} as Meta;

const CatalogCardsSelectStory: Story<CatalogCardsSelectProps> = (args: CatalogCardsSelectProps) => (
  <CatalogCardsSelect {...args} />
);

export const Default = CatalogCardsSelectStory.bind({});
