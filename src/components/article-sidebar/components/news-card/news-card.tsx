import { FC } from 'react';
import styled from '@emotion/styled';

import { NewsProps } from '../../types';

import { getFont, getMediaquery } from '../../../../helpers';

export const NewsCard: FC<NewsProps> = ({ link, title, date }) => {
  return (
    <Card>
      <Title href={link}>{title}</Title>
      <Date>{date}</Date>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${getMediaquery('sm')} {
    width: 275px;
    padding: 16px;
    box-shadow: 0px 0px 30px #d8e8ff;
    border-radius: 10px;
    margin-bottom: 0;
  }
  ${getMediaquery('lg')} {
    width: 100%;
    box-shadow: none;
    padding: 0;

    margin-bottom: 15px;

    :nth-last-of-type(2) {
      margin-bottom: 0;
    }
  }
`;

const Title = styled.a`
  ${getFont('medium')};
  font-weight: bold;
  font-size: 18px;
  color: var(--colors-blue);
  margin-bottom: 5px;
  text-decoration: none;
`;

const Date = styled.time`
  ${getFont('medium')};
  font-size: 14px;
  opacity: 0.5;
  color: var(--colors-black);
`;
