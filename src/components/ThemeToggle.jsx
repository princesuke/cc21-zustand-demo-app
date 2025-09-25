import React from "react";
import { useThemeStore } from "../stores/themeStore";

export default function ThemeToggle() {
  //สร้างตัวแปร รับค่า themes
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
