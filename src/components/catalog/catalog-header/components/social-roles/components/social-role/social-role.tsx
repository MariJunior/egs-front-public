import { FC } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { SocialRoleButtonProps } from '../../../../types';

import { getMediaquery, getFont, fontColors, ifProp } from 'helpers';

export type SocialRoleStylesProps = {
  isActive: boolean;
};

export const SocialRole: FC<SocialRoleButtonProps> = ({ role, isCurrentButton, handleClick }) => {
  const isActive = role.id === isCurrentButton.id;

  return (
    <Role isActive={isActive} onClick={() => handleClick(role)}>
      {role.Icon && (
        <ImageWrapper isActive={isActive}>
          <Image src={role.Icon.src} width={role.Icon.width!} height={role.Icon.height!} alt={role.Name || ''} />
        </ImageWrapper>
      )}
      <Title isActive={isActive}>{role.Name}</Title>
    </Role>
  );
};
const ImageWrapper = styled.div<SocialRoleStylesProps>`
 
    :nth-last-child{
      filter: invert(66%) sepia(24%) saturate(349%) hue-rotate(213deg) brightness(94%) contrast(90%);
    }
    }

`;
const Role = styled.button<SocialRoleStylesProps>`
  display: flex;
  align-items: center;
  height: 41px;
  border-radius: 100px;

  cursor: pointer;
  background: ${ifProp('isActive', fontColors.cornFlowerBlue, fontColors.white)};
  border: none;

  :nth-last-of-type(1) {
    background: ${fontColors.lightSlateBlue};
    > p {
      color: ${fontColors.white};
    }
    > div > div > img {
      filter: none;
    }
  }
  > div {
    margin-right: 11px;
    max-width: 24px;
    max-height: 23px;
  }
  div > img {
    filter: ${ifProp(
      'isActive',
      `none`,
      `invert(50%) sepia(66%) saturate(4504%) hue-rotate(193deg) brightness(102%) contrast(101%)`,
    )};
  }
  ${getMediaquery('sm')} {
    padding-left: 10px;
    padding-right: 10px;
  }
  ${getMediaquery('md')} {
    padding-left: 10px;
    padding-right: 10px;
    padding-left: 25px;
    padding-right: 30px;
  }
`;

const Title = styled.p<SocialRoleStylesProps>`
  ${getFont('medium')}
  color: ${ifProp('isActive', fontColors.white, fontColors.cornFlowerBlue)};
  margin: 0;
  font-weight: bold;
  ${getMediaquery('sm')} {
    font-size: 12px;
  }
  ${getMediaquery('md')} {
    font-size: 14px;
  }
`;
