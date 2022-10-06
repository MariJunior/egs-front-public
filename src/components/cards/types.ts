export interface AppCardBasicProps {
  appIcon: string;
  appName: string;
  appRating?: number;
}

export interface AppCardMiniBasicProps extends AppCardBasicProps {
  appName: string;
}

export interface NewsCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  date?: string;
}
