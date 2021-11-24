import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from '../src/components/hero';
import { About } from '../src/components/about';
import { Projects } from '../src/components/projects';
import { Skills } from '../src/components/contact';
import { Footer } from '../src/components/footer';

function App() {
  return (
    <Router>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </Router>
  );
}

export default App;
