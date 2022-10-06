import styled from '@emotion/styled';

import { Icon } from '../icon';

import { CommonIconLinkProps } from '../../types';

export interface SocialMediaListProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  platforms: CommonIconLinkProps[];
}

export function SocialMediaList({ platforms, ...props }: SocialMediaListProps) {
  return (
    <div {...props}>
      <Title>Открыты для обсуждения в соцсетях</Title>
      <List>
        {platforms.map((item) => (
          <ListItem key={item.name}>
            <ListLink href={item.link} aria-label={item.name}>
              <Icon icon={item.logo} />
            </ListLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  font-family: var(--font-families-gilroy);
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: var(--colors-darkblue);
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const ListLink = styled.a`
  display: inline-block;
  width: 35px;
  height: 35px;

  &:hover {
    opacity: 0.8;
  }
`;
