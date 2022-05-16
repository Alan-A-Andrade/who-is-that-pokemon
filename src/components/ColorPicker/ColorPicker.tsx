import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import ColorPickerStyle from './style';
import useUserSettings from '../../hooks/useUserSettings';
import { userSettingsContextType } from '../../contexts/UserSettingsContext';

export const ColorPicker: React.FC<{}> = () => {
  const { userSettings, updateUserSettings } = useUserSettings() as userSettingsContextType;

  function handleClick (array: number[]) {
    updateUserSettings({ ...userSettings, color: array });
  }

  return (
    <ColorPickerStyle>
      <div onClick={() => handleClick([220, 0, 0])} className='text-color-wrapper'>
        <ColorBox RGBColor={'rgb(220,0,0)'}/>
        <h1>RED</h1>
      </div>
      <div onClick={() => handleClick([0, 140, 120])} className='text-color-wrapper'>
        <ColorBox RGBColor={'rgb(0,140,120)'}/>
        <h1>GREEN</h1>
      </div>
      <div onClick={() => handleClick([244, 173, 0])} className='text-color-wrapper'>
        <ColorBox RGBColor={'rgb(244,173,0)'}/>
        <h1>YELLOW</h1>
      </div>
      <div onClick={() => handleClick([118, 74, 188])} className='text-color-wrapper'>
        <ColorBox RGBColor={'rgb(118,74,188)'}/>
        <h1>PURPLE</h1>
      </div>
      <div onClick={() => handleClick([195, 192, 149])} className='text-color-wrapper'>
        <ColorBox RGBColor={'rgb(195,192,149)'}/>
        <h1>GOLD</h1>
      </div>
      <div onClick={() => handleClick([68, 110, 187])} className='text-color-wrapper'>
        <ColorBox RGBColor={'rgb(68,110,187)'}/>
        <h1>BLUE</h1>
      </div>
      <div onClick={() => handleClick([0, 200, 200])} className='text-color-wrapper'>
        <ColorBox RGBColor={'rgb(0,200,200)'}/>
        <h1>CYAN</h1>
      </div>
      <div className='text-color-wrapper'>
        <ColorBox onClick={() => handleClick([240, 180, 200])} RGBColor={'rgb(240,180,200)'}/>
        <h1>PINK</h1>
      </div>
      <div className='text-color-wrapper'>
        <ColorBox onClick={() => handleClick([20, 20, 20])} RGBColor={'rgb(50,50,50)'}/>
        <h1>BLACK</h1>
      </div>
      <div className='text-color-wrapper'>
        <ColorBox onClick={() => handleClick([220, 220, 220])} RGBColor={'rgb(220,220,220)'}/>
        <h1>WHITE</h1>
      </div>
    </ColorPickerStyle>
  );
};
