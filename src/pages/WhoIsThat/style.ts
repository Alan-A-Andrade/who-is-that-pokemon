import styled from 'styled-components';

const WhoIsThatStyle = styled.section`

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  gap: 0.5em;

h1{
  padding: 1em 0;
  color: ${props => props.theme.secondary};
  text-align: center;
}

.live-wrapper{
  width: 75%;
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  justify-content: flex-start;
  
  & >button{
    box-shadow: none;
  }
}

.tip-wrapper{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;

  &>h1{
    padding: 0px;
    margin: 0px;
  }

  &>section>h1{
    padding: 0px;
    margin: 0px;
  }
}

`;

export default WhoIsThatStyle;
