import { Meta, Story } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

import { LinkButtonRectangular, LinkButtonRectangularProps } from './link-button-rectangular';

export default {
  component: LinkButtonRectangular,
  title: 'Components/LinkButton/Rectangular',
  decorators: [withKnobs],
} as Meta;

const LinkButtonRectangularStory: Story<LinkButtonRectangularProps> = (props: LinkButtonRectangularProps) => (
  <LinkButtonRectangular
    {...props}
    secondary={boolean('secondary', false)}
    fullIcon={boolean('fullIcon', false)}
    platform={radios('platform', { AppStore: 'appstore', GooglePlay: 'google' }, 'google')}
    link="/"
  />
);

export const Default = LinkButtonRectangularStory.bind({});
