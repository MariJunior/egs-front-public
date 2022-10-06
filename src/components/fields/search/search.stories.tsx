import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Search, SearchProps } from './search';

export default {
  component: Search,
  title: 'Components/Fields/Search',
  decorators: [withKnobs],
} as Meta;

const SearchStory: Story<SearchProps> = (props: SearchProps) => <Search {...props} />;

export const Default = SearchStory.bind({});
