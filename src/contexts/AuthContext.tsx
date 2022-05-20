import { createContext, useState } from 'react';
import { authContextType, authType } from '../interfaces';

const AuthContext = createContext<authContextType | null>(null);

export function AuthContextProvider ({ children }:any) {
  if (localStorage.getItem('auth') === 'undefined') {
    localStorage.clear();
  }

  const authLocalStorage = localStorage.getItem('auth');
  const persistedAuthData = JSON.parse(authLocalStorage as string);

  const [auth, setAuth] = useState(persistedAuthData);

  function login (authData: authType) {
    setAuth(authData);
    localStorage.setItem('auth', JSON.stringify(authData));
  }

  function logoff () {
    setAuth('');
    localStorage.removeItem('auth');
    localStorage.removeItem('userSettings');
    window.location.reload();
  }

  return (
    <AuthContext.Provider value={{ auth, login, logoff }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
