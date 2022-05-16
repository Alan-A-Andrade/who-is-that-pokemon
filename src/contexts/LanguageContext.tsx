import { createContext, useEffect, useState } from 'react';
import useUserSettings from '../hooks/useUserSettings';
import { userSettingsContextType } from '../contexts/UserSettingsContext';
import enUS from '../assets/language/en-US';
import ptBR from '../assets/language/pt-BR';

const languageContext = createContext<any | null>(null);

export function LanguageContextProvider ({ children }:any) {
  const [languagePack, setLanguagePack] = useState(enUS);

  const { userSettings } = useUserSettings() as userSettingsContextType;

  const { language } = userSettings;

  useEffect(() => {
    switch (language) {
    case 'en-US':
      setLanguagePack(enUS);
      break;
    case 'pt-BR':
      setLanguagePack(ptBR);
      break;
    default:
      break;
    }
  }, [language]);

  return (
    <languageContext.Provider value={languagePack}>
      {children}
    </languageContext.Provider>
  );
}

export default languageContext;
