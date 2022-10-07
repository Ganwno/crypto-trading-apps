import { useThemeContext } from "./context/Theme";
import { NavLink } from "react-router-dom";
export default function Login() {
    const { currentTheme } = useThemeContext();
    return (
        <div className="login" style={currentTheme}>
            <form >
                <input type="email"
                placeholder="johndoe@gmail.com" /><br />
                <input type="password" 
                placeholder="password" />
                <button onClick={(e) => {
                    e.preventDefault();
                }}
                style={currentTheme}>
                    Login</button>
            </form>
            <p>Not A Member?</p><NavLink to='/signup'>Register</NavLink>
        </div>
    )
}