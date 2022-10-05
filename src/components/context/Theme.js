import { createContext, useContext, useState } from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "rgb(224, 224, 255)"
    },
    dark: {
        color: "rgb(236, 251, 255)",
        background: "rgb(23, 0, 59)"
    }
}
export const ThemeContext = createContext();
export function useThemeContext() {
    return useContext(ThemeContext)
};
function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
    return (
        <ThemeContext.Provider value={{ setCurrentTheme, themes, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider }