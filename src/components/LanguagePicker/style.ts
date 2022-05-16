import styled from 'styled-components';

const LanguagePickerStyle = styled.section`

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: wrap;
gap: 0.5em;


.color-line{
  width: 100%;
 display: flex;
 justify-content: space-evenly;
}

h1{ 
    font-size: 0.8em;
    color: ${props => props.theme.secondary};
  }

.text-color-wrapper{
  padding: 0.2em;
  display: flex;
  gap: 0.8em;
  align-items: center;
  justify-content: center;

  &>h1{
    padding-top: 0.2em;

    &:hover{
      cursor: pointer;
    }
  }
}
`;

export default LanguagePickerStyle;
