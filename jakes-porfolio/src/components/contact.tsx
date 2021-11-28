import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

export const Skills=()=>{

  return (
    <section id="contact">
      <Container>
      <Fade bottom duration={600} delay={100} distance="0px">
      <h2 className="section-title">Skills</h2>
      </Fade>
        <Fade bottom duration={600} delay={100} distance="30px">
          <div className="contact-wrapper">
          <Table responsive>
  <thead>
    <tr>
      <th style={{fontSize:"20px"}}>Languages</th>
      <th style={{fontSize:"20px"}}>Frameworks</th>
      <th style={{fontSize:"20px"}}>Databases</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{fontSize:"16px"}}>TypeScript, JavaScript, C#,<br/> HTML, SCSS, CSS, Java, Python</td>
      <td style={{fontSize:"16px"}}>Angular, React, ASP.NET</td>
      <td style={{fontSize:"16px"}}>MongoDB, MySQL, PostgreSQL</td>
    </tr>
  </tbody>
</Table>
          </div>
        </Fade>
      </Container>
    </section>
  );
};