import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

import { getMediaquery, ifProp } from '../../../index';

import { If } from '../../../../components/shared/if';
import { Icon } from '../../../../components/icon';
import { Button } from '../../../../components/button';

import { AuthFormBaseProps } from '../types';

export interface AuthorizationFormProps
  extends AuthFormBaseProps,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  userChoice: 'entry' | 'registration';
}

export function AuthorizationForm({
  formId,
  recoveryLink,
  gosuslugiAuth,
  thirdPartyLinks,
  userChoice,
  ...props
}: AuthorizationFormProps) {
  const renderThirdPartyLinks = () => {
    if (thirdPartyLinks !== undefined) {
      return thirdPartyLinks.map((item) => (
        <FormThirdPartyItem key={item.name}>
          <a href={item.link} aria-label={item.name}>
            <Icon icon={item.logo} />
          </a>
        </FormThirdPartyItem>
      ));
    }
  };

  return (
    <Form id={formId} {...props}>
      <If condition={userChoice === 'entry'}>
        <FormField type="text" placeholder="Логин (телефон, email или СНИЛС)" required />
        <FormField type="password" placeholder="Введите пароль" required />

        <FormWrap>
          <RememberCheckboxLabel
            control={<RememberCheckbox name="remember-checkbox" checkedIcon={<CheckBoxOutlinedIcon />} />}
            label="Запомнить меня"
          />

          <FormRecoveryLink href={recoveryLink}>Забыли пароль?</FormRecoveryLink>
        </FormWrap>

        <FormBtn type="submit">Войти</FormBtn>

        <FormOr>
          <FormOrText>или</FormOrText>
        </FormOr>

        <FormGosuslugi href={gosuslugiAuth}>Войти через Госуслуги</FormGosuslugi>

        <FormThirdParty>{renderThirdPartyLinks()}</FormThirdParty>
      </If>

      <If condition={userChoice === 'registration'}>
        <FormField type="email" placeholder="Email" required />
        <FormField type="tel" placeholder="Телефон" required />
        <FormField type="password" placeholder="Придумайте пароль" required />
        <FormField type="password" placeholder="Подтвердите пароль" required last />

        <FormBtn type="submit">Зарегистироваться</FormBtn>

        <FormOr>
          <FormOrText>или</FormOrText>
        </FormOr>

        <FormGosuslugi href={gosuslugiAuth} last>
          Зарегистрироваться через Госуслуги
        </FormGosuslugi>
      </If>
    </Form>
  );
}

const RememberCheckboxLabel = withStyles({
  label: {
    fontFamily: 'var(--font-families-ubuntu)',
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.16px',
    color: '#164A84',

    '@media (min-width: 768px)': {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
})(FormControlLabel);

const RememberCheckbox = withStyles({
  root: {
    color: '#164A84',
    '&$checked': {
      color: '#164A84',
    },
  },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const Form = styled.form`
  grid-area: 3 / 1 / 4 / 3;
  width: 100%;
`;

interface FormFieldProps {
  last?: boolean;
}

const FormField = styled.input<FormFieldProps>`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  padding: 15px;
  font-family: var(--font-families-ubuntu);
  font-size: 14px;
  line-height: 17px;
  color: var(--colors-white);
  border: none;
  border-radius: 10px;
  background-image: radial-gradient(35.57% 337.4% at 35.22% 263%, #f7d6f2 0%, rgba(247, 214, 243, 0) 100%),
    linear-gradient(90deg, #e1d7f9 0%, #ded8fb 100%);

  ${ifProp(
    'last',
    css`
      margin-bottom: 30px;
    `,
  )}

  &::placeholder {
    color: var(--colors-white);
    opacity: 0.8;
  }

  &:hover,
  &:focus {
    outline: none;
    filter: drop-shadow(0px 0px 3px #2023e6);
  }

  ${getMediaquery('md')} {
    font-size: 18px;
    line-height: 22px;
  }
`;

const FormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .MuiIconButton-label {
    > input {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 12px;
      opacity: 0;
    }
  }
`;

const FormRecoveryLink = styled.a`
  font-family: var(--font-families-ubuntu);
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.16px;
  color: var(--colors-blue);
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: var(--colors-pink);
  }

  ${getMediaquery('md')} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const FormBtn = styled(Button)`
  width: 100%;
  margin-bottom: 20px;

  ${getMediaquery('md')} {
    margin-bottom: 30px;
  }
`;

const FormOr = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background-color: #6b8199;
    transform: translateY(-50%);
  }

  ${getMediaquery('md')} {
    margin-bottom: 35px;
  }
`;

const FormOrText = styled.span`
  position: relative;
  padding: 0 10px 3px;
  font-family: var(--font-families-ubuntu);
  font-size: 14px;
  line-height: 16px;
  color: #6b8199;
  background-color: var(--colors-white);
  z-index: 1;

  ${getMediaquery('md')} {
    font-size: 18px;
    line-height: 21px;
  }
`;

interface FormGosuslugiProps {
  last?: boolean;
}

const FormGosuslugi = styled.a<FormGosuslugiProps>`
  display: inline-block;
  width: 100%;
  height: 54px;
  margin-bottom: 10px;
  padding: 15px 20px;
  font-family: var(--font-families-ubuntu);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.16px;
  text-align: center;
  color: #1874b8;
  text-decoration: none;
  border-radius: 10px;
  background-image: radial-gradient(43.72% 311.11% at 39.95% -89.81%, #f7d6f2 0%, rgba(247, 214, 243, 0) 100%),
    linear-gradient(90deg, #cae6fb 0%, #ded8fb 100%);
  transition: all 0.3s;

  ${ifProp(
    'last',
    css`
      margin-bottom: 0;
    `,
  )}

  &:hover {
    filter: drop-shadow(0px 0px 3px #2023e6);
  }

  ${getMediaquery('md')} {
    font-size: 16px;
  }
`;

const FormThirdParty = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  justify-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  ${getMediaquery('sm')} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }
`;

const FormThirdPartyItem = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-image: linear-gradient(90deg, #d0e8f9 0%, #d9e6f8 100%);
    transition: all 0.3s;
  }

  a:hover {
    filter: drop-shadow(0px 0px 3px #2023e6);
  }

  ${getMediaquery('md')} {
    a {
      width: 63px;
      height: 54px;
    }
  }
`;
