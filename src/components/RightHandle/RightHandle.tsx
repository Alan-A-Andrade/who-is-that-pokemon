import React, { useEffect, useState } from 'react';
import RightPage from './style';
import Header from '../Header/Header';
import UserSettings from '../../pages/UserSettings/UserSettings';
import RightMenu from '../../pages/RightMenu/RightMenu';
import Logout from '../../pages/Logout/Logout';
import useAuth from '../../hooks/useAuth';
import Landing from '../LandingMenu/LandingMenu';

export const RightHandle: React.FC<{}> = () => {
  const [rightPage, setRightPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authState = useAuth();

  useEffect(() => {
    setIsLoggedIn(authState?.auth !== null);
  }, [authState?.auth]);

  if (!isLoggedIn) {
    return (
      <RightPage>
        <Header state={null} setState={null}/>
        <Landing/>
      </RightPage>
    );
  }

  return (
    <RightPage>
      <Header state={rightPage} setState={setRightPage}/>
      {rightPage === 'home'
        ? <RightMenu/>
        : rightPage === 'settings'
          ? <UserSettings/>
          : <Logout setState={setRightPage}/>}
    </RightPage>
  );
};
