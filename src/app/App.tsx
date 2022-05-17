import React from 'react';
import GlobalStyle from '../styles/global';
import App from './style';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { LanguageContextProvider } from '../contexts/LanguageContext';
import { AuthContextProvider } from '../contexts/AuthContext';
import VerticalHinger from '../components/layout/Hinger/VerticalHinger/VerticalHinger';
import { RightHandle } from '../components/RightHandle/RightHandle';
import { LeftHandle } from '../components/LeftHandle/LeftHandle';
import { UserSettingsProvider } from '../contexts/UserSettingsContext';
// import Highlight from '../components/layout/Highlight/Highlight'
// import Shadow from '../components/layout/Shadow/Shadow'
// import Button from '../components/Button/Button'

function AppComponent () {
  return (
    <AuthContextProvider>
      <UserSettingsProvider>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <App>
              <GlobalStyle/>
              <RightHandle/>
              <VerticalHinger/>
              <LeftHandle/>
            </App>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </UserSettingsProvider>
    </AuthContextProvider>
  );
}

export default AppComponent;
