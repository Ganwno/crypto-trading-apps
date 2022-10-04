import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BuyCrypto from './components/BuyCrypto';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/buy-crypto' element={<BuyCrypto/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
