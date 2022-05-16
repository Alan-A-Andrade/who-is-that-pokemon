import styled from 'styled-components';

const Button = styled.button<any>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 0.65em;
  cursor: pointer;

  background-color: ${props => props.isSelected
    ? props.theme.select
    : props.theme.grey};
  border: 0.4em solid ${props => props.theme.secondary};
  box-shadow: 0.1em 0.2em ${props => props.theme.secondary};
  ${props => props.disable && 'box-shadow: none; transform: translateY(0.2em);'}
  
  
  ${props => props.disable && 'pointer-events: none;'}

  &:active {
  box-shadow: 0 ${props => props.theme.secondary};
  transform: translateY(0.4em);
  }
`;

export default Button;
