import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { FiLogOut } from 'react-icons/fi'
import { useThemeContext } from "./context/Theme";
let showMenu = false;
export default function NavBar() {
    const { setCurrentTheme, themes, currentTheme } = useThemeContext();
    const menu = useRef();
    const humbger = useRef();
    function handleMenu(e) {
        if (!showMenu) {
            humbger.current.classList.add("open");
            showMenu = !showMenu
            menu.current.classList.add("nav-active");
            menu.current.classList.remove("nav-hidden");
        } else {
            showMenu = !showMenu
            humbger.current.classList.remove("open");
            menu.current.classList.add("nav-hidden");
            menu.current.classList.remove("nav-active");

        }
    }
    function changeTheme() {
        currentTheme.foreground === '#000000' ?
            setCurrentTheme(themes.dark) :
            setCurrentTheme(themes.light);
    }
    return (
        <>
            <nav className="main-nav" ref={menu} style={currentTheme}>
                <ul className="list-style-none">
                    <li>
                        <label className="switch">
                            <input
                                type="checkbox"
                                onChange={changeTheme}
                                defaultChecked={false}
                            />
                            <span className="slider round"></span>
                        </label>
                    </li>
                    <li >
                        <NavLink to="/">
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/buy-crypto">
                        <span>Buy Crypto</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/markets">
                            <span>Markets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/trades">
                            <span>Trades</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account">
                            <span>Account</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <span><FiLogOut /></span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="menu-btn" onClick={handleMenu}>
                <span className="menu-btn_burger" ref={humbger}></span>
            </div>
        </>
    )
}