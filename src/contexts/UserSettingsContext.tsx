import { createContext, useState } from 'react';
import { userSettings } from '../interfaces';

export interface userSettingsContextType {
  userSettings: userSettings
  updateUserSettings: Function
}

const userSettingsContext = createContext<userSettingsContextType | null>(null);

export function UserSettingsProvider ({ children }:any) {
  if (localStorage.getItem('userSettings') === 'undefined') {
    localStorage.clear();
  }

  const defaultUserSettings: userSettings = {
    color: [220, 0, 0],
    fontSize: 2,
    language: 'en-US'
  };

  const userSettingsLocalStorage = localStorage.getItem('userSettings');
  let persistedUserSettingsData: userSettings = JSON.parse(userSettingsLocalStorage as string);
  if (!persistedUserSettingsData) {
    persistedUserSettingsData = defaultUserSettings;
  }
  const [userSettings, setUserSettings] = useState(persistedUserSettingsData);

  function updateUserSettings (data:userSettings) {
    setUserSettings(data);
    localStorage.setItem('userSettings', JSON.stringify(data));
  }

  return (
    <userSettingsContext.Provider value={{ userSettings, updateUserSettings }}>
      {children}
    </userSettingsContext.Provider>
  );
}

export default userSettingsContext;
