import React from 'react';
import PokeballStyle from './style';

const Pokeball: React.FC<{}> = () => {
  return (
    <PokeballStyle>
      <div className='top-pokeball'></div>
      <div className='middle-pokeball'></div>
      <div className='bottom-pokeball'></div>
    </PokeballStyle>
  );
};

export default Pokeball;
