import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from '../src/components/hero';
import { About } from '../src/components/about';
import { Projects } from '../src/components/projects';
import { Contact } from '../src/components/contact';
import { Footer } from '../src/components/footer';

function App() {
  return (
    <Router>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;
