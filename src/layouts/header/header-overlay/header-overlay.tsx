import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ifProp } from '../../../helpers/lib/if-prop';
import { getMediaquery, getOverlay } from '../../../helpers';

export interface HeaderOverlayProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  opened: boolean;
}

export function HeaderOverlay({ opened, children, ...props }: HeaderOverlayProps) {
  return (
    <GradientWrap opened={opened} {...props}>
      <Wrapper opened={opened}>{children}</Wrapper>
    </GradientWrap>
  );
}

interface WrappersBasicProps {
  opened?: boolean;
}

const GradientWrap = styled.div<WrappersBasicProps>`
  ${ifProp(
    'opened',
    css`
      ${getOverlay('standart')};
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 90;
    `,
    css`
      position: static;
      width: auto;
      height: auto;
      display: flex;
    `,
  )}

  ${getMediaquery('lg')} {
    position: static;
    width: 100%;
    height: auto;
    display: flex;
  }
`;

const Wrapper = styled.div<WrappersBasicProps>`
  ${ifProp(
    'opened',
    css`
      width: 100%;
      height: 100%;
      padding: 10px 15px 40px;
      background-color: var(--colors-white);
      background-image: linear-gradient(180deg, #eaf6ff 0%, rgba(234, 246, 255, 0) 105.74%);
      background-size: 100% 255px;
      background-repeat: no-repeat;
      border-left: 65px solid rgba(0, 43, 83, 0.7);
      backdrop-filter: blur(13px);

      ${getMediaquery('md')} {
        margin-left: 50vw;
        margin-top: 50vh;
        max-width: 360px;
        max-height: 675px;
        border-radius: 22px;
        transform: translate(-50%, -50%);
      }
    `,
  )}

  ${getMediaquery('lg')} {
    width: 100%;
  }
`;
