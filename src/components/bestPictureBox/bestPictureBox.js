import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import './bestPictureBox.css';

function BestPictureBox() {
  const [key, setKey] = useState('2d');

  const images2D = [
    { id: 1, src: 'https://picsum.photos/300', alt: 'picture1' },
    { id: 2, src: 'https://picsum.photos/300', alt: 'picture2' },
    { id: 3, src: 'https://picsum.photos/300', alt: 'picture3' },
    { id: 4, src: 'https://picsum.photos/300', alt: 'picture4' },
    { id: 5, src: 'https://picsum.photos/300', alt: 'picture5' },
    { id: 6, src: 'https://picsum.photos/300', alt: 'picture6' },
  ];

  const imagesRealistic = [
    { id: 7, src: 'https://picsum.photos/300', alt: 'picture7' },
    { id: 8, src: 'https://picsum.photos/300', alt: 'picture8' },
    { id: 9, src: 'https://picsum.photos/300', alt: 'picture9' },
    { id: 10, src: 'https://picsum.photos/300', alt: 'picture10' },
    { id: 11, src: 'https://picsum.photos/300', alt: 'picture11' },
    { id: 12, src: 'https://picsum.photos/300', alt: 'picture12' },
  ];

  return (
    <Container>
      <Row className="header">
        <Col>
          <h1 style={{fontSize: '36px', fontWeight: 'bold'}}>
          <span style={{color: 'red'}}>W</span>
          <span style={{color: 'orange'}}>e</span>
          <span style={{color: 'yellow'}}>e</span>
          <span style={{color: 'green'}}>k</span>
          <span style={{color: 'blue'}}>l</span>
          <span style={{color: 'indigo'}}>y</span>
          <span> </span>
          <span style={{color: 'purple'}}>B</span>
          <span style={{color: 'pink'}}>e</span>
          <span style={{color: 'brown'}}>s</span>
          <span style={{color: 'grey'}}>t</span>
            </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
            <Row>
              <Col>
                <Nav fill variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="2d">2D</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="realistic">Realistic</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="2d">
                    <Row>
                      {images2D.map((image) => (
                        <Col md={4} sm={6} key={image.id}>
                          <img src={image.src} alt={image.alt} className="image" />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="realistic">
                    <Row>
                      {imagesRealistic.map((image) => (
                        <Col md={4} sm={6} key={image.id}>
                          <img src={image.src} alt={image.alt} className="image" />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default BestPictureBox;
