import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { generalPartners, alsoPartners } from './data';
import { PartnersList, PartnersListProps } from './partners-list';

export default {
  component: PartnersList,
  title: 'Components/PartnersList',
  decorators: [withKnobs],
} as Meta;

const PartnersListStory: Story<PartnersListProps> = (props: PartnersListProps) => (
  <PartnersList {...props} partners={generalPartners} smallPartners={alsoPartners} />
);

export const Default = PartnersListStory.bind({});
