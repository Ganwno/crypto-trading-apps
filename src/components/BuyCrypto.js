import { useThemeContext } from "./context/Theme";

export default function BuyCrypto(){
    const { currentTheme } = useThemeContext();
    return(
        <div style={currentTheme}>
        <h1>Buy Crpto</h1>
        </div>
    )
}