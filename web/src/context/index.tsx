import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";

import { darkTheme, lightTheme } from "../styles/theme";

type availableTheme = "dark" | "light";

const Context = createContext({
  theme: "light" as availableTheme,
  toggleTheme: () => {},
});

const GlobalContext: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<availableTheme>("light");

  const toggleTheme = () => {
    let newTheme = (theme === "dark" ? "light" : "dark") as availableTheme;

    setTheme(newTheme);

    localStorage.setItem("@Theme", newTheme);
  };

  const retrieveTheme = () => {
    const retrievedTheme = localStorage.getItem("@Theme") as availableTheme;

    if (["light", "dark"].includes(retrievedTheme)) setTheme(retrievedTheme);
    else localStorage.removeItem("@Theme");
  };

  useEffect(retrieveTheme, []);

  return (
    <Context.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);

  return context;
};

export default GlobalContext;
