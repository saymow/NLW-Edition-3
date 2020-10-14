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
    --background-secondary: ${({ theme }) => theme.backgroundSecondary};
    --text-primary: ${({ theme }) => theme.textPrimary};
    --text-secondary: ${({ theme }) => theme.textSecondary};
    --text-tertiary: ${({ theme }) => theme.textTertiary};
    --background-input: ${({ theme }) => theme.inputBackground};
  }

  body {
    color: var(--text-primary);
    background: var(--background);
  }

  input,textarea{
    background: ${({ theme }) => theme.inputBackground};
  }

  body, input, button, textarea {
    font: 600 1.8rem Nunito, sans-serif;
  }
`;

export default GlobalCss;
