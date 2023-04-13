import React, { useState } from "react";
import { Tabs, Tab, Container, Row, Col, Nav } from "react-bootstrap";

function LearnPage() {
  const [key, setKey] = useState("basic");

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="side-menu">
          <h5>Progress</h5>
          <p>Current level: 1</p>
          <p>Experience: 50/100</p>
          <Nav defaultActiveKey="basic" className="flex-column">
            <Nav.Link eventKey="basic">Basic</Nav.Link>
            <Nav.Link eventKey="terminology">Terminology</Nav.Link>
            <Nav.Link eventKey="research">Research</Nav.Link>
            <Nav.Link eventKey="extension">Extension</Nav.Link>
          </Nav>
        </Col>
        
        <Col md={10}>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="basic" title="Basic">
            <Row>
        <Col lg={10}>
          <Tab.Container defaultActiveKey="basic">
            <Row>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="basic">
                    <Row>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'pink', height: '150px', marginBottom: '20px' }}>
                          <p>Lesson 1</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightblue', height: '150px', marginBottom: '20px' }}>
                          <p>Lesson 2</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightgreen', height: '150px', marginBottom: '20px' }}>
                          <p>Lesson 3</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lavender', height: '150px', marginBottom: '20px' }}>
                          <p>Lesson 4</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'peachpuff', height: '150px', marginBottom: '20px' }}>
                          <p>Lesson 5</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'cornflowerblue', height: '150px', marginBottom: '20px' }}>
                          <p>Lesson 6</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'plum', height: '150px', marginBottom: '20px' }}>
                          <p>Lesson 7</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightgray', height: '150px', marginBottom: '20px' }}>
                          <p>Lesson 8</p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  {/* Other tab panes */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
            </Tab>
            <Tab eventKey="terminology" title="Terminology">
            <Row>
        <Col lg={2}>
          {/* Sidebar menu */}
        </Col>
        <Col lg={10}>
          <Tab.Container defaultActiveKey="basic">
            <Row>
              <Col sm={3}>
                {/* Tab menu */}
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="basic">
                    <Row>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'pink', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 1</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightblue', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 2</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightgreen', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 3</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lavender', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 4</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'peachpuff', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 5</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'cornflowerblue', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 6</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'plum', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 7</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightgray', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 8</p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  {/* Other tab panes */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
            </Tab>
            <Tab eventKey="research" title="Research">
              <p>This is the Research learning page.</p>
              <Row>
        <Col lg={2}>
          {/* Sidebar menu */}
        </Col>
        <Col lg={10}>
          <Tab.Container defaultActiveKey="basic">
            <Row>
              <Col sm={3}>
                {/* Tab menu */}
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="basic">
                    <Row>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'pink', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 1</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightblue', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 2</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightgreen', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 3</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lavender', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 4</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'peachpuff', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 5</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'cornflowerblue', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 6</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'plum', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 7</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightgray', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 8</p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  {/* Other tab panes */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
            </Tab>
            <Tab eventKey="extension" title="Extension">
              <p>This is the Extension learning page.</p>
              <Row>
        <Col lg={2}>
          {/* Sidebar menu */}
        </Col>
        <Col lg={10}>
          <Tab.Container defaultActiveKey="basic">
            <Row>
              <Col sm={3}>
                {/* Tab menu */}
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="basic">
                    <Row>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'pink', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 1</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightblue', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 2</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightgreen', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 3</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lavender', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 4</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'peachpuff', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 5</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'cornflowerblue', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 6</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'plum', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 7</p>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div style={{ backgroundColor: 'lightgray', height: '150px', marginBottom: '10px' }}>
                          <p>Lesson 8</p>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  {/* Other tab panes */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default LearnPage;
