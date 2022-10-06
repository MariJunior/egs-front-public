export interface SocialRoleProps {
  Description?: string;
  Icon?: { height: number; src: string; width: number };
  Name: string;
  id: number | string;
  link?: string;
}

export interface SocialRolesTabProps {
  action: () => void;
  label: string;
  value: string;
}

export interface SocialRolesTabsProps {
  tabsTitle: string;
}

export interface SocialRolesProps {
  socialRoles: SocialRoleProps[];
}
