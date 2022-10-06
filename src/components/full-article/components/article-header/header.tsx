import { FC } from 'react';
import styled from '@emotion/styled';

import { BreadCrumbs } from '../../../breadcrumbs';

import { getMediaquery, getFont, fontColors } from '../../../../helpers';
import dateFormat from '../../../../helpers/dateFormat';

export interface ArticleHeaderProps {
  date: string;
  title: string;
}

export const ArticleHeader: FC<ArticleHeaderProps> = ({ title, date }) => {
  const safeDate = dateFormat(date, 'ru');
  return (
    <Header>
      <BreadCrumbs place="Новости" currentPlace="Статья" link="/" />
      <Title>{title}</Title>
      <Date>{safeDate.toLowerCase()}</Date>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  margin-bottom: 40px;

  ${getMediaquery('sm')} {
    font-size: 24px;
    padding-left: 20px;
  }

  ${getMediaquery('lg')} {
    font-size: 40px;
    padding-left: 0;
  }
`;
const Title = styled.h1`
  margin-bottom: 10px;
  ${getFont('titleLg')};
  ${getMediaquery('sm')} {
    font-size: 24px;
  }
  ${getMediaquery('lg')} {
    font-size: 40px;
  }
`;

const Date = styled.time`
  ${getFont('medium')};
  color: ${fontColors.black};
  opacity: 0.5;
`;
