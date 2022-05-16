import React from 'react';
import ShadowStyle from './Style';

const Shadow: React.FC<{}> = () => {
  return (
    <ShadowStyle>
      <div className='vertical-shadow'></div>
      <div className='horizontal-shadow'></div>

    </ShadowStyle>
  );
};

export default Shadow;
