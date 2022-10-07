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
import CoinBuycard from './CoinBuycard';
import { useEffect, useState } from 'react';
export default function Body() {
    const { loggedIn } = useLoggedInContext();
    const [allCoins, setallCoins] = useState([])
    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets")
            .then(r => r.json())
            .then(result => {
                setallCoins(result.data);
                localStorage.setItem("coins", JSON.stringify(result.data));
            });
    }, [])
    return (

        <div className='content-body' id="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/buy-crypto' element={loggedIn ? <BuyCrypto allCoins={allCoins} /> : <NotLoggedIn />}>
                    <Route path='/buy-crypto/:coin' element={<CoinBuycard allCoins={allCoins} />} />
                </Route>
                <Route path='/markets' element={loggedIn ? <Markets allCoins={allCoins} /> : <NotLoggedIn />}>
                    <Route path='/markets/:coinAndPrice'  />
                </Route>
                <Route path='/trades' element={loggedIn ? <Trades /> : <NotLoggedIn />} />
                <Route path='/account' element={loggedIn ? <Account allCoins={allCoins} /> : <NotLoggedIn />} />

                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}