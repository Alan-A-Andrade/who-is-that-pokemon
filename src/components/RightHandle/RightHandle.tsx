import React, { useState } from 'react';
import RightPage from './style';
import Header from '../Header/Header';
import UserSettings from '../../pages/UserSettings/UserSettings';
import RightMenu from '../../pages/RightMenu/RightMenu';
import Logout from '../../pages/Logout/Logout';

export const RightHandle: React.FC<{}> = () => {
  const [rightPage, setRightPage] = useState('home');

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
