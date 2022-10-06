import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { getMediaquery } from '../../../helpers';

import { IconSearch } from '../../../helpers/icons/IconSearch';
import { IconClose } from '../../../helpers/icons/IconClose';

export type SearchProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export function Search(props: SearchProps) {
  return (
    <SearchForm {...props}>
      <FormWrapper>
        <SearchBtn type="submit">
          <IconSearch />
        </SearchBtn>
        <SearchField type="search" placeholder="Умный поиск"></SearchField>
        <ResetBtn type="reset">
          <IconClose />
        </ResetBtn>
      </FormWrapper>
    </SearchForm>
  );
}

const SearchForm = styled.form`
  width: 100%;
`;

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 15px 10px;
  border: 1px solid var(--colors-darkblue);
  border-radius: 18px;

  ${getMediaquery('lg')} {
    height: 48px;
    border: none;
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const btnsBase = css`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.6;
  }
`;

const SearchBtn = styled.button`
  ${btnsBase};
  margin-right: 10px;
`;

const SearchField = styled.input`
  flex-grow: 1;
  max-width: 220px;
  padding: 0;
  font-family: var(--font-families-ubuntu);
  font-size: 16px;
  line-height: 20px;
  color: var(--colors-darkblue);
  border: none;
  background-color: transparent;
  transition: box-shadow 0.3s linear;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }

  ${getMediaquery('lg')} {
    max-width: 480px;
  }
`;

const ResetBtn = styled.button`
  ${btnsBase};
  display: none;
  margin-left: auto;
`;
