import React from 'react';
import HighlightStyle from './Style';

const Highlight: React.FC<{}> = () => {
  return (
    <HighlightStyle>
      <div className='horizontal-highlight'></div>
      <div className='vertical-highlight'></div>
    </HighlightStyle>
  );
};

export default Highlight;
