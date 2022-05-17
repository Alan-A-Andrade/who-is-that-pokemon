import styled from 'styled-components';

const FormButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 0.2em 1em;
  border-radius: 0.65em;
  cursor: pointer;
  background-color: ${props => props.theme.select};
  border: 0.4em solid ${props => props.theme.secondary};
  box-shadow: 0.1em 0.2em ${props => props.theme.secondary};
  ${props => props.disabled && 'box-shadow: none; transform: translateY(0.2em);'}  
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? 'none' : 'all'};
  
  &:active {
  box-shadow: 0 ${props => props.theme.secondary};
  transform: translateY(0.4em);
  }
`;

export default FormButtonStyled;
