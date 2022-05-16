import styled from 'styled-components';

const PokeballStyle = styled.div`

width: 1em;
height: 1em;

background-color: red;

flex-wrap: nowrap;

border: 0.1em solid black;

border-radius: 100%;
overflow: hidden;

top: calc(50vh - 10em);

z-index: 10;

.top-pokeball{
width: 100%;
height: 40%;
background-color: red;
}

.middle-pokeball{
width: 100%;
height: 20%;
background-color: black;
}

.bottom-pokeball{
  width: 100%;
height: 40%;
background-color: white;
}

.button-pokeball{
  width: 3em;
  height: 3em;
  position: relative;
  border-radius: 100%;
  z-index: 2;
  background-color: black;
  bottom: calc(5em + 1.5em);
  left: calc(5em - 1.5em);

}

.button-center-pokeball{
  width: 2em;
  height: 2em;
  position: relative;
  border-radius: 100%;
  z-index: 2;
  background-color: white;
  bottom: calc(5em + 4em);
  left: calc(5em - 1em);

}

`;

export default PokeballStyle;
