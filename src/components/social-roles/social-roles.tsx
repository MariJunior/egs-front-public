import { FC, useState } from 'react';
import styled from '@emotion/styled';

import { SocialRole } from './components/social-role';
import { SocialRolesHeader } from './components/social-roles-header';
import { SocialRolesProps } from './types';
import newRole from '../../../public/assets/social-icons-main/newRole.svg';

import { getMediaquery } from '../../helpers';
import { useEffect } from 'react';

export const SocialRoles: FC<SocialRolesProps> = ({ socialRoles }) => {
  const [currentRoles, setCurrentRoles] = useState<typeof socialRoles>(socialRoles);
  const addRoleButton = {
    id: 100,
    Name: 'Добавить роль',
    Icon: newRole,
    link: 'https://vk.com/topic-203874212_47583219',
  };

  useEffect(() => {
    setCurrentRoles([...socialRoles, addRoleButton]);
  }, []);
  const renderSocialRole = () => {
    return currentRoles.map((item, index) => (
      <SocialRole
        key={index}
        id={item?.id}
        link={item.link}
        Description={item?.Description}
        Name={item.Name}
        Icon={item.Icon}
      />
    ));
  };
  return (
    <SocialRolesWrapper>
      <SocialRolesHeader tabsTitle="Социальные роли" />
      <SocialRolesRow>{renderSocialRole()}</SocialRolesRow>
    </SocialRolesWrapper>
  );
};

const SocialRolesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  padding-left: 20px;

  ${getMediaquery('md')} {
    width: 728px;
    padding: 0;
  }

  ${getMediaquery('lg')} {
    width: 1280px;
  }
`;
const SocialRolesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${getMediaquery('sm')} {
    max-width: 100%;
  }

  ${getMediaquery('md')} {
    justify-content: flex-start;
  }
`;
