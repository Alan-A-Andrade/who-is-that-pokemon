import React from 'react';
import NameInputStyled from './style';

const NameInput: React.FC<any> = (Props) => {
  return (
    <NameInputStyled >
      <input
        maxLength={12}
        value={Props.value}
        onChange={Props.onChange}
        type="text"
      />
    </NameInputStyled>
  );
};

export default NameInput;
