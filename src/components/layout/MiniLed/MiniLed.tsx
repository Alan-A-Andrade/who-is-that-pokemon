import React from 'react';
import redLed from '../../../assets/png/led_redSVG.svg';
import greenLed from '../../../assets/png/led_greenSVG.svg';
import yellowLed from '../../../assets/png/led_yellowSVG.svg';
import grayLed from '../../../assets/png/led_graySVG.svg';
import MiniLedStyle, { MiniLedContainer } from './style';
import * as interfaces from '../../../interfaces';

const MiniLed: React.FC<interfaces.LedProp> = (props: interfaces.LedProp) => {
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
    <MiniLedContainer>
      <div className='mini-led-border'></div>
      <MiniLedStyle src={pngLink} alt={`${props} led`} />
    </MiniLedContainer>
  );
};

export default MiniLed;
