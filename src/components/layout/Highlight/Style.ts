import styled from 'styled-components';

const HighlightStyle = styled.div`
  width: 5em;
  height: 5em;

  background-color: transparent;

  .horizontal-highlight{
    width: 100%;
    height: 0.3em;
    background-color: ${props => props.theme.light};
  }
  
  .vertical-highlight{
    width: 0.3em;
    height: 100%;
    background-color: ${props => props.theme.light};
  }

  
`;

export default HighlightStyle;
