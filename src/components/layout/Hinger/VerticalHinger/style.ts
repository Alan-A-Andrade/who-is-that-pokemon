import styled from 'styled-components';

const VerticalHingerStyle = styled.div`

  width: 12em;
  height: 100vh;
  border: 0.2em solid ${props => props.theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .vertical-hinger-end{
    min-height: 4em;
    width: 100%;
    height: 5%;
    border: 0.2em solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.main};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

    .vertical-hinger-end-shadow{
      width: 0.2em;
      height: 100%;
      background-color: ${props => props.theme.shadow};

    }
    .vertical-hinger-end-highlight{
      width: 0.2em;
      height: 100%;
      background-color: ${props => props.theme.light};
    }
    .vertical-hinger-end-body{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
      .flexbox-row{
        width: 100%;
        display: flex;
        flex-direction: row;
      }
      .vertical-hinger-end-body-body{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
      }
      .vertical-hinger-end-body-highlight{
        margin-left: 0.5em;
        width: 1em;
        height: 100%;
        background-color: ${props => props.theme.light};

      }
      .vertical-hinger-end-body-shadow{
        margin-right: 0.5em;
        width: 0.7em;
        height: 100%;
        background-color: ${props => props.theme.shadow};

      }
      .vertical-hinger-end-body-vertical-body{
        width: 45%;
        height: 0.2em;
        background-color: ${props => props.theme.main};
      }
      .vertical-hinger-end-body-vertical-highlight{
      width: 100%;
      height: 0.2em;
      background-color: ${props => props.theme.light};
      }
      .vertical-hinger-end-body-vertical-shadow{
      width: 100%;
      height: 0.2em;
      background-color: ${props => props.theme.shadow};
      }  
  
  .vertical-hinger-body{
    height: 100%;
    width: 100%;
    border: 0.2em solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.main};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .vertical-hinger-gap{
    width: 100%;
    height: 1em;
    border: 0.2em solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.redGrey};
  }

`;

export default VerticalHingerStyle;
