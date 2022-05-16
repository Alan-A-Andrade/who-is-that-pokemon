import React from 'react';
import LanguagePickerStyle from './style';
import useUserSettings from '../../hooks/useUserSettings';
import { userSettingsContextType } from '../../contexts/UserSettingsContext';

export const LanguagePicker: React.FC<{}> = () => {
  const { userSettings, updateUserSettings } = useUserSettings() as userSettingsContextType;

  function handleClick (language: string) {
    updateUserSettings({ ...userSettings, language });
  }

  return (
    <LanguagePickerStyle>
      <div onClick={() => handleClick('en-US')} className='text-color-wrapper'>
        <h1>English</h1>
      </div>
      <div onClick={() => handleClick('pt-BR')} className='text-color-wrapper'>
        <h1>Brazilian Portuguese</h1>
      </div>
    </LanguagePickerStyle>
  );
};
