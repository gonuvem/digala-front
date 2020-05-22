import { createGlobalStyle } from 'styled-components';

import Colors from '../utils/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${Colors.black};
    -webkit-font-smoothing: antialiased;
  }
`;
