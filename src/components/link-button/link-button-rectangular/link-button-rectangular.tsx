import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ifNotProp } from '../../../helpers';

import { GoogleIconColor } from '../../../helpers/icons/GoogleIconColor';
import { GoogleIconMono } from '../../../helpers/icons/GoogleIconMono';
import { GoogleType } from '../../../helpers/icons/GoogleType';
import { AppStoreIcon } from '../../../helpers/icons/AppStoreIcon';
import { AppStoreType } from '../../../helpers/icons/AppStoryType';
import { DownloadType } from '../../../helpers/icons/DownloadType';

export interface LinkButtonRectangularProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  fullIcon?: boolean;
  link: string;
  platform: 'appstore' | 'google';
  secondary?: boolean;
}

export function LinkButtonRectangular({ link, platform, secondary, fullIcon, ...props }: LinkButtonRectangularProps) {
  const isApple = platform === 'appstore';
  const isGoogle = platform === 'google';
  const isFullColorGoogle = isGoogle && fullIcon ? true : false;

  const renderPlatformIcon = () => {
    if (isApple) {
      return <AppStoreIcon />;
    } else if (isGoogle) {
      return fullIcon ? <GoogleIconColor /> : <GoogleIconMono />;
    }
  };

  const renderPlatformType = () => {
    if (isApple) {
      return fullIcon ? (
        <>
          <DownloadType />
          <AppStoreType />
        </>
      ) : (
        <AppStoreType />
      );
    } else if (isGoogle) {
      return <GoogleType />;
    }
  };

  return (
    <Link href={link} secondary={secondary} {...props}>
      <IconWrapper secondary={secondary} fullColor={isFullColorGoogle}>
        {renderPlatformIcon()}
      </IconWrapper>
      <TypeWrapper secondary={secondary}>{renderPlatformType()}</TypeWrapper>
    </Link>
  );
}

interface LinkProps {
  secondary?: boolean;
}

const Link = styled.a<LinkProps>`
  display: flex;
  height: 44px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 2px solid;
  border-radius: 10px;
  transition: all 0.3s linear;

  &:hover {
    opacity: 0.6;
  }

  ${ifNotProp(
    'secondary',
    css`
      border-color: #b5deff;
      background-color: var(--colors-white);
    `,
    css`
      border-color: var(--colors-lightgrey);
      background-color: var(--colors-lightgrey);
    `,
  )};
`;

interface WrappersBasicProps {
  secondary?: boolean;
}

interface IconWrapperProps extends WrappersBasicProps {
  fullColor?: boolean;
}

const IconWrapper = styled.span<IconWrapperProps>`
  margin-right: 6px;

  ${ifNotProp(
    'fullColor',
    ifNotProp(
      'secondary',
      css`
        path {
          fill: #b5deff;
        }
      `,
      css`
        path {
          fill: #a3a7b7;
        }
      `,
    ),
  )}
`;

const TypeWrapper = styled.span<WrappersBasicProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 3px;

  ${ifNotProp(
    'secondary',
    css`
      path {
        fill: #b5deff;
      }
    `,
    css`
      path {
        fill: #a3a7b7;
      }
    `,
  )};
`;
