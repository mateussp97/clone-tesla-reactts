import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: 'Roboto', sans-serif;
  }

  ul { 
    list-style-type: none;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%
    }

    @media screen and (max-width: 720px) {
      font-size: 87.5%
    }
  }
`;
