import { FC } from 'react';
import styled from '@emotion/styled';

import { TitleComponent } from 'helpers/content/title';
import { getMediaquery } from 'helpers';

import { SocialRolesTabsProps } from '../../types';

export const SocialRolesHeader: FC<SocialRolesTabsProps> = ({ tabsTitle }) => {
  return (
    <StyledHeader>
      <TitleComponent title={tabsTitle} />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 42px;
  ${getMediaquery('sm')} {
    margin: 0 0 43px;
    padding-right: 20px;
    justify-content: space-between;
  }

  ${getMediaquery('md')} {
    padding-right: 0px;
    box-sizing: border-box;
    overflow-y: visible;
    justify-content: flex-start;
  }

  ${getMediaquery('lg')} {
    max-width: 1280px;
  }
`;
