import styled from 'styled-components';

const LoginStyle = styled.section`

width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto 0em;
padding: 0em 1em;

&>form>h1{
  color: ${props => props.theme.secondary};
  padding: 0.2em;
  font-size: 1em;
}

`;

export default LoginStyle;
