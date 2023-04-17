import React, { useState } from "react";
import { Tabs, Tab, Container, Row, Col, Nav } from "react-bootstrap";
import LearnPageMain from "./learnPageMain";
import LearnPageSideMenu from "../components/Menu/learnSideMenu";
import TopMenu from "../../../menu/topMenu";
import SideMenu from "../../../menu/sideMenu";
import { FcMenu } from "react-icons/fc";
import { VscChromeClose } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';


function LearnPage() {
  const [visible,setVisible]=useState(false);
  const [key, setKey] = useState("basic");

  return (
    <div className="MainPage">
        
    <header className="MainPage-header">
        <figure>
          <TopMenu/>
        </figure>
    </header>
    <Container fluid>
      <Row>
        <Col md={2} className="side-menu">
          <LearnPageSideMenu/>
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
    <body>
        {<button className="menu" 
            onClick={()=>{
              setVisible(!visible);
        }}>
          {visible?<VscChromeClose/>:<FcMenu />}
        </button>}
        {visible && <SideMenu/>}
      </body>
    </div>
  );
}

export default LearnPage;
