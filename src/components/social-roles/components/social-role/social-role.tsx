import { FC } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import { SocialRoleProps } from '../../types';

import { getMediaquery, getFont } from 'helpers';

import iconTooltip from '../../../../../public/assets/social-icons-main/tooltip-icon.svg';

export const SocialRole: FC<SocialRoleProps> = ({ Name, Icon, Description, link }) => {
  return (
    <SocialButton href={link && link} target="_blank">
      <IconWrapper>{Icon && <Image src={Icon} alt={'social-icon.svg'} />}</IconWrapper>
      <SocialButtonTitle>{Name}</SocialButtonTitle>
      {Description && (
        <Tooltip>
          <TooltipIcon>
            <Image src={iconTooltip} alt="tooltip-icon" />
          </TooltipIcon>
          <div style={{ marginBottom: '3px' }}>
            <TooltipText>{Description}</TooltipText>
          </div>
        </Tooltip>
      )}
    </SocialButton>
  );
};

const SocialButton = styled.a`
  position: relative;
  border: transparent;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 100px;
  letter-spacing: 0.16px;
  color: var(--colors-white);
  background: var(--colors-blue);

  :nth-last-of-type(1) {
    color: var(--colors-white);
    background: #a378ff;
  }

  &:hover {
    & > div {
      display: flex;
    }
  }
  ${getMediaquery('sm')} {
    margin-right: 2px;
    margin-bottom: 10px;
    padding: 5px 10px 5px 10px;
    ${getFont('small')};
    font-size: 12px;
  }

  ${getMediaquery('md')} {
    height: 50px;
    padding: 0px 27px 0px 30px;
    ${getFont('medium')};
    box-sizing: border-box;
    margin-right: 10px;

    :nth-last-of-type {
      margin-right: 0;
    }
  }
`;

const Tooltip = styled.div`
  display: none;
  box-shadow: 0 0 30px rgb(0 102 255 / 15%);
  width: 329px;
  box-sizing: border-box;
  position: absolute;
  left: -13%;
  top: 45px;
  padding: 20px 20px 20px 45px;
  border-radius: 20px;
  text-align: left;
  background: var(--colors-white);
  z-index: 50;
`;

const TooltipIcon = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const TooltipText = styled.p`
  color: var(--colors-black);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.16px;
  margin: 0;
`;

const IconWrapper = styled.div`
  margin-right: 11px;

  display: flex;

  @media (min-width: 375px) {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const SocialButtonTitle = styled.p`
  position: relative;

  color: #fff;
`;
