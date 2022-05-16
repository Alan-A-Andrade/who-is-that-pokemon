import { useContext } from 'react';
import languageContext from '../contexts/LanguageContext';

export default function useLanguage () {
  return useContext(languageContext);
}
