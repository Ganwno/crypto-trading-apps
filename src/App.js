import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import { ThemeProvider } from './components/context/Theme'

function App() {
  return (

    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Body />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
