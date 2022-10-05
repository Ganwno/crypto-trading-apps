import { useThemeContext } from "./context/Theme"

export default function Trades() {
    const { currentTheme } = useThemeContext();
    return (
        <div style={currentTheme}>
            <h1>Prices of Cryptocurrencies</h1>
        </div>
    )
}