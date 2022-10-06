export interface NewsProps {
  date: string;
  link: string;
  title: string;
}

export interface ArticleSidebarProps {
  news: NewsProps[];
}
