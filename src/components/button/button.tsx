import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ifProp } from '../../helpers';
import { getFont } from '../../helpers';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  secondary?: boolean;
}

export function Button({ children, ...props }: React.PropsWithChildren<ButtonProps>) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.button<ButtonProps>`
  width: 220px;
  height: fit-content;
  border-radius: 100px;
  padding: 15px 66px;
  border: 1px solid var(--colors-blue);
  cursor: pointer;
  transition: background-color 0.3s linear, color 0.3s linear, border-color 0.3s linear;
  ${getFont('medium')};

  ${ifProp(
    'secondary',
    css`
      background-color: var(--colors-white);
      color: var(--colors-blue);

      &:hover {
        background-color: var(--colors-blue);
        color: var(--colors-white);
      }
    `,
    css`
      background-color: var(--colors-blue);
      color: var(--colors-white);

      &:hover {
        border-color: var(--colors-pink);
        background-color: var(--colors-pink);
      }
    `,
  )};
`;
