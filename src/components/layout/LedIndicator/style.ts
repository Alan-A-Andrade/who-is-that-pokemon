import styled from 'styled-components';

const LedIndicatorStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding: 0.5em;
  &:hover{
      cursor: pointer;
    }

  h1{ 
    font-size: 1em;
    color: ${props => props.theme.secondary};

    &:hover{
      cursor: pointer;
    }
  }


`;

export default LedIndicatorStyle;
