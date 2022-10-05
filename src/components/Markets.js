import { useThemeContext } from "./context/Theme";

export default function Markets() {
    const { currentTheme } = useThemeContext();
    return (
        <div style={currentTheme}>
            <h1>Today’s Cryptocurrency prices</h1>
            <p>The global crypto market cap is <strong>$1.86T</strong></p>
        </div>
    )
}