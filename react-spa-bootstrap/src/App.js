import React from 'react';
import { Navbar, Container, Nav, Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">PACE IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/1200x400?text=Welcome+to+PACEIT" alt="Slide 1" />
          <Carousel.Caption>
            <h3>Empowering Tech</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/1200x400?text=Innovate+Faster" alt="Slide 2" />
          <Carousel.Caption>
            <h3>Innovation at Speed</h3>
            <p>Building smarter solutions for tomorrow.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        <h2 className="mb-4">Our Services</h2>
        <Row>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col key={item} md={4} className="mb-4">
              <div className="card">
                <img src={`https://via.placeholder.com/300x200?text=Service+${item}`} className="card-img-top" alt={`Service ${item}`} />
                <div className="card-body">
                  <h5 className="card-title">Service {item}</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center p-4">
        &copy; 2025 PACE IT. All rights reserved.
      </footer>
    </div>
  );
}

export default App;