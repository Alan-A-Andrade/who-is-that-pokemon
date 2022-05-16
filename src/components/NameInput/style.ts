import styled from 'styled-components';

const NameInputStyled = styled.div<any>`
  width: 75%;
  
  text-align: center;
  padding: 0.2em;
  border-radius: 0.5em;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.select};
  border: 0.2em solid ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  
  input{
    width: 100%;
    font-size: 1.2em;
    letter-spacing: 0.2em;
    border: none;
    text-align: center;
    background-color: transparent;
  }

  `;

export default NameInputStyled;
