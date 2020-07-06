import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import './home.css'
import ParticlesBg from 'particles-bg'
// import Scroll from 'react-scroll'
// const ScrollLink = Scroll.ScrollLink


const Home = () => {



  return (
    <div className='app'>
      <ParticlesBg type="lines" color='white' bg={true} />
      <main>
        <br></br>
        <br></br>
        <Container fluid='true'>
          <Col>
            <Row lg={12} className='justify-content-center' style={{ marginTop: '50px' }}>
              <h1>Full Stack Developer</h1>
            </Row>
            <Row className='justify-content-center'>
              <h3 lg={12}>React | React Native | JavaScript |  NodeJS | Express | Python | HTML/CSS</h3>
            </Row>
          </Col>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Row className='justify-content-center' style={{ marginTop: '-100px', textAlign: 'center' }}>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px' }} variant="warning" href='/projects'>Projects</Button>
              {/* <ScrollLink to='/projects' spy={true}
                smooth={true}
                duration={500}>Projects</ScrollLink> */}
            </Col>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px', color: 'white' }} variant="outline-light" href='https://www.linkedin.com/in/keir-betts-201b55189/' target='_blank'>Linkedin</Button>
            </Col>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px', color: 'white' }} variant="outline-light" href='https://github.com/keirbetts' target='_blank'>Github</Button>
            </Col>
          </Row>
        </Container>
        <br></br>
      </main>
    </div>
  );
};

export default Home;