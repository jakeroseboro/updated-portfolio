import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';

export const About = () =>{

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
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
      <section id="about">
        <Container>
        <Fade bottom duration={600} delay={100} distance="0px">
        <h2 className="section-title">About me</h2>
        </Fade>
          <Row className="about-wrapper">
            <Col md={6} sm={12}>
              <Fade bottom duration={600} delay={100} distance="30px">
                <div className="about-wrapper__image">
                  <img src={undefined} width='300' alt="about me" className="rounded shadow-lg"></img>
                </div>
              </Fade>
            </Col>
            <Col md={6} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={600} delay={100} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    
                      I am a software developer based out of Pensacola, Florida. I am obtaining my BS in Computer Science through Western 
                      Governors University. I expect to graduate December 2021.
                  </p>
                  <p className="about-wrapper__info-text">
          
                      I have completed several projects with the school, utilizing Java, C++, and MySQL. In my free time, when I am not with 
                      my wife and daughter, I am learning JavaScript (used to build this site), and Python.
                  </p>
                  <p className="about-wrapper__info-text">
                    
                      I am currently working as a web manager at Footbridge Media LLC. I am responsible for performing site 
                      changes and updates utilizing HTML, CSS, JavaScript, PHP, and Bootstrap. I also frequently use MySQL and cPanel.
                  </p>
                  
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href ={undefined}>
                        Resume
                      </a>
                    </span>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };