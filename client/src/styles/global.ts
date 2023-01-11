import { createGlobalStyle } from 'styled-components';

import logoImg from '../assets/logoParque.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    // background: #f0f0f5 url(${logoImg}) no-repeat 70% top;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 100%;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
