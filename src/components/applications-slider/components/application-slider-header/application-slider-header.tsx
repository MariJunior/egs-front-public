import { FC } from 'react';
import styled from '@emotion/styled';

import { TitleComponent } from 'helpers/content/title';
import { getMediaquery } from 'helpers';

import { AppHeaderSliderProps } from '../../applications-slider';

import { CardsFilters } from '../../../cards-filters';

export const ApplicationSliderHeader: FC<AppHeaderSliderProps> = ({ tabs, tabsTitle, defaults }) => {
  return (
    <StyledHeader>
      <TitleComponent title={tabsTitle} />
      <CardsFilters options={tabs} defaults={defaults}></CardsFilters>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 50px;
  overflow-y: scroll;
  color: var(--colors-darkblue);

  ::-webkit-scrollbar {
    width: 0px;
  }

  ${getMediaquery('sm')} {
    max-width: 375px;
    margin: 0 auto 30px;
    padding: 0 20px 10px 20px;
    flex-direction: column;
  }

  ${getMediaquery('md')} {
    max-width: 728px;
    margin: 0 auto 30px;
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    padding: 0;
    overflow-y: visible;
  }
  ${getMediaquery('lg')} {
    max-width: 1280px;
    margin-bottom: 0;
  }
`;
