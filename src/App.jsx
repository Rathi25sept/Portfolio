import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from './Footer';


function App() {

  return (
    <main className='mainContainer' id='MainContainer'>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App
