import { FC } from 'react';
import styled from '@emotion/styled';

import { getMediaquery, getFont, fontColors } from '../../../../../helpers';

export interface NothingFoundProps {
  buttonText: string;
  subtitle: string;
  title: string;
}
export const NothingFound: FC<NothingFoundProps> = ({ title, subtitle, buttonText }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button>{buttonText}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 180px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 3px solid ${fontColors.icy};
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px 0 24px 0 0;

  ${getMediaquery('sm')} {
    width: 375px;
  }
  ${getMediaquery('md')} {
    width: 728px;
  }
  ${getMediaquery('lg')} {
    width: 904px;
  }
`;
const Title = styled.h2`
  ${getFont('title')}
  line-height: 130%;
  color: ${fontColors.icy};
  margin: 0;
`;
const Subtitle = styled.p`
  ${getFont('medium')}
  font-size: 18px;
  line-height: 130%;
  color: ${fontColors.icy};
  margin: 0 0 20px;
`;

const Button = styled.button`
  width: 259px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${fontColors.icy};
  border: 2px solid ${fontColors.icy};
  border-radius: 100px;
  cursor: pointer;
`;
