import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';


export const Home =() => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef()
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={600} delay={100} distance="30px">
          <h1 className="hero-title">
            Hi, my name is
            <span className="text-color-main"> Jacob Roseboro</span>
            <br />
            I'm a developer from Pensacola, FL.
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={600} delay={100} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                Learn More
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};