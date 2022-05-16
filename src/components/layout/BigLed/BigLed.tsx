import React from 'react';
import redLed from '../../../assets/png/led_big_redSVG.svg';
import greenLed from '../../../assets/png/led_big_greenSVG.svg';
import yellowLed from '../../../assets/png/led_big_yellowSVG.svg';
import grayLed from '../../../assets/png/led_big_graySVG.svg';
import BigLedStyle, { BigLedContainer } from './style';
import * as interfaces from '../../../interfaces';

const BigLed: React.FC<interfaces.LedProp> = (props: interfaces.LedProp) => {
  let pngLink;

  switch (props.type) {
  case 'red':
    pngLink = redLed;
    break;

  case 'green':
    pngLink = greenLed;

    break;

  case 'yellow':
    pngLink = yellowLed;

    break;
  case 'gray':
    pngLink = grayLed;

    break;
  }

  return (
    <BigLedContainer>
      <div className='mini-led-border'></div>
      <div className='mini-led-inner-border'></div>
      <BigLedStyle src={pngLink} alt={`${props} led`} />
    </BigLedContainer>
  );
};

export default BigLed;
