/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import LandingMenuStyle from './style';
import Frame from '../Frame/Frame';
import LedIndicator from '../layout/LedIndicator/LedIndicator';
import useLanguage from '../../hooks/useLanguage';
import { Login } from '../../pages/Login/Login';
import { SignUp } from '../../pages/SignUp/SignUp';
import { landingOptionsLedColors } from '../../interfaces';

const Landing: React.FC<{}> = () => {
  const [state, setState] = useState('login');
  const { userSettings } = useLanguage();

  const [ledColors, setLedColors] = useState<landingOptionsLedColors>({
    login: 'green',
    signup: 'red'
  });

  function handleToggle (option: string) {
    switch (option) {
    case 'login':
      setLedColors({
        login: 'green',
        signup: 'red'
      });
      setState('login');
      break;
    case 'signup':
      setLedColors({
        login: 'red',
        signup: 'green'
      });
      setState('signup');
      break;
    default:
      break;
    }
  }
  return (
    <LandingMenuStyle>
      <nav>
        <div onClick={() => handleToggle('login')}>
          <LedIndicator type={ledColors.login} text={'LOGIN'}/>
        </div>
        <div onClick={() => handleToggle('signup')}>
          <LedIndicator type={ledColors.signup} text={'SIGN-UP'}/>
        </div>
      </nav>

      {state === 'login'
        ? <Login/>
        : <SignUp/>}
    </LandingMenuStyle>
  );
};

export default Landing;
