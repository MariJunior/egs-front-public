import { Meta, Story } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { CardDetailedMetaInfoList, CardDetailedMetaInfoListProps } from './card-detailed-meta-info-list';
import { appDetailsEkpspb } from '../data';

export default {
  component: CardDetailedMetaInfoList,
  title: 'Components/Cards/CardDetailedMetaInfoList',
  decorators: [withKnobs],
} as Meta;

const CardDetailedMetaInfoListStory: Story<CardDetailedMetaInfoListProps> = (props: CardDetailedMetaInfoListProps) => (
  <CardDetailedMetaInfoList {...props} opened={boolean('opened', false)} appDetails={appDetailsEkpspb} />
);

export const Default = CardDetailedMetaInfoListStory.bind({});
