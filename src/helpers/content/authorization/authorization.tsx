import { useState, useEffect, useCallback } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { switchProp } from '../../lib/switch-prop';
import { getMediaquery } from '../../index';

import { If } from '../../../components/shared/if';
import { AuthIcon } from '../../icons/AuthIcon';
import { AuthIconClose } from '../../icons/AuthIconClose';
import AuthIconEntry from '../../icons/auth-icon-entry.png';
import AuthIconRegistration from '../../icons/auth-icon-registration.png';

import { AuthFormBaseProps } from './types';
import { AuthorizationOverlay } from './authorization-overlay';
import { AuthorizationForm } from './authorization-form';

export interface AuthorizationProps
  extends AuthFormBaseProps,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

type ValueProps = 'entry' | 'registration';

export function Authorization({ formId, recoveryLink, gosuslugiAuth, thirdPartyLinks, ...props }: AuthorizationProps) {
  const [userChoice, setUserChoice] = useState<ValueProps>('entry');
  const [isFormOpened, setIsFormOpened] = useState<boolean>(false);

  const handleChange = (evt: React.ChangeEvent, newValue: ValueProps) => {
    setUserChoice(newValue);
  };

  const onOpenBtnClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setIsFormOpened(true);
  };

  const formReset = useCallback(() => {
    const form = document.getElementById(formId);

    setIsFormOpened(false);

    if (form) {
      (form as HTMLFormElement).reset();
    }
  }, [setIsFormOpened, formId]);

  const onWrapperClick = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.target;
    if ((target as HTMLDivElement).id === 'auth-wrapper') {
      setIsFormOpened(false);
      formReset();
    }
  };

  const handleKeyUp = useCallback(
    (evt: KeyboardEvent) => {
      const isEsc = evt.key === 'Escape';

      if (!isEsc) return;

      evt.stopPropagation();
      evt.preventDefault();
      formReset();
    },
    [formReset],
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  }, [handleKeyUp]);

  return (
    <>
      <AuthBtnOpen onClick={onOpenBtnClick}>
        <AuthBtnIcon />
        Войти
      </AuthBtnOpen>
      <AuthorizationOverlay id="auth-wrapper" opened={isFormOpened} onClick={onWrapperClick} {...props}>
        <BlurIcon userStatus={userChoice}></BlurIcon>
        <ContentWrapper>
          <FormTitle>
            <If condition={userChoice === 'entry'} elseChildren="Здравствуйте!">
              Добрый день!
            </If>
          </FormTitle>

          <CloseButton onClick={formReset}>
            <CloseIcon />
          </CloseButton>

          <StyledTabs value={userChoice} onChange={handleChange} aria-label="Вход или регистрация?">
            <StyledTab value="entry" label="Вход" />
            <StyledTab value="registration" label="Регистрация" />
          </StyledTabs>

          <AuthForm
            formId={formId}
            recoveryLink={recoveryLink}
            gosuslugiAuth={gosuslugiAuth}
            thirdPartyLinks={thirdPartyLinks}
            userChoice={userChoice}
          />
        </ContentWrapper>
      </AuthorizationOverlay>
    </>
  );
}

interface StyledTabsProps {
  onChange: (evt: React.ChangeEvent, newValue: ValueProps) => void;
  value: ValueProps;
}

const StyledTabs = withStyles({
  root: {
    gridArea: '2 / 1 / 3 / 3',
    minHeight: '40px',
  },
  indicator: {
    display: 'flex',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      height: '2px',
      backgroundColor: '#1B8EFF',
      borderRadius: '2px 2px 0px 0px',
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
  label: string;
  value: ValueProps;
}

const StyledTab = withStyles({
  root: {
    width: '50%',
    minHeight: '40px',
    fontFamily: 'var(--font-families-ubuntu)',
    fontSize: '14px',
    lineHeight: '17px',
    color: 'var(--colors-blue)',
    textTransform: 'none',
    borderBottom: '1px solid rgba(22, 74, 132, 0.2)',
    opacity: 1,
    transition: 'color 0.3s linear',

    '&:hover': {
      color: 'var(--colors-pink)',
    },

    '&:focus': {
      opacity: 1,
    },

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '19px',
    },
  },
  selected: {
    color: 'var(--colors-darkblue)',
    cursor: 'default',

    '&:hover': {
      color: 'var(--colors-darkblue)',
    },
  },
})((props: StyledTabProps) => <Tab disableRipple {...props} />);

const AuthBtnOpen = styled.a`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  border: var(--colors-white) 1px solid;
  border-radius: 30px;
  font-family: var(--font-families-gilroy);
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: var(--colors-blue);
  cursor: pointer;
  transition: color 0.3s linear;

  &:hover {
    color: var(--colors-pink);
  }
`;

const AuthBtnIcon = styled(AuthIcon)`
  margin-right: 10px;

  path {
    fill: currentColor;
  }
`;

interface BlurIconProps {
  userStatus: ValueProps;
}

const BlurIcon = styled.div<BlurIconProps>`
  display: none;

  ${getMediaquery('lg')} {
    display: block;
    width: 50%;
    border-radius: 60px 0 0 60px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    ${switchProp('userStatus', {
      entry: css`
        background-image: url(${AuthIconEntry});
      `,
      registration: css`
        background-image: url(${AuthIconRegistration});
      `,
    })};
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  width: 100%;
  padding: 30px 20px;
  background-color: var(--colors-white);

  ${getMediaquery('sm')} {
    padding: 30px 40px;
  }

  ${getMediaquery('md')} {
    position: relative;
    padding: 90px 100px 115px;
    border-radius: 40px;
  }

  ${getMediaquery('lg')} {
    width: 50%;
    border-radius: 0 60px 60px 0;
  }
`;

const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: var(--font-families-gilroy);
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  color: var(--colors-darkblue);

  ${getMediaquery('md')} {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 48px;
  }
`;

const CloseButton = styled.button`
  align-self: center;
  background-color: transparent;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 0px 3px #2023e6);
  }

  &:focus {
    outline: none;
    filter: drop-shadow(0px 0px 3px #2023e6);
  }

  ${getMediaquery('md')} {
    position: absolute;
    top: 55px;
    right: 55px;
  }
`;

const CloseIcon = styled(AuthIconClose)`
  width: 19px;
  height: 19px;

  ${getMediaquery('md')} {
    width: 28px;
    height: 28px;
  }
`;

const AuthForm = styled(AuthorizationForm)`
  grid-area: 3 / 1 / 4 / 3;
`;
