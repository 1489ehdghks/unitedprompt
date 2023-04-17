import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Modal, Tab, Tabs, Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SideMenu=()=>{
  const [showModal, setShowModal] = useState(false);
  const [pages, setPages] = useState([]);
  const [pageName, setPageName] = useState('');
  const [pageUrl, setPageUrl] = useState('');

  const handleModalCreate = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const pageName = event.target.pageName.value;
    const pageUrl = event.target.pageUrl.value;
    const newPage = { name: pageName, url: pageUrl };
    setPages([...pages, newPage]);
    setShowModal(false);
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
    
  };
  
    return(       
      <div>
      <Nav className="d-flex flex-row-reverse">
        <Nav className="flex-column position-fixed side-menu" style={{ top: 200, right: 0, bottom: 0, width: 200 }}>
        <h4>페이지 추가</h4>
          <Nav.Link onClick={() => handleLinkClick('https://arca.live/b/aiart')}>AI그림채널</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://arca.live/b/aiart/61336136')}>태그 종류</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://gall.dcinside.com/mgallery/board/lists?id=aireality&exception_mode=recommend')}>DC실사갤러리</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://civitai.com/')}>civitai</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://huggingface.co/')}>huggingface</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://chat.openai.com/chat')}>chatGPT</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://papago.naver.com')}>파파고</Nav.Link>

        <h4>페이지 이동</h4>
          <Nav.Link href="/">Home</Nav.Link>
          <ButtonGroup aria-label="Basic example">
          <Button variant="light" onClick={handleModalCreate}>생성</Button>
          <Modal show={showModal} onHide={handleModalCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Page Creation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="pageName">
              <Form.Label>Page Name</Form.Label>
              <Form.Control type="text" placeholder="Enter page name" />
            </Form.Group>
            <Form.Group controlId="pageUrl">
              <Form.Label>Page URL</Form.Label>
              <Form.Control type="text" placeholder="Enter page URL" />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="mx-2">
                Create
              </Button>
              <Button variant="secondary" onClick={handleModalCreate} className="mx-2">
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
          <Button variant="light">수정</Button>
          <Button variant="light">제거</Button>
          </ButtonGroup>
        </Nav>
      </Nav>
      {/* The rest of your app's content goes here */}
    </div>
    )
    };
export default SideMenu;
{/* <Nav.Link href="https://arca.live/b/aiart/61336136">태그 종류</Nav.Link> */}