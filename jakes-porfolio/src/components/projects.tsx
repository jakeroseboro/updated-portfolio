import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { gitHubCall, RepoData } from '../api';
import Card from 'react-bootstrap/Card'
import { UseQueryResult } from 'react-query';

export const Projects =()=> {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const repos = [
    "weather-app",
    "WGUPS",
    "Spotify-Clone",
    "Inventory-Manager",
    "Appointment-Scheduler",
    "updated-portfolio"
  ]
  
  const getData = ()=>{
    const resp  = RepoData(repos).data;
    return resp
  }

  const data = getData()

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
                    {data != undefined ? data[0]?.name : "no"}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {data != undefined ? data[0]?.description : "no"}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      {data != undefined ? data[0]?.language : "no"}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col lg={4} sm={12}>
                  <Card
                  bg="danger" 
                  text="white"
                  style={{ width: '36rem', color:'black' }}>
                    <Card.Header>
                    {data != undefined ? data[1]?.name : "no"}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {data != undefined ? data[1]?.description : "no"}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      {data != undefined ? data[1]?.language : "no"}
                    </Card.Footer>
                  </Card>
                </Col>
            </Row>    
        </div>
      </Container>                  
    </section>
  );
};


