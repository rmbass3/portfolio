import './App.css';
import React from "react"
import Home from './components/Home';
import About from './components/About';
import Navibar from './components/Navibar';


function App() {

  return (
    <div className="App">
      <Navibar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
