import React from 'react';
import FormInputStyled from '../../components/FormComponents/input/FormInput';
import FormButtonStyled from '../../components/FormComponents/button/FormButton';
import SignUpStyle from './style';

export const SignUp: React.FC<{}> = () => {
  return (
    <SignUpStyle>
      <form>
        <h1>TRAINER</h1>
        <FormInputStyled
          type={'TEXT'}
        />
        <h1>E-MAIL</h1>
        <FormInputStyled
          type={'email'}
        />
        <h1>PASSWORD</h1>
        <FormInputStyled
          type={'password'}
        />
        <h1>CONFIRM PASSWORD</h1>
        <FormInputStyled
          type={'password'}
        />
        <FormButtonStyled>
        SIGN-UP
        </FormButtonStyled>
      </form>
    </SignUpStyle>
  );
};
