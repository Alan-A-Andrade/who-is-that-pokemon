import React from 'react';
import FormInputStyled from '../../components/FormComponents/input/FormInput';
import FormButtonStyled from '../../components/FormComponents/button/FormButton';
import LoginStyle from './style';
import useLanguage from '../../hooks/useLanguage';
import useAuth from '../../hooks/useAuth';

export const Login: React.FC<{}> = () => {
  const { userSettings } = useLanguage();
  const authContext = useAuth();

  async function handleSubmit (e: React.FormEvent<HTMLElement>) {
    e.preventDefault();

    const authData = {
      token: 'testesteste',
      name: 'testestete'
    };

    const userSettings = {
      color: [220, 0, 0],
      fontSize: 2,
      language: 'en-US'
    };

    authContext?.login(authData, userSettings);
  }

  return (
    <LoginStyle onSubmit={(e) => handleSubmit(e)}>
      <form>
        <h1>{userSettings.login[0]}</h1>
        <FormInputStyled
          type={'email'}
        />
        <h1>{userSettings.login[1]}</h1>
        <FormInputStyled
          type={'password'}
        />
        <FormButtonStyled>
          {userSettings.landing[0]}
        </FormButtonStyled>
      </form>
    </LoginStyle>
  );
};
