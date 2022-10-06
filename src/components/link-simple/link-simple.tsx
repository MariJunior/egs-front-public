import styled from '@emotion/styled';

export interface LinkSimpleProps {
  link: string;
}

export function LinkSimple({ link, children }: React.PropsWithChildren<LinkSimpleProps>) {
  return <Link href={link}>{children}</Link>;
}

const Link = styled.a`
  display: flex;
  align-items: center;
  font-family: var(--font-families-ubuntu);
  font-size: 20px;
  line-height: 26px;
  color: var(--colors-blue);
  text-decoration: none;
  transition: all 0.3s linear;

  &:hover {
    color: var(--colors-pink);
  }

  svg {
    max-width: 17px;
    max-height: 17px;
    margin-right: 5px;
  }

  path {
    fill: currentColor;
  }
`;
