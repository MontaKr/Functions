import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }

  body {
    background-color: skyblue;
    display: flex;
    justify-content: center;
  }
`

export const Wrap = styled.div`
  .cards {
    width: 200px;
    height: 200px;
    background-color: white;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    margin: 10px;
  }

  .scrollbar {
    background-color: green;
    position: fixed;
    height: 40px;
    top: 0;
    left: 0;
  }
`