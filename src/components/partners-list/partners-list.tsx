import styled from '@emotion/styled';

import { If } from '../shared/if';
import { Icon } from '../icon';

import { CommonIconLinkProps } from '../../types';

export interface PartnersListProps {
  partners: CommonIconLinkProps[];
  smallPartners?: CommonIconLinkProps[];
}

export function PartnersList({ partners, smallPartners }: PartnersListProps) {
  const renderPartnersListItems = () => {
    return partners.map((partner) => (
      <ListItem key={partner.name}>
        <ListItemLink href={partner.link}>
          <PartnerIcon icon={partner.logo} />
        </ListItemLink>
        <ListItemName>{partner.name}</ListItemName>
      </ListItem>
    ));
  };

  const renderSmallPartnersListItems = () => {
    if (!smallPartners) return;

    return smallPartners.map((partner) => (
      <SubListItem key={partner.name}>
        <a href={partner.link} aria-label={partner.name}>
          <Icon icon={partner.logo} />
        </a>
      </SubListItem>
    ));
  };

  return (
    <List>
      {renderPartnersListItems()}
      <If condition={!!smallPartners}>
        <ListItem>
          <SubList>{renderSmallPartnersListItems()}</SubList>
          <ListItemName>Партнёры проекта</ListItemName>
        </ListItem>
      </If>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  flex-basis: 230px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const ListItemLink = styled.a`
  margin-bottom: 15px;
`;

const PartnerIcon = styled(Icon)`
  filter: grayscale(100%);
`;

const ListItemName = styled.span`
  font-family: var(--font-families-ubuntu);
  font-size: 14px;
  line-height: 17px;
  color: var(--colors-darkblue);
  opacity: 0.5;
`;

const SubList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
  min-width: 320px;
  min-height: 54px;
  list-style: none;
`;

const SubListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
