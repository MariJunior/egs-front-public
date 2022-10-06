export interface PopularServiceProps {
  id: number;
  date?: string;
  image: { src: string; width: number; height: number };
  rating?: number;
  subtitle?: string;
  tag?: string;
  title: string;
}
export interface PopularServicesProps {
  services: PopularServiceProps[];
}
