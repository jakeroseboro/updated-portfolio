import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePic from '../assets/profPic.jpg';
import PDF from '../assets/Jacob-Roseboros-Resume.pdf';

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
                  <img src={ProfilePic} width='300' alt="about me" className="rounded shadow-lg"></img>
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
                    In my free time, when I am not with 
                      my wife and daughter, I continue practicing TypeScript, JavaScript, and frameworks like React and Angular. I am also learning ML in python. 
                  </p>
                  <p className="about-wrapper__info-text">
                      I am currently working as a full stack software developer at&nbsp;  
                     <a target="_blank"
                        rel="noopener noreferrer"
                        style={{color:'black', textDecoration:'underline'}}
                        href ={"https://www.oxefit.com/"}>
                           OxeFit Inc.&nbsp; 
                      </a>
                     I am responsible for managing cloud services hosted in Azure. I create and maintain reliable REST APIs with ASP.NET and MongoDB, and I also develop captivating UIs that consume the APIs with frameworks like Angular and React. I write unit and integration tests for all of these services using frameworks like Angular testing library, Postman, and Xunit. 
                  </p>
                  
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href ={PDF}>
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