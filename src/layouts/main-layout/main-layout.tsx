import styled from '@emotion/styled';

export interface MainLayoutProps {
  children: React.ReactNode;
  footer: React.ReactElement;
  header: React.ReactElement;
}

export function MainLayout({ header, footer, children }: MainLayoutProps) {
  return (
    <>
      {header}
      <Content>{children}</Content>
      {footer}
    </>
  );
}

const Content = styled.main`
  margin-top: 25px;
`;
