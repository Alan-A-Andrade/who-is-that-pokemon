import styled from 'styled-components';

const HorizontalDisplay = styled.div<any>`
  width: ${props => props.width};
  height: 2.2em;
  text-align: center;
  padding: 0.2em;
  margin: 1em;
  border-radius: 0.5em;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.select};
  border: 0.2em solid ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2em;


  `;

export default HorizontalDisplay;
