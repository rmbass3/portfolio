import './App.css';
import React from "react"
import Home from './components/Home';
import About from './components/About';
import {SectionsContainer, Section} from 'react-fullpage'

function App({options}) {

  return (
    <SectionsContainer {...options} className="App">
      <Section className="home-section"><Home/></Section>
      <Section className="about-section"><About/></Section>
    </SectionsContainer>
  );
}

export default App;
