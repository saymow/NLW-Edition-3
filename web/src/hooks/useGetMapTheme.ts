import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

export default function useGetMapTheme() {
  const { theme } = useGlobalContext();
  const [mapTheme, setMapTheme] = useState<string>();

  useEffect(() => setMapTheme(theme === "light" ? "light-v10" : "dark-v10"), [
    theme,
  ]);

  return mapTheme;
}
