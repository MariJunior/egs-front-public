import { FC, useState } from 'react';
import styled from '@emotion/styled';

import { SelectItem } from './components/select-item/select-item';
import { SelectOptionProps } from './types';

import { getMediaquery, getFont, fontColors } from '../../../../../helpers';
import Arrow from '../../../../../helpers/icons/arrow-dropdown.svg';

export interface CatalogCardsSelectProps {
  list: SelectOptionProps[];
}

export const CatalogCardsSelect: FC<CatalogCardsSelectProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(list[0]);

  const openSelect = () => setIsOpen(true);
  const closeSelect = () => setIsOpen(false);
  const toggleSelect = () => (isOpen ? closeSelect() : openSelect());

  return (
    <Container>
      <Header>
        <SortAs>Сортировать</SortAs>
        <Wrapper onClick={toggleSelect}>
          <CurrentItem>{selectedOption.value}</CurrentItem>
          <Chevron />
        </Wrapper>
      </Header>
      {isOpen && (
        <List>
          {list.map((item: any, id: number) => (
            <SelectItem
              onTabClick={item.onTabClick}
              selectedOption={selectedOption}
              key={id}
              setIsOpen={setIsOpen}
              setSelectedOption={setSelectedOption}
              item={item}
            />
          ))}
        </List>
      )}
    </Container>
  );
};
const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  height: 17px;
  ${getMediaquery('sm')} {
    height: 24px;
    background: rgba(27, 142, 255, 0.1);
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 13px;
  }
  ${getMediaquery('md')} {
    background: none;
    padding: 0;
  }
`;
const Container = styled.div`
  min-width: 77px;
  position: relative;
  ${getMediaquery('sm')} {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ${getMediaquery('md')} {
    display: flex;
    align-items: center;
    align-self: flex-end;
    justify-content: end;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${getMediaquery('sm')} {
    width: 100%;
    margin-bottom: 43px;
  }
  ${getMediaquery('md')} {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const SortAs = styled.p`
  ${getFont('medium')};
  font-size: 14px;
  color: ${fontColors.chathamsBlue};
  margin: 0;
  ${getMediaquery('sm')} {
    margin-right: 0;
    font-size: 20px;
    font-weight: bold;

    opacity: 1;
  }
  ${getMediaquery('md')} {
    opacity: 0.5;
    margin-right: 19px;
    font-size: 14px;
    font-weight: normal;
  }
`;
const CurrentItem = styled.p`
  ${getFont('medium')};
  font-size: 14px;
  margin: 0;
  color: ${fontColors.cornFlowerBlue};
`;

const List = styled.ul`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 0;
  padding: 0;
  margin: 25px 0 0 0;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
  &li {
    cursor: pointer;
  }
`;
const Chevron = styled.div`
  width: 7px;
  height: 10px;
  margin-left: 13px;
  background-image: url(${Arrow});
  transition: 0.3s ease;
  background-repeat: no-repeat;
  background-position: center;
`;
