import { createGlobalStyle } from 'styled-components';

import Colors from '../utils/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
  }

  body {
    background-color: #F4F4F4;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${Colors.black};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .ReactModal__Content {
    transform: translateY(-10vh);
    transition: transform 0.3s ease-in-out;
  }

  .ReactModal__Content--after-open {
    transform: translateY(10vh);
  }

  .ReactModal__Content--before-close {
    transform: translateY(-10vh);
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;
