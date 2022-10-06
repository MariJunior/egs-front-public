import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { thirdPartyLinksAuth } from './data';
import { Authorization, AuthorizationProps } from './authorization';

export default {
  component: Authorization,
  title: 'Content/Authorization/Authorization',
  decorators: [withKnobs],
} as Meta;

const AuthorizationStory: Story<AuthorizationProps> = (props: AuthorizationProps) => (
  <Authorization
    {...props}
    formId="auth-form"
    recoveryLink="/"
    gosuslugiAuth="/"
    thirdPartyLinks={thirdPartyLinksAuth}
  />
);

export const Default = AuthorizationStory.bind({});
