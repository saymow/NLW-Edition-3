import React from "react";
import { useGlobalContext } from "../../context";

import { Container, Input, Ball, SunIcon, MoonIcon } from "./styles";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <Container>
      <Input
        type="checkbox"
        id="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="checkbox">
        <Ball />
        <SunIcon />
        <MoonIcon />
      </label>
    </Container>
  );
};

export default ThemeSwitcher;
