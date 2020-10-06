import { createGlobalStyle } from "styled-components";
import 'reset-css';

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #E5E5E5;
  }

  h1, h2, h3 {
    font-family: 'Quicksand', sans-serif;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;