import React from 'react';
import { Container } from 'react-bootstrap';
import {Github, Linkedin} from 'react-bootstrap-icons';

export const Footer=()=> {

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <div className="social-links text-center">
        <a href="https://github.com/jakeroseboro"><Github color="white" size={35}/></a>
        <a href="https://www.linkedin.com/in/jacobroseboro/"><Linkedin color="white" size={35}/></a>
        </div>
        <hr />
        <p className="footer__text">© {new Date().getFullYear()} - Jacob Roseboro</p>
      </Container>
    </footer>
  );
};