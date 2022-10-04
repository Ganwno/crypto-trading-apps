import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="main-nav active-nav">
                <ul class="list-style-none">
                    <li >
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Buy Crypto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Markets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Trade
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Account
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}