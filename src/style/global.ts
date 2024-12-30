import 'sanitize.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Pretendard';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  html {
    font-family: 'Pretendard';
  }
  body {
    font-family: 'Pretendard';
  }
  h1 {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
`;
