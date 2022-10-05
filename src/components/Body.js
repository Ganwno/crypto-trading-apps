import BuyCrypto from './BuyCrypto';
import Markets from './Markets';
import Trades from './Trades';
import Account from './Account';
import Login from "./Login";
import Signup from "./Signup";
import Home from './Home'
import { Routes, Route } from 'react-router-dom';
export default function Body() {
    
    return (
        <div className='content-body' id="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/buy-crypto' element={<BuyCrypto />} />
                <Route path='/markets' element={<Markets />} />
                <Route path='/trades' element={<Trades />} />
                <Route path='/account' element={<Account />} />
                <Route path='/account/login' element={<Login />} />
                <Route path='/account/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}