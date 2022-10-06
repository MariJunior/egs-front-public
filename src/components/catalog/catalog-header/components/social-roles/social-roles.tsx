import { FC, useState } from 'react';
import styled from '@emotion/styled';

import { SocialRole } from './components/social-role';

import { SocialRoleProps } from '../../types';

import { getMediaquery } from '../../../../../helpers';

export interface SocialRolesProps {
  roles: SocialRoleProps[];
}

export type SelectedItemsType = number[] | null;

export const SocialRoles: FC<SocialRolesProps> = ({ roles }) => {
  const [isCurrentButton, setIsCurrentButton] = useState(roles[0]);
  const handleRoleClick = (socialRole: SocialRoleProps) => {
    setIsCurrentButton(socialRole);
  };

  return (
    <Wrapper>
      {roles.map((role, index) => (
        <SocialRole isCurrentButton={isCurrentButton} handleClick={handleRoleClick} key={index} role={role} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 97px;
  ${getMediaquery('sm')} {
    max-width: 100%;
    gap: 5px;
  }

  ${getMediaquery('md')} {
    gap: 10px;
  }
`;
