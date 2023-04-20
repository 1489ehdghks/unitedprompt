import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainPageImageSection from './mainPageImageSection';
import './mainPageAnimation.css';

const MainPageAnimation = () => {
  return (
    <Container fluid className="mainPageAnimation">

      <Row className="full-height">
      <h1 className="title">LET's make Something special</h1>
        <Col xs={6} md={3}>
          <MainPageImageSection
            image="https://via.placeholder.com/300x200"
            description="Image 1"
            size="half-height"
          >
          </MainPageImageSection>
        </Col>
        <Col xs={6} md={3}>
          <MainPageImageSection
            image="https://via.placeholder.com/300x200"
            description="Image 2"
            size="half-height"
          />
        </Col>
        <Col xs={12} md={6}>
          <MainPageImageSection
            image="https://via.placeholder.com/600x400"
            description="Image 3"
            size="full-height"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPageAnimation;
{/* <Row className="full-height align-items-center justify-content-center">
<Col md={8} className="text-center">
  <h1 className="title">LET's make Something special</h1>
  <p className="subtitle">You Will make it!</p>
</Col>
</Row> */}