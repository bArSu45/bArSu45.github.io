import { Button, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Stat from './Components/Stat/Stat';
import GitHub from './Components/Github/Github';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="App" style={{ backgroundColor: colorMode === 'light' ? '#EBC7E8' : "#121212" }}>
      <Button size='lg' id='themeButton' onClick={toggleColorMode} > {colorMode === 'light' ? <FaMoon fontSize='20px' /> : <FaSun fontSize='20px' />}</Button>
      <Navbar colorMode={colorMode} />
      <Home colorMode={colorMode} />
      <About colorMode={colorMode} />
      <Skills colorMode={colorMode} />
      <Project colorMode={colorMode} />
      <Stat colorMode={colorMode} />
      <GitHub colorMode={colorMode} />
      <Contact colorMode={colorMode} />
      <Footer colorMode={colorMode} />
    </div>
  );
}

export default App;
