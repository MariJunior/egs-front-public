import { FC } from 'react';
import styled from '@emotion/styled';

import { getMediaquery, getFont } from 'helpers';

export interface TitleProps {
  title: string;
}
export const TitleComponent: FC<TitleProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h2`
  color: var(--colors-darkblue);
  ${getMediaquery('sm')} {
    ${getFont('title')};
  }
  ${getMediaquery('md')} {
    ${getFont('titleLg')};
  }
`;
