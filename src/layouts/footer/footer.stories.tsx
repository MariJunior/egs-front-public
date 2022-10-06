import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { footerPagesList, footerCopyright } from './data';
import { Footer, FooterProps } from './footer';
import { socials } from '../../components/social-media-list/data';
import { generalPartners, alsoPartners } from '../../components/partners-list/data';

export default {
  component: Footer,
  title: 'Layouts/Footer',
  decorators: [withKnobs],
} as Meta;

const FooterStory: Story<FooterProps> = (props: FooterProps) => (
  <Footer
    {...props}
    pagesList={footerPagesList}
    socialMediaList={socials}
    generalPartnersList={generalPartners}
    otherPartnersList={alsoPartners}
    copyright={footerCopyright}
  />
);

export const Default = FooterStory.bind({});
