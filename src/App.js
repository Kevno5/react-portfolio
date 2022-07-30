import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './style.css';




function App() {
  return (
    <div>
      <Header/>
      <main className='page-wrapper'>
        <About/>
        <Projects/>
        <Contact/>
      </main>
      
    </div>
  );
}

export default App;
