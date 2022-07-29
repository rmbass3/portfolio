import React from "react"
import Navibar from './components/Navibar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {

  return (
    <div className="App">
      <ParallaxProvider>
        <Navibar/>
        <Home/>
        <About/>
        <Skills/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
