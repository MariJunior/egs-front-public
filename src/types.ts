export interface CommonIconProps {
  alt?: string;
  color?: string;
  height?: number | string;
  width?: number | string;
}

export interface CommonLinkProps {
  link: string;
  name: string;
}

export interface CommonIconLinkProps extends CommonLinkProps {
  logo: string;
}
