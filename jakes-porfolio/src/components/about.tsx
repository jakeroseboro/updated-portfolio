import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import MarketingPic1 from '../assets/marketing.png';

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

    const getWidth = () =>{
      if(isDesktop){
        return 500
      }
      else{
        return 300
      }
    }
  
    return (
      <section id="about">
        <Container>
        <Fade bottom duration={600} delay={100} distance="0px">
        <h2 className="section-title">Web Marketing You Can Trust</h2>
        </Fade>
          <Row className="about-wrapper">
            <Col md={6} sm={12}>
              <Fade bottom duration={600} delay={100} distance="30px">
                <div className="about-wrapper__image">
                  <img src={MarketingPic1} width={getWidth()} alt="about me" className="rounded shadow-lg"></img>
                </div>
              </Fade>
            </Col>
            <Col md={6} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={600} delay={100} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                      Stellata is here to help your small business grow. We specialize in industries ranging from legal services to mom &amp; pop shops. No matter what your small business offers, Stellata is the web marketing solution for you.  
                      <br/><br/>
                      Our Complete Marketing Program ensures you have everything you need to watch your business grow. We manage every aspect of your online presence to make sure that you never miss an opportunity to reach a client.
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };