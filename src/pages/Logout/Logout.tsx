/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import LogoutStyle from './style';
import Frame from '../../components/Frame/Frame';
import Button from '../../components/Button/Button';
import LedIndicator from '../../components/layout/LedIndicator/LedIndicator';
import useLanguage from '../../hooks/useLanguage';
import Pokeball from '../../components/Pokeball/Pokeball';

const Logout: React.FC<any> = (Props) => {
  const [isSelectedButton, setIsSelectButton] = useState(true);
  const [userPokemonList, setUserPokemonList] = useState([]);

  const { userSettings } = useLanguage();

  function handleButtonClick () {
    setIsSelectButton(!isSelectedButton);
  }
  return (
    <LogoutStyle>
      <Frame width={'75%'} height={'15%'}>
        <h1>{userSettings.logout[2]}</h1>
      </Frame>
      <nav>
        <Button onClick={handleButtonClick} disable={false} isSelected={true}>{userSettings.logout[0]}</Button>
        <Button onClick={() => Props.setState('home')} disable={false} isSelected={true}>{userSettings.logout[1]}</Button>
      </nav>
    </LogoutStyle>
  );
};

export default Logout;
