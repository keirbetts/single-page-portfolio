import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import './projects.css'

const Projects = () => {
  return (
    <div className='proj-div'>
      <Container fluid='true' style={{ marginLeft: '2rem', marginTop: '-16rem' }}>
        <Row>
          <Col>
            <h1><strong>Projects</strong></h1>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col lg={3} sm={1}><Card border="clear" bg='dark' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial', marginBottom: '30px' }}>
            <Card.Img variant='top' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
            <Card.Body>
              <Card.Title>NC News Front-End</Card.Title>
              <Card.Text>
                Built over five days designed to showcase functionality
    </Card.Text>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/keir-betts-nc-news-fe" target='_blank'>Github</Card.Link>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://keir-betts-nc-news.netlify.app/" target='_blank'>Hosted</Card.Link>
            </Card.Body>
          </Card></Col>
          <br></br>
          <br></br>
          <br></br>
          <Col lg={3} sm={1}> <Card border="clear" bg='dark' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial', marginBottom: '30px' }} >
            <Card.Img variant='top' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
            <Card.Body>
              <Card.Title>React Videos</Card.Title>
              <Card.Text>
                A React project built to search and watch Youtube with ease
    </Card.Text>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/react-vidoes" target='_blank'>Github</Card.Link>
            </Card.Body>
          </Card ></Col>
          <br></br>
          <Col lg={3} sm={1}>  <Card border="clear" bg='dark' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial', marginBottom: '30px' }}>
            <Card.Img variant='top' src='https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' />
            <Card.Body>
              <Card.Title>Redux Project One</Card.Title>
              <Card.Text>
                My First Redux Project
    </Card.Text>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/Redux-first-steps" target='_blank'>Github</Card.Link>
            </Card.Body>
          </Card>  </Col>
          <br></br>
          <Col lg={3} sm={1}>     <Card border="clear" bg='dark' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial', marginBottom: '30px' }}>
            <Card.Img variant='top' />
            <Card.Body>
              <Card.Title>NC News Back-End</Card.Title>
              <Card.Text>
                An Express Back-end Built to serve the React Front-End
    </Card.Text>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/keir-betts-nc-news-be" target='_blank'>Github</Card.Link>
            </Card.Body>
          </Card></Col>
          <br></br>
        </Row>
        <Row>
          <Col lg={3} sm={1}>     <Card border="clear" bg='dark' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial', marginBottom: '30px' }}>
            <Card.Img variant='top' src='https://cdn.clipart.email/bae8bcf9673ca907cdd470bfd973940d_python-logo-clipart-transparent-background-png-download-full-_982-982.png' />
            <Card.Body>
              <Card.Title>Python Space Invaders</Card.Title>
              <Card.Text>
                Space Invadaders with a topical twist built using Python
    </Card.Text>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/python-coronavirus-space-invaders" target='_blank'>Github</Card.Link>
            </Card.Body>
          </Card></Col>
          <br></br>
          <Col lg={3} sm={1}>   <Card border="clear" bg='dark' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial', marginBottom: '30px' }}>
            <Card.Img variant='top' />
            <Card.Body>
              <Card.Title>Moments Team Project</Card.Title>
              <Card.Text>
                A Fully Functional App Built as a team of 6 over 8 days
    </Card.Text>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/smegbot1/Project-Moments" target='_blank'>Github</Card.Link>
            </Card.Body>
          </Card></Col>
          <br></br>
          <Col lg={3} sm={1}>   <Card border="clear" bg='dark' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial', marginBottom: '30px' }}>
            <Card.Img variant='top' src='https://cdn.clipart.email/bae8bcf9673ca907cdd470bfd973940d_python-logo-clipart-transparent-background-png-download-full-_982-982.png' />
            <Card.Body>
              <Card.Title>Automated Web Search</Card.Title>
              <Card.Text>
                Runs an Automated Google Seach using Python
    </Card.Text>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/python-web-search" target='_blank'>Github</Card.Link>
            </Card.Body>
          </Card></Col>
          <Col lg={3} sm={1}>    <Card border="clear" bg='dark' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
            <Card.Img variant='top' src='https://miro.medium.com/max/442/1*TjRR2msP6G116cSOr_96VA.png' />
            <Card.Body>
              <Card.Title>Full Stack RPG</Card.Title>
              <Card.Text>
                Simple RPG built with MongoDB, Express, Vue, Node
    </Card.Text>
              <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/MEVN-project-one" target='_blank'>Github</Card.Link>
            </Card.Body>
          </Card></Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </div >
  );
};

export default Projects;