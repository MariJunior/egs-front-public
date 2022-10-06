export interface ILinkTypeName {
  ComponentApplicationLinkChatBotLink: string;
  ComponentApplicationLinkAppStoreLink: string;
  ComponentApplicationLinkHomepageLink: string;
  ComponentApplicationLinkVkMiniAppLink: string;
  ComponentApplicationLinkGooglePlayLink: string;
}

export interface AppLinkProps {
  linkTypeName: keyof ILinkTypeName;
  link: string;
  linkText: string;
}

export type AppMetaInfoProps = {
  title: string;
  value: string;
  link?: string;
};
