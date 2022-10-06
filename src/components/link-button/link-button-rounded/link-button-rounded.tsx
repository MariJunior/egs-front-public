import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { prop, switchProp, getMediaquery } from '../../../helpers';
import { GoogleIconMono } from '../../../helpers/icons/GoogleIconMono';
import { GoogleType } from '../../../helpers/icons/GoogleType';
import { AppStoreIcon } from '../../../helpers/icons/AppStoreIcon';
import { AppStoreType } from '../../../helpers/icons/AppStoryType';

import { PlatformProps, LengthProps, ColorsProps } from './types';

export interface LinkButtonRoundedProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  colors: ColorsProps;
  font?: 'var(--font-families-ubuntu)' | 'var(--font-families-gilroy)' | string;
  fontSize?: string;
  icon?: React.ReactNode;
  length: LengthProps;
  lineHeight?: string;
  link: string;
  platform: PlatformProps;
  text?: string;
  weight?: string | number;
}

export function LinkButtonRounded({ link, platform, length, icon, text, ...props }: LinkButtonRoundedProps) {
  const renderStandartPlatformContent = (platformIcon: React.ReactNode, platformType: React.ReactNode) => {
    return (
      <>
        <IconWrapper length={length}>{platformIcon}</IconWrapper>
        <TypeWrapper length={length}>{platformType}</TypeWrapper>
      </>
    );
  };

  const PlatformMap = {
    website: link,
    appstore: renderStandartPlatformContent(<AppStoreIcon />, <AppStoreType />),
    google: renderStandartPlatformContent(<GoogleIconMono />, <GoogleType />),
    icon: icon,
    text: text,
  };

  return (
    <Link href={link} length={length} {...props}>
      {PlatformMap[platform]}
    </Link>
  );
}

type LinkProps = Omit<LinkButtonRoundedProps, 'link' | 'platform' | 'icon' | 'text'>;

const Link = styled.a<LinkProps>`
  display: flex;

  justify-content: center;
  align-items: center;
  font-family: ${prop('font', 'var(--font-families-ubuntu)')};
  font-style: normal;
  font-weight: ${prop('weight', 'bold')};
  text-decoration: none;
  border-style: solid;
  transition: all 0.3s linear;

  ${switchProp(
    'length',
    {
      short: css`
        padding: 6px 12px;
        border-width: 1px;
        border-radius: 10px;
        font-size: 12px;
        line-height: 16px;

        ${getMediaquery('md')} {
          padding: 5px 18px;
          border-width: 2px;
          border-radius: 50px;
          font-size: 16px;
          line-height: 21px;
        }
      `,
      regular: css`
        padding: 10px 20px;
        border-width: 2px;
        border-radius: 50px;
        font-size: 18px;
        line-height: 23px;
      `,
    },
    css`
      font-size: inherit;
      line-height: normal;
    `,
  )};

  font-size: ${prop('fontSize')};
  line-height: ${prop('lineHeight')};

  ${switchProp('colors', {
    white: css`
      color: var(--colors-blue);
      background-color: transparent;
      border-color: var(--colors-blue);

      &:hover {
        color: var(--colors-white);
        background-color: var(--colors-blue);
        border-color: var(--colors-white);
      }
    `,
    light: css`
      color: var(--colors-darkblue);
      background-color: var(--colors-lightblue);
      border-color: var(--colors-lightblue);

      &:hover {
        color: var(--colors-pink);
        opacity: 0.6;
      }
    `,
    intense: css`
      color: var(--colors-white);
      background-color: var(--colors-blue);
      border-color: var(--colors-blue);

      &:hover {
        background-color: var(--colors-pink);
        border-color: var(--colors-pink);
      }
    `,
  })};
`;

interface WrappersBasicProps {
  length: LengthProps;
}

const IconWrapper = styled.span<WrappersBasicProps>`
  path {
    fill: currentColor;
  }

  ${switchProp('length', {
    short: css`
      ${getMediaquery('md')} {
        margin-right: 5px;
      }
    `,
    regular: css`
      margin-right: 5px;
    `,
  })};
`;

const TypeWrapper = styled.span<WrappersBasicProps>`
  path {
    fill: currentColor;
  }

  ${switchProp('length', {
    short: css`
      display: none;
      ${getMediaquery('md')} {
        display: flex;
        align-items: center;
      }
    `,
    regular: css`
      display: flex;
      align-items: center;
    `,
  })};
`;
