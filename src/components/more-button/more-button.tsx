import styled from '@emotion/styled';

import { ifProp, getMediaquery } from '../../helpers';

import { ArrowDropdownRounded } from '../../helpers/icons/ArrowDropdownRounded';
import { If } from '../shared/if';

export interface MoreButtonProps {
  contentOpened: boolean;
  onButtonClick?: () => void;
}

export function MoreButton({ contentOpened, onButtonClick }: MoreButtonProps) {
  return (
    <Wrapper>
      <Button type="button" onClick={onButtonClick}>
        <If condition={contentOpened} elseChildren="Ещё">
          Свернуть
        </If>
        <StyledArrowDropdown turned={contentOpened} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background-color: var(--colors-darkblue);
    opacity: 0.1;
    transform: translateY(-50%);
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-family: var(--font-families-ubuntu);
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: var(--colors-blue);
  border: none;
  background-color: var(--colors-white);
  z-index: 1;
  transition: color 0.3s linear;

  &:hover {
    color: var(--colors-pink);
  }

  ${getMediaquery('md')} {
    font-size: 20px;
    line-height: 28px;
  }
`;

interface StyledArrowDropdownProps {
  turned?: boolean;
}

const StyledArrowDropdown = styled(ArrowDropdownRounded)<StyledArrowDropdownProps>`
  width: 22px;
  height: 22px;
  margin-left: 10px;
  opacity: 0.5;
  transform: ${ifProp('turned', 'rotate(180deg)', 'rotate(0)')};
  transition: transform 0.5s linear;

  path {
    fill: currentColor;
  }

  ${getMediaquery('md')} {
    width: 28px;
    height: 28px;
  }
`;
