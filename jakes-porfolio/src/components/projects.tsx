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
        <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={600}
                    delay={100}
                    distance="30px"
                  >
        <Row xs={1} md={2} className="g-4">
                <Col lg={4} sm={12}>
                <a
                        href={data !== undefined ? data[0]?.html_url : 'https://github.com/jakeroseboro'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
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
                  <Card
                  style={{ width: '36rem', color:'black', height:'24rem' ,backgroundColor:'#009fff'}}>
                    <Card.Body>
                      <Card.Title style={{fontSize:"20px"}}>{data !== undefined ? data[0]?.name : "no"}</Card.Title>
                      <Card.Subtitle style={{paddingBottom:"20px"}}> {data !== undefined ? data[0]?.language : "no"}</Card.Subtitle>
                      <Card.Text>
                        {data !== undefined ? data[0]?.description : "no"}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                  </a>
                </Col>
                <Col lg={4} sm={12}>
                <a
                        href={data !== undefined ? data[1]?.html_url : 'https://github.com/jakeroseboro'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
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
                <Card
                  style={{ width: '36rem', color:'black', height:'24rem' ,backgroundColor:'#009fff'}}>
                    <Card.Body>
                      <Card.Title style={{fontSize:"20px"}}>{data !== undefined ? data[1]?.name : "no"}</Card.Title>
                      <Card.Subtitle style={{paddingBottom:"20px"}}> {data !== undefined ? data[1]?.language : "no"}</Card.Subtitle>
                      <Card.Text>
                        {data !== undefined ? data[1]?.description : "no"}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                  </a>
                </Col>
                <Col lg={4} sm={12}>
                <a
                        href={data !== undefined ? data[2]?.html_url : 'https://github.com/jakeroseboro'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
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
                <Card
                  style={{ width: '36rem', color:'black', height:'24rem' ,backgroundColor:'#009fff'}}>
                    <Card.Body>
                      <Card.Title style={{fontSize:"20px"}}>{data !== undefined ? data[2]?.name : "no"}</Card.Title>
                      <Card.Subtitle style={{paddingBottom:"20px"}}> {data !== undefined ? data[2]?.language : "no"}</Card.Subtitle>
                      <Card.Text>
                        {data !== undefined ? data[2]?.description : "no"}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                  </a>
                </Col>
            </Row>   
            </Fade>
            <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={600}
                    delay={100}
                    distance="30px"
                  > 
            <Row xs={1} md={2} className="g-4">
                <Col lg={4} sm={12}>
                <a
                        href={data !== undefined ? data[3]?.html_url : 'https://github.com/jakeroseboro'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
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
                <Card
                  style={{ width: '36rem', color:'black', height:'24rem' ,backgroundColor:'#009fff'}}>
                    <Card.Body>
                      <Card.Title style={{fontSize:"20px"}}>{data !== undefined ? data[3]?.name : "no"}</Card.Title>
                      <Card.Subtitle style={{paddingBottom:"20px"}}> {data !== undefined ? data[3]?.language : "no"}</Card.Subtitle>
                      <Card.Text>
                        {data !== undefined ? data[3]?.description : "no"}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                  </a>
                </Col>
                <Col lg={4} sm={12}>
                <a
                        href={data !== undefined ? data[4]?.html_url : 'https://github.com/jakeroseboro'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
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
                <Card
                  style={{ width: '36rem', color:'black', height:'24rem' ,backgroundColor:'#009fff'}}>
                    <Card.Body>
                      <Card.Title style={{fontSize:"20px"}}>{data !== undefined ? data[4]?.name : "no"}</Card.Title>
                      <Card.Subtitle style={{paddingBottom:"20px"}}> {data !== undefined ? data[4]?.language : "no"}</Card.Subtitle>
                      <Card.Text>
                        {data !== undefined ? data[4]?.description : "no"}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                  </a>
                </Col>
                <Col lg={4} sm={12}>
                <a
                        href={data !== undefined ? data[5]?.html_url : 'https://github.com/jakeroseboro'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
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
                <Card
                  style={{ width: '36rem', color:'black', height:'24rem' ,backgroundColor:'#009fff'}}>
                    <Card.Body>
                      <Card.Title style={{fontSize:"20px"}}>{data !== undefined ? data[5]?.name : "no"}</Card.Title>
                      <Card.Subtitle style={{paddingBottom:"20px"}}> {data !== undefined ? data[5]?.language : "no"}</Card.Subtitle>
                      <Card.Text>
                        {data !== undefined ? data[5]?.description : "no"}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Tilt>
                  </a>
                </Col>
            </Row> 
            </Fade>
        </div>
      </Container>                  
    </section>
  );
};


