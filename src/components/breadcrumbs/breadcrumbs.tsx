import { FC } from 'react';
import styled from '@emotion/styled';

import { getFont } from '../../helpers';
import ArrowIcon from '../../../public/assets/article/arrow_left.svg';

export interface BreadCrumbsProps {
  currentPlace: string;
  link: string;
  place: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ place, currentPlace, link }) => {
  return (
    <Wrapper>
      <Container>
        <Place href={link}>{place}</Place>
        <Arrow src={ArrowIcon.src} alt="arrow.svg" />
        <CurrentPlace>{currentPlace}</CurrentPlace>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1260px;
  width: 100%;
  margin-bottom: 35px;
`;

const Container = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Place = styled.a`
  ${getFont('medium')};
  color: $var(--colors-blue);
  text-decoration: none;
`;

const CurrentPlace = styled.a`
  ${getFont('medium')};
  color: var(--colors-blue);
  user-select: none;
`;

const Arrow = styled.img`
  width: 12px;
  height: 8px;
`;
