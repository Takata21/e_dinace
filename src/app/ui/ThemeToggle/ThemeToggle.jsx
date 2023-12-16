"use client";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
export default function ThemeToggle() {
  const { theme, Toggle } = useContext(ThemeContext);
  return (
    <button
      className={styles.container}
      onClick={() => Toggle()}
      style={
        theme === "dark" ? { background: "#fff" } : { background: "#0f172a" }
      }
    >
      <MdSunny color="#f7a014" />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 0, background: "#fff" }
        }
      ></div>
      <IoMdMoon color="#f7a014" />
    </button>
  );
}
