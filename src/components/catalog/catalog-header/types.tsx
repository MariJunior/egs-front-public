export interface SocialRoleProps {
  Icon?: { src: string; width: number; height: number };
  id?: number;
  Name?: string;
  created_at: string;
  updated_at: string;
}

export interface SocialRoleButtonProps extends SocialRoleProps {
  role: SocialRoleProps;
  isCurrentButton: SocialRoleProps;
  handleClick: (role: SocialRoleProps) => void;
}
