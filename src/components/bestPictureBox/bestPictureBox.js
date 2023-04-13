import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, DropdownButton, Dropdown   } from 'react-bootstrap';
import Select from 'react-select';
import nonRealistic from '../../image/bestPicture/today/nonRealistic.png';
import Realistic from '../../image/bestPicture/today/nonRealistic.png';


function BestPictureBox() {

  const [key, setKey] = useState('2d');


  const imagesSemiRealistic = [
    // Images for Semi-Realistic category
  ];

  const imagesRealistic = [
    // Images for Realistic category
  ];
  return (
    <Container>
         <Row>
        <Col className="text-right">
        </Col>
      </Row>
    <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
    <h1>Top Trending Pictures</h1>

      <Row>
        <Col>
          <Nav fill variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="2d">2D</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="semi-realistic">semi-realistic</Nav.Link>
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
                <Col md={4} sm={6}>
                  <img src={<Realistic/>} style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture2" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture3" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture4" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture5" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture6" style={{marginBottom: '10px'}} />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="semi-realistic">
              <Row>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture1" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture2" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture3" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture4" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture5" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture6" style={{marginBottom: '10px'}} />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="realistic">
              <Row>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture7" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture8" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture9" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture10" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture11" style={{marginBottom: '10px'}} />
                </Col>
                <Col md={4} sm={6}>
                  <img src="https://picsum.photos/300" alt="picture12" style={{marginBottom: '10px'}} />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Container>
  );
}

export default BestPictureBox;
