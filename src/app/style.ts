import styled from 'styled-components';

const App = styled.main`
  background-color: ${props => props.theme.main};
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  *{
    font-size: calc(${props => props.theme.fontSize}px + 2vmin);
  }


  .pp-container{
    background-color: ${props => props.theme.main};

  }
`;

export default App;
