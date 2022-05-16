import React from 'react';
import LeftHandleStyle from './style';
import WhoIsThat from '../../pages/WhoIsThat/WhoIsThat';

export const LeftHandle: React.FC<{}> = () => {
  return (
    <LeftHandleStyle>
      <WhoIsThat/>
    </LeftHandleStyle>
  );
};
