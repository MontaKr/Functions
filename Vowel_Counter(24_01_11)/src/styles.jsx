import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`

export const Wrap = styled.div`
  .container {
    background-color: #fff;
    width: 400px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }

  .header {
    margin-bottom: 10px;
    padding-top: 10px;
  }

  #textarea {
    width: 90%;
    height: 200px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    resize: none;
  }

  button {
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: blue;
    cursor: pointer;
    color : #fff;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .output {
    margin-bottom: 10px;
  }
`