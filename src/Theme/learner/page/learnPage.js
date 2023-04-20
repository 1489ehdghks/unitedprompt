import React, { useState } from "react";
import { Tabs, Tab, Container, Row, Col, Nav } from "react-bootstrap";
import LearnPageMain from "./learnPageMain";
import LearnTopMenu from "../components/Menu/learnTopMenu";
import TopMenu from "../../../menu/topMenu";
import 'bootstrap/dist/css/bootstrap.min.css';
import './learnPage.css';


function LearnPage() {
  const [visible,setVisible]=useState(false);
  const [key, setKey] = useState("basic");

  return (
    <div>

    <div className="LearnPage-body">
    <div className="LearnPage-header">
      <LearnTopMenu/>
    </div>
    <Container fluid className="content-container">
      <Row className="content-row">
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
                      <LearnPageMain/>
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
    
    <Tab eventKey="terminology" title="terminology">
            <Row>
        <Col lg={10}>
          <Tab.Container defaultActiveKey="terminology">
            <Row>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="terminology">
                    <Row>
                      <LearnPageMain/>
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

    <Tab eventKey="Research" title="Research">
            <Row>
        <Col lg={10}>
          <Tab.Container defaultActiveKey="Research">
            <Row>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="Research">
                    <Row>
                      <LearnPageMain/>
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

    <Tab eventKey="Extensions" title="Extensions">
            <Row>
        <Col lg={10}>
          <Tab.Container defaultActiveKey="Extensions">
            <Row>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="Extensions">
                    <Row>
                      <LearnPageMain/>
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
    </div>

    <div className="LearnPage-footer">

    </div>
    </div>
  );
}

export default LearnPage;
