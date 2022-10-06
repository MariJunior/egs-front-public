import { FC, useRef } from 'react';
import Pagination from 'rc-pagination';
import styled from '@emotion/styled';

export interface PaginationComponentProps {
  currentPageLength: number;
  totalCardsLength: number;
  pageSize: number;
  clickHandler: () => void;
}
export interface PaginationRefProps extends Pagination {
  next: () => void;
}
export const PaginationComponent: FC<PaginationComponentProps> = ({
  clickHandler,
  currentPageLength,
  totalCardsLength,
}) => {
  const paginationRef = useRef<PaginationRefProps>(null);

  return (
    <Container>
      <PaginationStyles>
        <CounterWrapper>
          <Counter>{currentPageLength}</Counter> из <Counter>{totalCardsLength}</Counter>
        </CounterWrapper>
      </PaginationStyles>
      {currentPageLength !== totalCardsLength ? <Button onClick={clickHandler}>Показать ещё</Button> : null}
      {/*<Button onClick={clickHandler}>Показать ещё</Button>*/}
    </Container>
  );
};
const CounterWrapper = styled.span`
  display: flex;
  gap: 5px;
  padding-left: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;
const Button = styled.button`
  width: 170px;
  height: 50px;
  background-color: transparent;
  color: var(--colors-blue);
  border: 2px solid var(--colors-blue);
  box-sizing: border-box;
  border-radius: 100px;
  cursor: pointer;
`;

const Counter = styled.p`
  color: var(--colors-blue);
  text-align: center;
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;
const PaginationStyles = styled.div``;
