import styled from 'styled-components';

const FormInputStyled = styled.input`

  width: 100%;
  font-size: 1.2em;
  letter-spacing: 0.2em;
  border: none;
  text-align: center;
  background-color: transparent;
  text-align: center;
  padding: 0.2em;
  margin-bottom: 1em;
  border-radius: 0.5em;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.select};
  border: 0.2em solid ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  pointer-events: ${(props) => props.disabled ? 'none' : 'all'};


`;

export default FormInputStyled;
