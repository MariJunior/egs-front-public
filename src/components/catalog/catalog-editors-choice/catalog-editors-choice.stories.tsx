import { Meta, Story } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { CatalogEditorsChoice, CatalogEditorsChoiceProps } from './catalog-editors-choice';

import ourspb from '../../../assets/application-slider/ourspb.svg';
import peterburg from '../../../assets/editors-choice/Peterburg.png';

export default {
  component: CatalogEditorsChoice,
  title: 'Components/Catalog/CatalogEditorsChoice',
  args: {
    editorsChoiceCards: [
      {
        image: text('image', peterburg),
        icon: text('icon', ourspb),
        title: text('title', 'Санкт-Петербург'),
        rating: number('rating', 5),
        id: number('id', 4),
      },
      {
        image: text('image', peterburg),
        icon: text('icon', ourspb),
        title: text('title', 'Санкт-Петербург'),
        rating: number('rating', 5),
        id: number('id', 4),
      },
      {
        image: text('image', peterburg),
        icon: text('icon', ourspb),
        title: text('title', 'Санкт-Петербург'),
        rating: number('rating', 5),
        id: number('id', 4),
      },
    ],
    sectionTitle: text('sectionTitle', 'Секция'),
  },
  decorators: [withKnobs],
} as Meta;

const CatalogEditorsChoiceStory: Story<CatalogEditorsChoiceProps> = (args: CatalogEditorsChoiceProps) => (
  <CatalogEditorsChoice {...args} />
);

export const Default = CatalogEditorsChoiceStory.bind({});
