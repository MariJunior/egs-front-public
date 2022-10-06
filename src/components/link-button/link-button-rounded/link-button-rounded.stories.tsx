import { Meta, Story } from '@storybook/react';
import { withKnobs, radios, text } from '@storybook/addon-knobs';

import { ReactComponent as YaMapsIcon } from '../../../storybook/icons/yamaps-icon.svg';

import { LinkButtonRounded, LinkButtonRoundedProps } from './link-button-rounded';
import { ColorsProps, LengthProps, PlatformProps } from './types';

export default {
  component: LinkButtonRounded,
  title: 'Components/LinkButton/Rounded',
  decorators: [withKnobs],
} as Meta;

const platformOptions = {
  appstore: 'appstore',
  google: 'google',
  website: 'website',
  icon: 'icon',
  text: 'text',
};

const lengthOptions = {
  regular: 'regular',
  short: 'short',
};

const colorsOptions = {
  white: 'white',
  light: 'light',
  intense: 'intense',
};

const LinkButtonRoundedStory: Story<LinkButtonRoundedProps> = (props: LinkButtonRoundedProps) => (
  <LinkButtonRounded
    {...props}
    link="ekp.spb.ru"
    platform={radios('platform', platformOptions, platformOptions.google) as PlatformProps}
    length={radios('length', lengthOptions, lengthOptions.short) as LengthProps}
    colors={radios('colors', colorsOptions, colorsOptions.white) as ColorsProps}
    icon={<YaMapsIcon />}
    text={text('text', 'Показать все отзывы')}
    font={text('font', 'var(--font-families-ubuntu)')}
    weight={text('weight', 'bold')}
    fontSize={text('font size', 'inherit')}
    lineHeight={text('line height', 'normal')}
  />
);

export const Default = LinkButtonRoundedStory.bind({});
