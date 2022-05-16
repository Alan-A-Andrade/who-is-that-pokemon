import { ThemeProvider } from 'styled-components';
import { themeGenerator } from '../styles/theme';
import useUserSettings from '../hooks/useUserSettings';
import { userSettingsContextType } from '../contexts/UserSettingsContext';
export function ThemeContextProvider ({ children }:any) {
  const { userSettings } = useUserSettings() as userSettingsContextType;

  const [red, green, blue] = userSettings.color;

  return (
    <ThemeProvider theme={
      themeGenerator(
        red,
        green,
        blue,
        userSettings.fontSize
      )}>
      {children}
    </ThemeProvider>
  );
}
