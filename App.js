import React from 'react';
import { Navbar, Container, Nav, Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap SPA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/1200x400.png?text=Slide+1" alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/1200x400.png?text=Slide+2" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/1200x400.png?text=Slide+3" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        <h2 className="mb-4">Gallery</h2>
        <Row>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Col key={num} md={4} className="mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/300x200.png?text=Item" className="card-img-top" alt="Gallery Item" />
                <div className="card-body">
                  <h5 className="card-title">Item {num}</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center p-4">
        &copy; 2025 React Bootstrap SPA. All rights reserved.
      </footer>
    </div>
  );
}

export default App;