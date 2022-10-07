import { useThemeContext } from "./context/Theme";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { RANDOMKEY, RANDOMKEYID } from "./context/ApI";
import { useLoggedInContext } from "./context/LoggedInContext";
export default function Signup() {
    const { currentTheme } = useThemeContext();
    const { setLoggedIn } = useLoggedInContext();
    const navigate = useNavigate();
    const fName = useRef();
    const lName = useRef();
    const userName = useRef();
    const email = useRef();
    const password1 = useRef();
    const password2 = useRef();
    const specialXs = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const hasNumber = /\d/;
    function post() {
        fetch("https://parseapi.back4app.com/users", {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": RANDOMKEYID,
                "X-Parse-REST-API-Key": RANDOMKEY,
                "X-Parse-Revocable-Session": 1,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "authData": {},
                "username": userName.current.value,
                "password": password1.current.value,
                "email": email.current.value
            })
        }).then(r => r.json())
            .then(result => {
                console.log(result);
                // setLoggedIn(() => true)
                // navigate("/account")
                localStorage.setItem("user", JSON.stringify({
                    "authData": {},
                    "username": userName.current.value,
                    "password": password1.current.value,
                    "email": email.current.value,
                    "objectId": result.objectId
                }))
            })
            .catch(err => {
                console.log(typeof err)
                // err.code === 203 ? (alert("Acount Already Exists For " + email.current.value)) : null;
                console.log(err)
            });
    }
    return (
        <div className="signup" style={currentTheme}>
            <form>
                <div>
                    <label>First Name</label><input type="text" placeholder="Jonh" ref={fName} />
                    <label>Last Name</label><input type="text" placeholder="Doe" ref={lName} />
                </div>
                <div>
                    <label>User Name</label><input type="text" placeholder="johnDoe14fsx" ref={userName} />
                    <label>Email</label><input type="email" placeholder="Doe" ref={email} /><br />
                    <label>Password</label>
                    <label><small>8 Or More Characters, Including Numbers And Special Characters</small></label>
                    <input type="password" placeholder="Password" ref={password1} />
                    <label>Confirm Password</label><input type="password" placeholder="Password" ref={password2} />
                </div>
                <button
                    style={currentTheme}
                    className="signbutton"
                    onClick={(e) => {
                        e.preventDefault();
                        if (
                            // fName.current.value !== "" &&
                            // lName.current.value !== "" &&
                            // userName.current.value !== "" &&
                            // password1.current.value === password2.current.value &&
                            // password1.current.value.length > 7 &&
                            // specialXs.test(password1.current.value) &&
                            hasNumber.test(password1.current.value)) {
                            post()
                            console.log("Signed")
                            // setLoggedIn(() => true)
                            // navigate("/account")
                        }
                        else {
                            alert("Wrong input... Try again \n :)")
                        }
                    }}
                >Sign up</button>
            </form>
            <p>Already Have An Account?</p><NavLink to='/login'>
                Login</NavLink>
        </div >
    )
}