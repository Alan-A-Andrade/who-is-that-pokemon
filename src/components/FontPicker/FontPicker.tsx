import React from 'react';
import FontPickerStyle from './style';
import useUserSettings from '../../hooks/useUserSettings';
import { userSettingsContextType } from '../../contexts/UserSettingsContext';

export const FontPicker: React.FC<{}> = () => {
  const { userSettings, updateUserSettings } = useUserSettings() as userSettingsContextType;

  function handleClick (fontSize: number) {
    updateUserSettings({ ...userSettings, fontSize });
  }

  return (
    <FontPickerStyle>
      <div onClick={() => handleClick(0.5)} className='text-color-wrapper'>
        <h1>SMALL</h1>
      </div>
      <div onClick={() => handleClick(2)} className='text-color-wrapper'>
        <h1>MEDIUM</h1>
      </div>
    </FontPickerStyle>
  );
};
