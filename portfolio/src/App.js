import { Button, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About';
import Home from './Components/Home/Home';

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="App" style={{ backgroundColor: colorMode === 'light' ? '#99A799' : "#121212" }}>
      <Button size='lg' id='themeButton' onClick={toggleColorMode} > {colorMode === 'light' ? <FaMoon fontSize='20px' /> : <FaSun fontSize='20px' />}</Button>
      <Navbar colorMode={colorMode} />
      <Home colorMode={colorMode} />
      <About colorMode={colorMode} />
    </div>
  );
}

export default App;
