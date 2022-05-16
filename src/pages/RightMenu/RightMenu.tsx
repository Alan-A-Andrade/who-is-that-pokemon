/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import RightMenuStyle from './style';
import Frame from '../../components/Frame/Frame';
import Button from '../../components/Button/Button';
import LedIndicator from '../../components/layout/LedIndicator/LedIndicator';
import useLanguage from '../../hooks/useLanguage';
import Pokeball from '../../components/Pokeball/Pokeball';

const RightMenu: React.FC<{}> = () => {
  const [isSelectedButton, setIsSelectButton] = useState(true);
  const [userPokemonList, setUserPokemonList] = useState([]);

  const { userSettings } = useLanguage();

  function handleButtonClick () {
    setIsSelectButton(!isSelectedButton);
  }
  return (
    <RightMenuStyle>
      <nav>
        <LedIndicator type='red' text={userSettings.menu[3]}/>
        <LedIndicator type='red' text={userSettings.menu[4]}/>
      </nav>
      <Frame width={'75%'} height={'55%'}>
        {userPokemonList.length === 0
          ? <h1>{userSettings.title[3]}</h1>
          : <ul>
            {
              userPokemonList
                .map((el, index) =>
                  <h1 className='pokemon-list-name' key={index}><Pokeball/>{el}</h1>)
            }
          </ul>}
      </Frame>
      <nav>
        <Button onClick={handleButtonClick} disable={isSelectedButton} isSelected={isSelectedButton}>{userSettings.button[3]}</Button>
        <Button onClick={handleButtonClick} disable={!isSelectedButton} isSelected={!isSelectedButton}>{userSettings.button[2]}</Button>
      </nav>
    </RightMenuStyle>
  );
};

export default RightMenu;
