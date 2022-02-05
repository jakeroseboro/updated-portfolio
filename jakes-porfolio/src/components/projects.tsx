import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Website from '../assets/portfolioSite.png';
import Seo from '../assets/seo.png';
import MarketAnalysis from '../assets/marketanalysis.png'

export const Projects =()=> {

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
        <Fade bottom duration={600} delay={100} distance="0px">
          <h2 className="section-title-black">Services We Offer</h2>
          <br></br>
        </Fade>
        <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={600}
                    delay={100}
                    distance="30px"
                  >
        <Row xs={1} md={2} className="g-4">
                <Col lg={4} sm={12}>
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                  <Card>
                    <Card.Img variant='top' src={Website} height={300}/>
                    <Card.Body style={{height:"400px"}}>
                      <Card.Text>
                        <h2>Custom Web Development</h2>
                        <p>We will build you a site tailored specifically for your business.</p>
                        <p>We don't just build portfolio sites, we can build you a fully functional web application that can drive business growth</p>
                        <p>Our web development specialties include:</p>
                        <ul>
                          <li>Complete Shopify integration.</li>
                          <li>Custom APIs to handle inventory, customer data, logins, and more.</li>
                          <li>Blazing fast sites that will out-perform your competitors.</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                </Col>
                <Col lg={4} sm={12}>
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                  <Card>
                    <Card.Img variant='top' src={Seo} height={300}/>
                    <Card.Body style={{height:"400px"}}>
                    <Card.Text>
                        <h2>Search Engine Optimization</h2>
                        <p>It's important to get your site in front of as many clients as possible.</p>
                        <p>No matter what services you offer or how good at them you are, if clients can't find your website, they are not going to give you their business.</p>
                        <p>Most clients searching for a service are unlikely to go past the first page of results for their search. That's exactly where Stellata will get your site ranking.</p>
                        <p>Our adaptive SEO methodologies are sure to get you ranking on the first page in 6 months or less!</p>
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                </Col>
                <Col lg={4} sm={12}>
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                  <Card>
                    <Card.Img variant='top' src={MarketAnalysis} height={300}/>
                    <Card.Body style={{height:"400px"}}>
                    <Card.Text>
                        <h2>Complete Marketing Support</h2>
                        <p>Not good at advertising your service? No problem. Stellata offers custom marketing catered directly to your business needs. We offer complete market analysis to learn what works best for the industry you're in. </p>
                        <p>You will work closely with your assigned marketer and receive frequent check ins on the health of your site.</p>
                        <p>Site metrics include:</p>
                        <ul>
                          <li>Monthly search appearances</li>
                          <li>Monthly contact form submissions</li>
                          <li>Monthly site clicks</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                </Col>
            </Row>   
            </Fade>
        </div>
      </Container>                  
    </section>
  );
};


