import styled from 'styled-components';

const MiniLedStyle = styled.img`
width: 1.5em;
object-fit: scale-down;
background-color: transparent;
flex-grow:0;
flex-shrink:0;
position: absolute;
z-index: 2;



`;

export const MiniLedContainer = styled.div`

width:1.5em;
height: 1.5em;
display: flex;
align-items: center;
justify-content: center;
overflow: none;
position: relative;

&:active {
  transform: translateY(0.1em);
  }

.mini-led-border{
  width:1.5em;
  height: 1.5em;
  border: 0.3em solid ${props => props.theme.secondary};
  border-radius: 100%;
  position: absolute;
  z-index: 3;
}

`;

export default MiniLedStyle;
