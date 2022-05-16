import styled from 'styled-components';

const Screen = styled.article<any>`

  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em;
  border-radius: 1em;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.select};
  border: 0.4em solid ${props => props.theme.secondary};
  font-size: 0.8em;
`;

export default Screen;
