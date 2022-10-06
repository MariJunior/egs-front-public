export interface LinkProps {
  href: string;
  text: string;
}

export interface SocialNetworkProps {
  href: string;
  title: string;
}

export interface TabletLink {
  href: string;
  icon: string;
  title: string;
}

export interface CardProps {
  about: string;
  developer?: string;
  icon: string;
  id: number;
  link?: LinkProps;
  rating: number;
  reviewsCount: number;
  socialNetworks?: SocialNetworkProps[];
  tabletLinks: TabletLink[];
  title: string;
  updated?: string;
}
