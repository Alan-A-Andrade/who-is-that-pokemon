import styled from 'styled-components';

const BigLedStyle = styled.img`
width: 5em;
object-fit: scale-down;
background-color: transparent;
flex-grow:0;
flex-shrink:0;
position: absolute;
z-index: 2;

`;

export const BigLedContainer = styled.div`

width:5em;
height: 5em;
display: flex;
align-items: center;
justify-content: center;
overflow: none;
position: relative;

.mini-led-border{
  width:5em;
  height: 5em;
  border: 0.3em solid ${props => props.theme.secondary};
  border-radius: 100%;
  position: absolute;
  z-index: 3;
}

.mini-led-inner-border{
  width:4em;
  height: 4em;
  border: 0.3em solid ${props => props.theme.secondary};
  border-radius: 100%;
  position: absolute;
  z-index: 3;
}

`;

export default BigLedStyle;
