import styled from 'styled-components';

const HeaderStyle = styled.header`
width: 100%;
min-height: 20vh;
display: flex;
justify-content: space-between;
align-items: flex-start;

padding: 1em;


border-bottom: 0.4em solid ${props => props.theme.secondary};

.highligh-box{
  width: 11vh;
  height: 11vh;
  overflow: hidden;
}

nav{
    display: flex;
    padding: 0.5em;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;


  }

`;

export default HeaderStyle;
