import React from 'react';
import './education.css'
import cardiff from '../cardiffLogo.png'
import nc from '../ncLogo.png'
import { Container, Carousel } from 'react-bootstrap'

const Education = () => {

  return (
    <div>
      <h1 className='edu'><strong>Education</strong></h1>
      <br></br>
      <Container className='con-top'>
        <Carousel className='car' style={{ color: 'black', height: '30rem', width: 'auto' }}>
          <Carousel.Item>
            <img
              style={{ width: '400px', height: 'auto', marginTop: '80px' }}
              className="d-block w-10"
              src={cardiff}
              alt="Cardiff University 2016-19"
            />
            <Carousel.Caption>
              <h3 style={{ marginTop: '-330px' }}>Cardiff University 2016-19</h3>
              <ul style={{ listStyle: 'none' }}> <li>2:1 History BA hons.
</li>
                <br></br>
                <li>Developed skills, in presentation, communication and analysis.</li>
                <br></br>
                <li> Nurtured an ability to critically evaluate work.</li>
                <br></br>
                <li> Researched and produced a dissertation which focused on the impact of technological change in eighteenth-century Europe.</li>
                <br></br>
                <li> My studies saw me hone a natural problem-solving ability, alongside excellent oral and written communication skills.</li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '200px', height: 'auto', marginTop: '200px' }}
              // className="d-block w-50"
              src={nc}
              alt="Second slide"
            />
            <Carousel.Caption style={{ marginTop: '30rem' }}>
              <h3><strong>NorthCoders: October 2019-March 2020</strong></h3>
              <br></br>
              <ul style={{ listStyle: 'none' }}>
                <li>A developer pathway where I gained the skills required to be a full-stack developer.
           </li>
                <br></br>
                <li>Learned and utilised industry standards: pair programming and test driven development.</li>
                <br></br>
                <li>Worked in an agile environment.</li>
                <br></br>
                <li>Developed knowledge of the MVC framework, RESTful APIs, version control and relational databases.</li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div >

  )


};

export default Education;