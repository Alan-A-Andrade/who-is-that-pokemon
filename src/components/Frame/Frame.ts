import styled from 'styled-components';

const Frame = styled.article<any>`

  background-color: ${props => props.theme.white};
  max-width: 75%;
  width: ${props => props.width};
  height: ${props => props.height};
  max-height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em;
  border-radius: 1.2em;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.white};
  border: 0.4em solid ${props => props.theme.secondary};
  font-size: 0.8em;
  overflow: scroll;
`;

export default Frame;
