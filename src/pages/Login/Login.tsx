import React from 'react';
import FormInputStyled from '../../components/FormComponents/input/FormInput';
import FormButtonStyled from '../../components/FormComponents/button/FormButton';
import LoginStyle from './style';

export const Login: React.FC<{}> = () => {
  return (
    <LoginStyle>
      <form>
        <h1>E-MAIL</h1>
        <FormInputStyled
          type={'email'}
        />
        <h1>PASSWORD</h1>
        <FormInputStyled
          type={'password'}
        />
        <FormButtonStyled>
        LOGIN
        </FormButtonStyled>
      </form>
    </LoginStyle>
  );
};
