import { createGlobalStyle } from 'styled-components';
import pixel from '../assets/fonts/PressStart2P.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: "pixel";
src: local("PressStart2P"),
 url(${pixel}) format("truetype");
font-weight: bold;
}

*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
  font-family: 'pixel';
}

#root{
  margin:0 auto;
}


body {
  margin: 0;
  font-family: "pixel"
}


`;
export default GlobalStyle;
