import styled from '@emotion/styled';

import { prop } from '../../helpers';

export interface FlexProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: 'flex-start' | 'center' | 'flex-end';
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
}

export function Flex(props: FlexProps) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.div<FlexProps>`
  display: flex;
  align-items: ${prop('align')};
  justify-content: ${prop('justify')};
  flex-direction: ${prop('direction')};
`;
