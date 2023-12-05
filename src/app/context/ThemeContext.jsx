"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFormLocalStorage = () => {
  if (typeof Window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFormLocalStorage();
  });
  const Toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, Toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
