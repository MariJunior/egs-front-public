import { Meta, Story } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { SwitchLanguage, SwitchLanguageProps } from './switch-language';

export default {
  component: SwitchLanguage,
  title: 'Components/Fields/SwitchLanguage',
  decorators: [withKnobs],
} as Meta;

const SwitchLanguageStory: Story<SwitchLanguageProps> = (props: SwitchLanguageProps) => (
  <SwitchLanguage {...props} name="language-switcher" secondary={boolean('secondary', false)} />
);

export const Default = SwitchLanguageStory.bind({});
