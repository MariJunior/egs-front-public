import { FC } from 'react';
import styled from '@emotion/styled';

import { Button } from '../../../button';

export type ApplicationTabletProps = {
  cardsLength: number;
};
export const ApplicationTablet: FC<ApplicationTabletProps> = ({ children, cardsLength }) => {
  const isLengthMoreThenSix = cardsLength >= 6;

  return (
    <TabletApplication>
      {children}

      {isLengthMoreThenSix && <Button style={{ margin: '0 auto' }}>Показать еще</Button>}
    </TabletApplication>
  );
};

const TabletApplication = styled.div`
  display: flex;
  max-width: 728px;
  flex-wrap: wrap;
  margin-bottom: 76px;
  align-items: center;
`;
