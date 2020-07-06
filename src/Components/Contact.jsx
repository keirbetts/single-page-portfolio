import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosMail, IoIosCall, IoLogoLinkedin } from 'react-icons/io'
import './contact.css'

// rgb(237,236, 228)

const Contact = () => {
  return (
    <Container fluid='true' className='con-con'>
      <br></br>
      <h1 style={{ marginBottom: '30px', fontFamily: 'Courier New' }}><strong>Contact Me</strong></h1>
      <Row>
        <Col className='tag' sm={true}><h2 style={{ marginLeft: '300px', fontFamily: 'Courier New', color: 'white' }}><IoIosMail className='icon' /><strong>Email</strong></h2></Col>
        <Col className='con-tag' style={{ color: 'white' }}>keirjbetts@gmail.com</Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col className='tag' sm={true}><h2 style={{ marginLeft: '300px', color: 'lightgreen', fontFamily: 'Courier New' }}><IoIosCall className='icon' /><strong>Phone</strong></h2></Col>
        <Col className='con-tag2' style={{ color: 'lightgreen' }}>07393185075</Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col className='tag' sm={true}><h2 style={{ color: '#2867B2', marginLeft: '300px', fontFamily: 'Courier New' }}><IoLogoLinkedin className='icon' /><strong>Linkedin</strong></h2></Col>
        <Col className='con-tag3' style={{ color: '#2867B2' }}>@keirbetts</Col>
      </Row>
      <br></br>
    </Container>
  );
};

export default Contact;