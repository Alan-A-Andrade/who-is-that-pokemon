import React, { useState } from 'react';
import FormInputStyled from '../../components/FormComponents/input/FormInput';
import FormButtonStyled from '../../components/FormComponents/button/FormButton';
import SignUpStyle from './style';
import useLanguage from '../../hooks/useLanguage';
import { signUp } from '../../interfaces';
import * as api from '../../api';
import { okModal } from '../../modal/sucessModal';
import { useTheme } from 'styled-components';

export const SignUp: React.FC<any> = (Props) => {
  const { userSettings } = useLanguage();
  const theme = useTheme();

  const [signUpData, setSignUpData] = useState<signUp>({
    trainer: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (signUpData.password !== signUpData.confirmPassword) {
      return;
    }
    try {
      await api.signUp({
        trainer: signUpData.trainer,
        email: signUpData.email,
        password: signUpData.password
      });
      okModal('Bem vindo ao mundo pokemon!', Props.setState('login'), theme);
    } catch (error: any) {
      console.log(error);
      okModal(error.response.data, null, theme);
    }
  }

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>) {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  }

  return (
    <SignUpStyle>
      <form onSubmit={handleSubmit}>
        <h1>{userSettings.signup[0]}</h1>
        <FormInputStyled
          type={'TEXT'}
          onChange={handleInputChange}
          name='trainer'
          value={signUpData.trainer}
          required
        />
        <h1>{userSettings.signup[1]}</h1>
        <FormInputStyled
          type={'email'}
          onChange={handleInputChange}
          name='email'
          value={signUpData.email}
          required
        />
        <h1>{userSettings.signup[2]}</h1>
        <FormInputStyled
          type={'password'}
          onChange={handleInputChange}
          name='password'
          value={signUpData.password}
          required
        />
        <h1>{userSettings.signup[3]}</h1>
        <FormInputStyled
          type={'password'}
          onChange={handleInputChange}
          name='confirmPassword'
          value={signUpData.confirmPassword}
          required
        />
        <FormButtonStyled>
          {userSettings.landing[1]}
        </FormButtonStyled>
      </form>
    </SignUpStyle>
  );
};
