/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Frame from '../../components/Frame/Frame';
import Button from '../../components/Button/Button';
import Screen from '../../components/Screen/Screen';
import NameInput from '../../components/NameInput/NameInput';
import imageBlack from '../../assets/tests/132_black_png.png';
import imageSprite from '../../assets/tests/132.png';
import WhoIsThatStyle from './style';
import LedIndicator from '../../components/layout/LedIndicator/LedIndicator';
import Pokeball from '../../components/Pokeball/Pokeball';
import HorizontalDisplay from '../../components/layout/HorizontalDisplay/HorizontalDisplay';
import useLanguage from '../../hooks/useLanguage';

const WhoIsThat: React.FC<{}> = () => {
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [pokemon, setPokemon] = useState('ditto');
  const [lives, setLives] = useState(3);
  const { userSettings } = useLanguage();

  function handleInput (e:React.FormEvent<HTMLInputElement>) {
    setGuess(e.currentTarget.value.toUpperCase());
  }

  function handleGuess () {
    switch (guess) {
    case pokemon.toUpperCase():
      setIsCorrect(true);
      break;
    case '':

      break;
    default:
      setLives(lives - 1);
      setGuess('');
      break;
    }
  }

  return (
    <WhoIsThatStyle>
      <Frame width={'75%'} height={'50%'}>
        <Screen width={'100%'} height={'100%'}>
          {isCorrect
            ? <img src={imageSprite} alt="" />
            : <img src={imageBlack} alt="" />}
        </Screen>
      </Frame>
      <h1>{userSettings.title[0]}</h1>
      <NameInput onChange={handleInput} value={guess}

      />
      <div className='live-wrapper'>
        <Button
          disable={lives === 0}
          isSelected ={lives !== 0}
          onClick={handleGuess}>
          {userSettings.button[4]}
        </Button>
        <HorizontalDisplay width={'8em'}>
          <h1>{lives} </h1><Pokeball/>
        </HorizontalDisplay>
      </div>
    </WhoIsThatStyle>
  );
};

export default WhoIsThat;
