import React, { useState, useEffect } from 'react';
import HeaderStyle from './style';
import Highlight from '../layout/Highlight/Highlight';
import LedIndicator from '../layout/LedIndicator/LedIndicator';
import * as interfaces from '../../interfaces';
import BigLed from '../layout/BigLed/BigLed';
import useLanguage from '../../hooks/useLanguage';

const Header: React.FC<any> = (Props) => {
  const [ledColors, setLedColors] = useState<interfaces.headerOptionsLedColors>({
    home: 'green',
    settings: 'red',
    logout: 'red'
  });

  const { userSettings } = useLanguage();

  if (!Props.state) {
    return (
      <HeaderStyle>
        <div className="highligh-box">
          <Highlight/>
        </div>
        <BigLed type='red' />
        <nav>
          <div>
            <LedIndicator type={'green'} text={userSettings.header[0]}/>
          </div>
        </nav>
      </HeaderStyle>
    );
  }

  useEffect(() => {
    handleToggle(Props.state);
  }, [Props.state]);

  function handleToggle (option: string) {
    switch (option) {
    case 'home':
      setLedColors({
        home: 'green',
        settings: 'red',
        logout: 'red'
      });
      Props.setState('home');
      break;
    case 'settings':
      setLedColors({
        home: 'red',
        settings: 'green',
        logout: 'red'
      });
      Props.setState('settings');
      break;
    case 'logout':
      setLedColors({
        home: 'red',
        settings: 'red',
        logout: 'green'
      });
      Props.setState('logout');
      break;
    default:
      break;
    }
  }

  return (
    <HeaderStyle>
      <div className="highligh-box">
        <Highlight/>
      </div>
      <BigLed type='red' />
      <nav>
        <div onClick={() => handleToggle('home')}>
          <LedIndicator type={ledColors.home} text={userSettings.header[0]}/>
        </div>
        <div onClick={() => handleToggle('settings')}>
          <LedIndicator type={ledColors.settings} text={userSettings.header[1]}/>
        </div>
        <div onClick={() => handleToggle('logout')}>
          <LedIndicator type={ledColors.logout} text={userSettings.header[2]}/>
        </div>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
