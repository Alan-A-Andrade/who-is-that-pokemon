import React from 'react';
import HeaderStyle from './style';
import Highlight from '../layout/Highlight/Highlight';
import LedIndicator from '../layout/LedIndicator/LedIndicator';
import * as interfaces from '../../interfaces';
import BigLed from '../layout/BigLed/BigLed';
import useLanguage from '../../hooks/useLanguage';

const Header: React.FC<any> = (Props) => {
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

  let ledColors: interfaces.headerOptionsLedColors = {
    home: 'green',
    settings: 'red',
    logout: 'red'
  };

  switch (Props.state) {
  case 'home':
    ledColors = {
      home: 'green',
      settings: 'red',
      logout: 'red'
    };
    Props.setState('home');
    break;
  case 'settings':
    ledColors = {
      home: 'red',
      settings: 'green',
      logout: 'red'
    };
    Props.setState('settings');
    break;
  case 'logout':
    ledColors = {
      home: 'red',
      settings: 'red',
      logout: 'green'
    };
    break;
  default:
    break;
  }

  return (
    <HeaderStyle>
      <div className="highligh-box">
        <Highlight/>
      </div>
      <BigLed type={!Props.state ? 'red' : 'green'} />
      <nav>
        <div onClick={() => Props.setState('home')}>
          <LedIndicator type={ledColors.home} text={userSettings.header[0]}/>
        </div>
        <div onClick={() => Props.setState('settings')}>
          <LedIndicator type={ledColors.settings} text={userSettings.header[1]}/>
        </div>
        <div onClick={() => Props.setState('logout')}>
          <LedIndicator type={ledColors.logout} text={userSettings.header[2]}/>
        </div>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
