import styled from 'styled-components';

const RightMenuStyle = styled.section`
  background-color: ${props => props.theme.main};
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav{
    display: flex;
    padding: 0.5em;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul{
    width: 100%;
  }

  .pokemon-list-name{
    display: flex;
    gap: 0.5em;
    align-items: center;
    padding: 0.2em;
  }
`;

export default RightMenuStyle;
