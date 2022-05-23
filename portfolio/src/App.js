import './App.css';
import React from "react"
import Home from './components/Home';
import About from './components/About';


function App({options}) {

  return (
    <div className="App">
      <Home/>
      <About/>
    </div>
  );
}

export default App;
