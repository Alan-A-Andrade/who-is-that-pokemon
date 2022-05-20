import React, { useState } from 'react';
import FormInputStyled from '../../components/FormComponents/input/FormInput';
import FormButtonStyled from '../../components/FormComponents/button/FormButton';
import LoginStyle from './style';
import useLanguage from '../../hooks/useLanguage';
import useAuth from '../../hooks/useAuth';
import * as api from '../../api';
import { useTheme } from 'styled-components';
import { okModal } from '../../modal/sucessModal';
import useUserSettings from '../../hooks/useUserSettings';
import { defaultUserSettings } from '../../contexts/UserSettingsContext';

export const Login: React.FC<{}> = () => {
  const theme = useTheme();
  const settings = useUserSettings();
  const { userSettings } = useLanguage();
  const [signIn, setSignIn] = useState({
    email: '',
    password: ''
  });
  const authContext = useAuth();

  async function handleSubmit (e: React.FormEvent<HTMLElement>) {
    e.preventDefault();

    try {
      const signInData = await api.signIn(signIn);

      if (signInData.userSettings !== null) {
        const { colorBlue, colorGreen, colorRed, fontSize, language } = signInData.userSettings;
        settings?.updateUserSettings({
          color: [colorRed, colorGreen, colorBlue],
          fontSize,
          language
        });
      } else {
        settings?.updateUserSettings(defaultUserSettings);
      }
      authContext?.login(signInData.auth);
    } catch (error: any) {
      okModal(error.response.data, null, theme);
    }
  }

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>) {
    setSignIn({ ...signIn, [event.target.name]: event.target.value });
  }

  return (
    <LoginStyle onSubmit={(e) => handleSubmit(e)}>
      <form>
        <h1>{userSettings.login[0]}</h1>
        <FormInputStyled
          type={'email'}
          onChange={handleInputChange}
          name='email'
          value={signIn.email}
          required
        />
        <h1>{userSettings.login[1]}</h1>
        <FormInputStyled
          type={'password'}
          onChange={handleInputChange}
          name='password'
          value={signIn.password}
          required
        />
        <FormButtonStyled>
          {userSettings.landing[0]}
        </FormButtonStyled>
      </form>
    </LoginStyle>
  );
};
