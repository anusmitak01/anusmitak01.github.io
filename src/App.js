// import logo from './logo.svg';
import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About2 from './components/about2/About2'
// import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About2 />
      <Skills />
      {/* <Services /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
