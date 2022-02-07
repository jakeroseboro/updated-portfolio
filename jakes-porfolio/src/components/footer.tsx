import React from 'react';
import { Container } from 'react-bootstrap';
import {Github, Linkedin} from 'react-bootstrap-icons';

export const Footer=()=> {

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <hr style={{width: "100%"}} />
        <p className="footer__text d-flex justify-content-center">© {new Date().getFullYear()} - Stellata</p>
      </Container>
    </footer>
  );
};