import React, { useEffect, useState } from 'react';
import LeftHandleStyle from './style';
import WhoIsThat from '../../pages/WhoIsThat/WhoIsThat';
import Frame from '../Frame/Frame';
import useAuth from '../../hooks/useAuth';

export const LeftHandle: React.FC<{}> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authState = useAuth();

  useEffect(() => {
    setIsLoggedIn(authState?.auth !== null);
  }, [authState?.auth]);

  if (!isLoggedIn) {
    return (
      <LeftHandleStyle>
        <Frame>
          <h1>Hello and welcome to my game, whos that pokemon!, yeah I know, very creative, but i had fun making and i hope you have fun playing it!
            <br></br>
            I will use your email for nothing besides saving your statistics and captured pokemons.
          </h1>
        </Frame>
      </LeftHandleStyle>
    );
  }

  return (
    <LeftHandleStyle>
      <WhoIsThat/>
    </LeftHandleStyle>
  );
};
