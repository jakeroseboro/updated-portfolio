import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { RepoData } from '../api';
import Card from 'react-bootstrap/Card'

export const Projects =()=> {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const repo1 = RepoData("weather-app");
  const repo2 = RepoData("WGUPS");
  const repo3 = RepoData("Spotify-Clone");

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
          <h2 className="section-title">Projects</h2>
          <br></br>
        </Fade>
             <Row xs={1} md={2} className="g-4">
                <Col lg={4} sm={12}>
                  <Card
                  bg="danger" 
                  text="white"
                  style={{ width: '36rem', color:'black' }}>
                    <Card.Header>
                    {repo1?.data?.name}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {repo1?.data?.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      {repo1?.data?.language}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col lg={4} sm={12}>
                  <Card
                  bg="danger" 
                  text="white"
                  style={{ width: '36rem', color:'black' }}>
                    <Card.Header>
                    {repo2?.data?.name}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {repo2?.data?.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      {repo2?.data?.language}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col lg={4} sm={12}>
                  <Card
                  bg="danger" 
                  text="white"
                  style={{ width: '36rem', color:'black' }}>
                    <Card.Header>
                    {repo3?.data?.name}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {repo3?.data?.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      {repo3?.data?.language}
                    </Card.Footer>
                  </Card>
                </Col>
            </Row>
            
        </div>
      </Container>                  
    </section>
  );
};


