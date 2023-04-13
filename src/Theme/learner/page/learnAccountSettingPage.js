import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AccountSettingPage from '../../../page/accountSettingPage';
import LearnSideMenu from '../components/Menu/learnSideMenu';

function learnAccountSettingPage() {
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);

  const handleExperienceChange = (newExperience) => {
    setExperience(experience + newExperience);
    if (experience >= 100) {
      setLevel(level + 1);
      setExperience(experience - 100);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8}>
          <AccountSettingPage onExperienceChange={handleExperienceChange} />
        </Col>
        <Col xs={6} md={4}>
          <LearnSideMenu level={level} experience={experience} />
        </Col>
      </Row>
    </Container>
  );
}

export default learnAccountSettingPage;
