import { useContext } from 'react';
import userSettingsContext from '../contexts/UserSettingsContext';

export default function useUserSettings () {
  return useContext(userSettingsContext);
}
