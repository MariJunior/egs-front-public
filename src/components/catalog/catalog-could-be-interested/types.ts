export interface TabletLink {
  href: string;
  icon: string;
  title: string;
}

export interface CouldBeInterestedCardProps {
  about: string;
  icon: string;
  id: number;
  rating: number;
  reviewsCount: number;
  tabletLinks: TabletLink[];
  title: string;
}
