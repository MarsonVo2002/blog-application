"use client"

import { createContext, useEffect } from "react";
import { useState } from "react";
export const ThemeContext = createContext();
const getFromLocalStore = () => {
    if(typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light";
}
export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStore();
    });
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme]);
    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
};