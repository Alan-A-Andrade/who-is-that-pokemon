import styled from 'styled-components';

const ShadowStyle = styled.div`
  width: 10em;
  height: 10em;

  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .horizontal-shadow{
    width: 100%;
    height: 0.3em;
    background-color: ${props => props.theme.shadow};
  }
  
  .vertical-shadow{
    width: 0.3em;
    height: 100%;
    background-color: ${props => props.theme.shadow};
  }

  
`;

export default ShadowStyle;
