import styled from '@emotion/styled';

import { ifProp } from '../../../lib/if-prop';
import { getMediaquery, getOverlay } from '../../../../helpers';

export interface AuthorizationOverlayProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  opened: boolean;
}

export function AuthorizationOverlay({ children, ...props }: React.PropsWithChildren<AuthorizationOverlayProps>) {
  return (
    <Wrapper {...props}>
      <Container>{children}</Container>
    </Wrapper>
  );
}

interface WrapperProps {
  opened?: boolean;
}

const Wrapper = styled.section<WrapperProps>`
  ${getOverlay('extended')};
  display: ${ifProp('opened', 'block', 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--colors-white);
  z-index: 999;

  ${getMediaquery('md')} {
    display: ${ifProp('opened', 'block', 'none')};
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;

  ${getMediaquery('md')} {
    margin-top: 50vh;
    margin-left: 50vw;
    width: 630px;
    height: 800px;
    transform: translate(-50%, -50%);
  }

  ${getMediaquery('lg')} {
    width: 1266px;
  }
`;
