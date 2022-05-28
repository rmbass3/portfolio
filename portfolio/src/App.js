import './App.css';
import React from "react"
import Home from './components/Home';
import About from './components/About';
import Navibar from './components/Navibar';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {

  return (
    <div className="App">
      <ParallaxProvider>
        <Navibar/>
        <Home/>
        <About/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
