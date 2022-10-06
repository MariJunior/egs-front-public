import { Meta, Story } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { AuthorizationForm, AuthorizationFormProps } from './authorization-form';
import { thirdPartyLinksAuth } from '../data';

export default {
  component: AuthorizationForm,
  title: 'Content/Authorization/AuthorizationForm',
  decorators: [withKnobs],
} as Meta;

const AuthorizationFormStory: Story<AuthorizationFormProps> = (props: AuthorizationFormProps) => (
  <AuthorizationForm
    {...props}
    formId="auth-form"
    recoveryLink="/"
    gosuslugiAuth="/"
    thirdPartyLinks={thirdPartyLinksAuth}
    userChoice={select('userChoise', { Entry: 'entry', Registration: 'registration' }, 'entry')}
  />
);

export const Default = AuthorizationFormStory.bind({});
