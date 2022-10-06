import { Meta, Story } from '@storybook/react';

import { CardsFilters, CardsFiltersProps } from './cards-filters';

export default {
  component: CardsFilters,
  title: 'Components/CardsFilters',
  args: {
    options: [
      {
        label: 'популярные',
        value: 'popular',
      },
      {
        label: 'обсуждаемые',
        value: 'discussed',
      },
    ],
    defaults: { label: 'популярные', value: 'popular' },
  },
} as Meta;

const CardsFiltersStory: Story<CardsFiltersProps> = (args: CardsFiltersProps) => <CardsFilters {...args} />;

export const Default = CardsFiltersStory.bind({});
