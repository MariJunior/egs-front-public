import { CommonIconLinkProps } from '../../types';

export interface AuthFormBaseProps {
  formId: string;
  gosuslugiAuth?: string;
  recoveryLink?: string;
  thirdPartyLinks?: CommonIconLinkProps[];
}
