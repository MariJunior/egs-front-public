import React from 'react';
import styled from '@emotion/styled';

import { SelectOptionProps } from '../../types';

export interface SelectedElementProps {
  item: SelectOptionProps;
  onTabClick?: () => void;
  selectedOption: SelectOptionProps;
  setIsOpen: (isOpen: boolean) => void;
  setSelectedOption: (object: SelectOptionProps) => void;
}

export const SelectItem: React.FC<SelectedElementProps> = ({ item, setSelectedOption, setIsOpen, selectedOption }) => {
  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Item onClick={onOptionClicked(item)}>
      <Label>{item.label}</Label>
      <IsChecked className={'isChecked'} data-checked={selectedOption.value === item.value}></IsChecked>
    </Item>
  );
};

const Item = styled.li`
  width: 210px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 22px 0 10px;
  justify-content: space-between;
  list-style: none;
  cursor: pointer;
`;
const Label = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
const IsChecked = styled.div`
  .isChecked {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #000000;
  }

  .isChecked[data-checked='true'] {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #2785ff;
  }
`;
