import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

export const Contact=()=>{

  return (
    <section id="contact">
      <Container>
      <Fade bottom duration={600} delay={100} distance="0px">
      <h2 className="section-title">Contact</h2>
      </Fade>
        <Fade bottom duration={600} delay={100} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
               'Would you like to work with me? Awesome!
            </p>
            <a
              className="cta-btn cta-btn--resume"
              href="/contact"
            >
              Let's Talk
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};