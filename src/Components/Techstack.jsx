import React from 'react';
import './techstack.css'
import { Col, Row, Container } from 'react-bootstrap'

const Techstack = () => {
  return (
    <div className='tech-con'>
      <Container fluid='true'>
        <div className='content'>
          <Col>
            <br></br>
            <Row>
              <h1 style={{ color: 'white' }} className='title'><strong>Techstack</strong></h1></Row>
            {/* <hr></hr> */}
            <Row><h3 style={{ color: 'white' }}>JavaScript | NodeJS  | Express | NPM</h3></Row>
            <br></br>
            <Row><h3 style={{ color: 'white' }}> HTML | CSS | React | React Native</h3></Row>
            <br></br>
            <Row><h3 style={{ color: 'white' }}>React Router | Reach Router  | Bootstrap</h3></Row>
            <br></br>
            <Row><h3 style={{ color: 'white' }} >PSQL | Axios | Knex | Github </h3></Row>
            <br></br>
            <Row><h3 style={{ color: 'white' }}>Mocha | Chai | Jest | Supertest</h3></Row>
            <br></br>
            <Row><h3 style={{ color: 'white' }}>Basic understanding of AWS</h3></Row>
            <br></br>
            <Row><h3 style={{ color: 'green' }}>Current Learning: Redux | Python</h3></Row>
          </Col>
        </div>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Techstack;