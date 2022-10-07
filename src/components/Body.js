import BuyCrypto from './BuyCrypto';
import Markets from './Markets';
import Trades from './Trades';
import Account from './Account';
import Login from "./Login";
import Signup from "./Signup";
import Home from './Home';
import NotLoggedIn from './NotLoggedIn';
import { Routes, Route } from 'react-router-dom';
import { useLoggedInContext } from './context/LoggedInContext';
export default function Body() {
    const { loggedIn } = useLoggedInContext();
    return (

        <div className='content-body' id="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/buy-crypto' element={loggedIn ? <BuyCrypto /> : <NotLoggedIn />} />
                <Route path='/markets' element={loggedIn ? <Markets /> : <NotLoggedIn />} />
                <Route path='/trades' element={loggedIn ? <Trades /> : <NotLoggedIn />} />
                <Route path='/account' element={loggedIn ? <Account /> : <NotLoggedIn />} />

                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}