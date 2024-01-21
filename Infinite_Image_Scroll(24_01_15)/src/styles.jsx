import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    background-color: teal; 
  }
`

export const Wrap = styled.div`
  .container {
    width: 320px;
    margin: 0 auto;
    padding: 10px;
    min-height: 100vh;
  }
`

export const ImageComponentWrap = styled.div`
  margin: 20px 10px;
  background-color: #000;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  img {
    display: block;
  }
`