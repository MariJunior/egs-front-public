import styled from '@emotion/styled';

import { ifProp } from '../../../helpers/lib/if-prop';

export interface HeaderBurgerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onBurgerClick?: () => void;
  opened: boolean;
}

export function HeaderBurger({ onBurgerClick, ...props }: HeaderBurgerProps) {
  return (
    <Wrapper type="button" onClick={onBurgerClick} {...props}>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
}

const Wrapper = styled.button<HeaderBurgerProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: none;

  &:focus {
    outline: none;
  }

  span {
    height: 2.33px;
    background-color: var(--colors-darkblue);
    opacity: ${ifProp('opened', 1, 0.5)};
    transform-origin: 0;
    transition: width 0.2s ease-out, transform 0.3s linear, opacity 0.2s linear;

    &:first-child {
      width: ${ifProp('opened', '22px', '20px')};
      transform: ${ifProp('opened', 'rotate(45deg) translateY(-3px)', 'rotate(0) translateY(0)')};
    }

    &:nth-child(2) {
      width: ${ifProp('opened', '0', '20px')};
    }

    &:nth-child(3) {
      width: ${ifProp('opened', '22px', '20px')};
      transform: ${ifProp('opened', 'rotate(-45deg) translateY(3.5px)', 'rotate(0) translateY(0)')};
    }
  }
`;
