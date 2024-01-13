import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #456;
  }
`

export const Wrap = styled.div`
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
  }

  .qr-area {
    width: 500px;
    height: ${props => props.imgSrc ? '120px' : '0'};
    display: flex;
    justify-content: center;
    transition: height 0.5s;

    img {
      height: 100%;
    }
  }

  .error {
    position: absolute;
    width: 100%;
    color : red;
    text-align: center;
    display: ${props => props.isBlank ? 'block' : 'none'};
    animation: anime 0.05s linear 10;
  }

  @keyframes anime  {
    0% {
    transform: translateX(0px);
    }

    25% {
      transform: translateX(-2px);
    }

    50% {
      transform: translateX(0px);
    }

    75% {
      transform: translateX(2px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  .input-area {
    display: flex;
    justify-content: center;

    .input-text {
    width: 300px;
    padding: 15px 20px;
    border-radius: 15px 0 0 15px;
    outline: none;
    border: 2px solid #d2481e;
    caret-color: #d2481e;

      &::placeholder {
        color : #d2481e;
      }
    }

    .generate-qr {
      width: 150px;
      padding: 15px 20px;
      border-radius: 0 15px 15px 0;
      outline: none;
      border : 0;
      background-color: #d2481e;
      color : #fff;
      font-weight: bold;
      cursor: pointer;
      text-transform: capitalize;
    }
  }  
`