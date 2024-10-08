"use client";

import Image from "next/image";
import styles from "./theme_toggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/theme-context";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}  style={
      theme === "dark"
        ? { backgroundColor: "white" }
        : { backgroundColor: "#0f172a" }
    }>
      <Image src="/moon.png" alt="" width={14} height={14}></Image>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14}></Image>
    </div>
  );
};
export default ThemeToggle;
