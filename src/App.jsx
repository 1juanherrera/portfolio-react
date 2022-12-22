import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/container/Home/Home';
import About from './components/container/About/About'
import Skills from './components/container/Skills/Skills'
import Portfolio from './components/container/Portfolio/Portfolio';
import Contact from './components/container/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}


export default App
