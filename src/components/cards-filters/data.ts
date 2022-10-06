import { OptionProps } from './types';

export const filtersOptions: OptionProps[] = [
  {
    label: 'популярные',
    value: 'popular',
  },
  {
    label: 'обсуждаемые',
    value: 'discussed',
  },
  {
    label: 'значимые',
    value: 'significant',
  },
  {
    label: 'все',
    value: 'all',
  },
];

export const filtersDefaults: OptionProps = {
  label: 'популярные',
  value: 'popular',
};
