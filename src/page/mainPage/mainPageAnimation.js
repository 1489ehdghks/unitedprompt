import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainPageImageSection from './mainPageImageSection';
import './mainPageAnimation.css';
import mainPicture1 from "../../image/bestPicture/0421/mainPicture1.png";
import logo2 from '../../image/logo/logo2.png';


const MainPageAnimation = () => {
  return (
    <div>
    <Container fluid className="mainPageAnimation">
      <Row className="full-height">
      <h1 className="title">야! 너두 할 수 있어.</h1>
        <Col xs={12} md={6}>
          <MainPageImageSection
            image="https://via.placeholder.com/600x400"
            description="Image 1"
            size="half-height"
          >
          </MainPageImageSection>
        </Col>
        <Col xs={6} md={3}>
          <MainPageImageSection
            image="https://via.placeholder.com/1024x768"
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
    </div>
  );
};

export default MainPageAnimation;
