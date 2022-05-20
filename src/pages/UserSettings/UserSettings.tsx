/* eslint-disable no-unused-vars */
import UserSettingsStyle from './style';
import React, { useState } from 'react';
import Frame from '../../components/Frame/Frame';
import Button from '../../components/Button/Button';
import LedIndicator from '../../components/layout/LedIndicator/LedIndicator';
import { ColorPicker } from '../../components/ColorPicker/ColorPicker';
import { FontPicker } from '../../components/FontPicker/FontPicker';
import { LanguagePicker } from '../../components/LanguagePicker/LanguagePicker';
import * as interfaces from '../../interfaces';
import useLanguage from '../../hooks/useLanguage';
import * as api from '../../api';
import useAuth from '../../hooks/useAuth';
import useUserSettings from '../../hooks/useUserSettings';
import { defaultUserSettings } from '../../contexts/UserSettingsContext';

const UserSettings: React.FC<{}> = () => {
  const auth = useAuth();
  const settings = useUserSettings();
  const [option, setOption] = useState(<ColorPicker/>);
  const [ledColors, setLedColors] = useState<interfaces.settingsOptionsLedColors>({
    color: 'green',
    font: 'red',
    language: 'red'
  });

  const { userSettings } = useLanguage();

  async function handleSave () {
    if (settings && auth) {
      const {
        color: [colorRed, colorGreen, colorBlue],
        fontSize,
        language
      } = settings.userSettings;

      await api.saveSettings(
        auth.auth.token,
        {
          colorRed,
          colorBlue,
          colorGreen,
          fontSize,
          language
        });
    }
  }

  async function handleReset () {
    if (settings && auth) {
      await api.deleteSettings(auth.auth.token);
      settings.updateUserSettings(defaultUserSettings);
    }
  }

  function handleToggle (option: string) {
    switch (option) {
    case 'color':
      setOption(<ColorPicker/>);
      setLedColors({
        color: 'green',
        font: 'red',
        language: 'red'
      });
      break;
    case 'font':
      setOption(<FontPicker/>);
      setLedColors({
        color: 'red',
        font: 'green',
        language: 'red'
      });
      break;
    case 'language':
      setOption(<LanguagePicker/>);
      setLedColors({
        color: 'red',
        font: 'red',
        language: 'green'
      });
      break;
    default:
      break;
    }
  }

  return (
    <UserSettingsStyle>
      <nav>
        <div onClick={() => handleToggle('color')}>
          <LedIndicator type={ledColors.color} text={userSettings.menu[0]}/>
        </div>
        <div onClick={() => handleToggle('font')}>
          <LedIndicator type={ledColors.font} text={userSettings.menu[1]}/>
        </div>
        <div onClick={() => handleToggle('language')}>
          <LedIndicator type={ledColors.language} text={userSettings.menu[2]}/>
        </div>
      </nav>
      <Frame width={'75%'} height={'50%'}>
        {option}
      </Frame>
      <nav>
        <Button onClick={handleSave} disable={false} isSelected={true}>{userSettings.button[0]}</Button>
        <Button onClick={handleReset} disable={false} isSelected={true}>{userSettings.button[1]}</Button>
      </nav>
    </UserSettingsStyle>
  );
};

export default UserSettings;
