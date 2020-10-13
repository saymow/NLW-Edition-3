import { createGlobalStyle } from "styled-components";

import { darkTheme } from "./theme";

type themeType = typeof darkTheme;

const GlobalCss = createGlobalStyle<{ theme: themeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --background: ${({ theme }) => theme.background};
    --text-primary: ${({ theme }) => theme.textPrimary}
  }

  body {
    color: var(--text-primary);
    background: var(--background);
  }

  body, input, button, textarea {
    font: 600 1.8rem Nunito, sans-serif;
  }
`;

export default GlobalCss;
