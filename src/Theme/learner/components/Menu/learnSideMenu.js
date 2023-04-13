import React from 'react';
import { Nav } from 'react-bootstrap';

function LearnSideMenu({ level, experience }) {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link disabled>Level: {level}</Nav.Link>
      <Nav.Link disabled>Experience: {experience}</Nav.Link>
    </Nav>
  );
}

export default LearnSideMenu;
