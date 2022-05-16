import React from 'react';
import LedIndicatorStyle from './style';
import * as interfaces from '../../../interfaces';
import MiniLed from '../MiniLed/MiniLed';

const LedIndicator: React.FC<interfaces.LedIndicatorProp> = (Props: interfaces.LedIndicatorProp) => {
  return (
    <LedIndicatorStyle>
      <MiniLed type={Props.type}/>
      <h1>{Props.text}</h1>
    </LedIndicatorStyle>
  );
};

export default LedIndicator;
