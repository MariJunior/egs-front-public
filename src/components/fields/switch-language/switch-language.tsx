import styled from '@emotion/styled';

import { ifProp } from '../../../helpers';

export interface SwitchLanguageProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  name: string;
  secondary?: boolean;
}

export function SwitchLanguage({ name, ...props }: SwitchLanguageProps) {
  return (
    <Wrapper htmlFor={name} {...props}>
      <SwitchCheckbox type="checkbox" id={name} name={name} />
      <span>Rus</span>
      <span>Eng</span>
    </Wrapper>
  );
}

interface WrapperProps {
  secondary?: boolean;
}

const Wrapper = styled.label<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  width: 105px;
  background-color: #e7f5ff;
  border-radius: 100px;

  span {
    width: 50%;
    padding: 10px 15px;
    font-family: var(--font-families-gilroy);
    font-weight: bold;
    font-size: 12px;
    line-height: 1;
    color: var(--colors-blue);
    text-align: center;
    text-transform: uppercase;
    border-radius: 100px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.4s ease-out;
    user-select: none;
  }

  input:not(:checked) ~ span:first-of-type,
  input:checked ~ span:last-of-type {
    background-color: ${ifProp('secondary', 'var(--colors-blue)', '#C7D7E6')};
    color: #ffffff;
  }
`;

const SwitchCheckbox = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: ;
  background-color: transparent;
  cursor: pointer;
  appearance: none;
`;
