import { FC } from 'react';
import styled from '@emotion/styled';

import { SocialNetworkProps } from '../../../../types';

import { fontColors, getFont } from '../../../../../../../helpers';

export interface CatalogCardSecondaryInfoProps {
  developer: string;
  socialNetworks: SocialNetworkProps[];
  updated: string;
}

export const SecondaryInformation: FC<CatalogCardSecondaryInfoProps> = ({ developer, socialNetworks, updated }) => {
  return (
    <AboutAppSection>
      <Row>
        <MainText>Разработчик</MainText>
        <SecondaryLink>{developer}</SecondaryLink>
      </Row>
      <Row>
        <MainText>Соцсети</MainText>
        <div>
          {socialNetworks.slice(0, 2).map((item, index) => (
            <SocialNetworkLink key={index}>{item.title}</SocialNetworkLink>
          ))}
          {socialNetworks.length >= 2 && <SocialNetworkLink href={'/'}>...</SocialNetworkLink>}
        </div>
      </Row>
      <Row>
        <MainText>Обновлено</MainText>
        <UpdatedInfo>{updated}</UpdatedInfo>
      </Row>
    </AboutAppSection>
  );
};

const Row = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  :nth-last-of-type(1) {
    margin-bottom: 32px;
  }
`;

const SocialNetworkLink = styled.a`
  ${getFont('medium')};
  font-size: 14px;
  color: ${fontColors.cornFlowerBlue};
  font-weight: normal;
  margin: 0 3px 0 0;
  cursor: pointer;
  text-decoration: none;
  :nth-last-of-type(1) {
    margin-right: 0;
  }
`;

const SecondaryLink = styled.a`
  ${getFont('medium')};
  font-size: 14px;
  color: ${fontColors.cornFlowerBlue};
  font-weight: normal;
  margin: 0;
`;

const UpdatedInfo = styled.p`
  ${getFont('medium')};
  color: ${fontColors.chathamsBlue};
  font-size: 14px;
  margin: 0;
`;

const MainText = styled.p`
  ${getFont('medium')};
  font-size: 14px;
  opacity: 0.5;
  margin: 0;
`;

const AboutAppSection = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
`;
