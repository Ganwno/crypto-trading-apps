import { NavLink } from "react-router-dom";
import { useRef } from "react";
import {SiBitcoin} from 'react-icons/si'
let showMenu = false;
export default function NavBar() {
    const menu = useRef();
    const humbger = useRef();
    function handleMenu(e) {
        if (!showMenu) {
            humbger.current.classList.add("open");
            showMenu=!showMenu
            menu.current.classList.add("nav-active");
            menu.current.classList.remove("nav-hidden");
        } else {
            showMenu=!showMenu
            humbger.current.classList.remove("open");
            menu.current.classList.add("nav-hidden");
            menu.current.classList.remove("nav-active");

        }
    }
    return (
        <>
        <SiBitcoin color="red" />
            <nav className="main-nav" ref={menu}>
                <ul className="list-style-none">
                    <li >
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/buy-crypto">
                            Buy Crypto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/markets">
                            Markets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/trades">
                            Trades
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account">
                            Account
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