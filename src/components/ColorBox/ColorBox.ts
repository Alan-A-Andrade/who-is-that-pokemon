import styled from 'styled-components';

const ColorBox = styled.button<any>`
  width: 2em;
  height: 2em;
  font-size: 1em;
  border-radius: 0em;
  padding: 0.5em;
  cursor: pointer;
  background-color: ${props => props.RGBColor};
  border: 0.1em solid black;

`;

export default ColorBox;
