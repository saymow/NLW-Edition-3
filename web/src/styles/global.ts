import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    color: #fff;
    background: #ebf2f5;
  }

  body, input, button, textarea {
    font: 600 1.8rem Nunito, sans-serif;
  }
`;

export default GlobalCss;
