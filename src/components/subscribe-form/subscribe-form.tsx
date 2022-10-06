import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

import { ArrowSubmit } from '../../helpers/icons/ArrowSubmit';

export type SubscribeFormProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export function SubscribeForm({ ...props }: SubscribeFormProps) {
  return (
    <form {...props}>
      <FormTitle>Подписаться на рассылку</FormTitle>
      <FieldWrapper>
        <Field type="email" required />
        <SubmitBtn type="submit" aria-label="Подписаться">
          <SubmitBtnIcon />
        </SubmitBtn>
      </FieldWrapper>
      <PrivacyWrapper>
        <PrivacyCheckbox
          size="small"
          name="privacy-checkbox"
          required
          inputProps={{
            'aria-label': 'Согласие с политикой конфиденциальности',
          }}
        />
        <PrivacyLabel>
          Я принимаю <PrivacyLink href="#">политику конфиденциальности</PrivacyLink>.
        </PrivacyLabel>
      </PrivacyWrapper>
    </form>
  );
}

const PrivacyCheckbox = withStyles({
  root: {
    color: '#195084',
    '&$checked': {
      color: '#195084',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const FormTitle = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
  padding-left: 10px;
  font-family: var(--font-families-gilroy);
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: var(--colors-darkblue);
`;

const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Field = styled.input`
  width: 100%;
  padding: 12px 55px 12px 20px;
  border: 1px solid rgba(25, 80, 132, 0.2);
  border-radius: 100px;
  font-family: var(--font-families-ubuntu);
  font-size: 16px;
  line-height: 19px;
  color: #8ca7c1;
  background-color: var(--colors-white);

  &:focus {
    outline: none;
    filter: drop-shadow(0px 0px 3px var(--colors-shadow));
  }

  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }
`;

const SubmitBtn = styled.button`
  position: relative;
  top: 7px;
  margin-left: -35px;
  width: 25px;
  height: 25px;
  padding: 0;
  color: var(--colors-blue);
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s linear;

  &:hover {
    color: var(--colors-pink);
  }
`;

const SubmitBtnIcon = styled(ArrowSubmit)`
  path {
    fill: currentColor;
  }
`;

const PrivacyWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .MuiIconButton-label {
    > input {
      width: 54px;
      height: 37px;
      position: absolute;
      left: 12px;
      opacity: 0;
    }
  }
`;

const PrivacyLabel = styled.p`
  font-family: var(--font-families-ubuntu);
  font-size: 14px;
  line-height: 18px;
  color: var(--colors-darkblue);
  opacity: 0.5;
`;

const PrivacyLink = styled.a`
  color: inherit;
  transition: color 0.3s linear;

  &:hover {
    color: var(--colors-blue);
  }
`;
