import { useThemeContext } from "./context/Theme";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoggedInContext } from "./context/LoggedInContext";
import Parse from "parse";
export default function Login() {
    const username = useRef();
    const password = useRef();
    const { setLoggedIn } = useLoggedInContext();
    const { currentTheme } = useThemeContext();
    const navigate = useNavigate();

    const app_id = process.env.REACT_APP_PARSE_APP_ID;
    const js_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
    const host_url = process.env.REACT_APP_PARSE_HOST_URL;

    Parse.initialize(
        app_id, // This is your Application ID
        js_key // This is your Javascript key
    );
    Parse.serverURL = host_url;
    


    return (
        <div className="login" style={currentTheme}>
            <form >
                <input type="email"
                    placeholder="username" ref={username} /><br />
                <input type="password"
                    placeholder="password" ref={password} />
                <button onClick={(e) => {
                    e.preventDefault();
                    (async () => {
                        try {
                            // Pass the username and password to logIn function
                            let user = await Parse.User.logIn(username.current.value, password.current.value);
                            localStorage.setItem("user", JSON.stringify(user.attributes))
                            setLoggedIn(true);
                            navigate("/account")
                        } catch (error) {
                            alert(error.message);
                        }
                    })();
                }}
                    style={currentTheme}>
                    Login</button>
            </form>
            <p>Not A Member?</p><NavLink to='/signup'>Register</NavLink>
        </div >
    )
}