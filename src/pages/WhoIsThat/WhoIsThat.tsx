/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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
import { WhoIsThatType } from '../../interfaces';
import * as api from '../../api';
import useAuth from '../../hooks/useAuth';
import { useSleep } from '../../hooks/useSleep';

const WhoIsThat: React.FC<{}> = () => {
  const auth = useAuth();
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [getNewPokemon, setGetNewPokemon] = useState(false);
  const [pokemon, setPokemon] = useState<WhoIsThatType>(
    {
      id: 0,
      pokemonId: 0,
      name: '',
      spriteURL: '',
      blackSpriteURL: ''
    });
  const [lives, setLives] = useState(3);
  const [tries, setTries] = useState(0);
  const { userSettings } = useLanguage();

  function handleInput (e:React.FormEvent<HTMLInputElement>) {
    setGuess(e.currentTarget.value.toUpperCase());
  }

  async function newPokemon () {
    if (auth) {
      const pokemon = await api.randomPokemon(auth.auth.token);
      setIsCorrect(false);
      setPokemon(pokemon);
    }
  }

  useEffect(() => {
    newPokemon();
  }, [getNewPokemon]);

  async function handleCorrectGuess () {
    if (auth) {
      setIsCorrect(true);
      await useSleep(2500);
      await api.catchPokemon(auth.auth.token, { pokemonId: pokemon.pokemonId, tentatives: tries });
      setGetNewPokemon(!getNewPokemon);
      setGuess('');
    }
  }

  function handleGuess () {
    switch (guess) {
    case pokemon.name.toUpperCase():
      handleCorrectGuess();
      break;
    case '':

      break;
    default:
      setLives(lives - 1);
      setTries(tries + 1);
      setGuess('');
      break;
    }
  }

  return (
    <WhoIsThatStyle>
      <Frame width={'75%'} height={'50%'}>
        <Screen width={'100%'} height={'100%'}>
          {isCorrect
            ? <img src={pokemon.spriteURL} alt="" />
            : <img src={pokemon.blackSpriteURL} alt="" />}
        </Screen>
      </Frame>
      <h1>{userSettings.title[0]}</h1>
      <NameInput onChange={handleInput} value={guess}

      />
      <div className='live-wrapper'>
        <Button
          disable={lives - tries === 0}
          isSelected ={lives - tries !== 0}
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
