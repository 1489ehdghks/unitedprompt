import React,{ useState }  from 'react';
import {Dropdown , Navbar, Nav, NavDropdown,Form,Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountSettingsPage from '../page/accountSettingPage';
import { BiHome } from "react-icons/bi";
import SerchBar from '../components/searchbar/serchBar';
import { AiOutlineSearch } from "react-icons/ai";

const TopMenu = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseOver = (menuId) => {
    setHoveredMenu(menuId);
  };

  const handleMouseOut = () => {
    setHoveredMenu(null);
  };

  const isMenuHovered = (menuId) => {
    return menuId === hoveredMenu;
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search query
    console.log(searchQuery);
  };
  return (
    <div>
    <Navbar bg="white" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/"><BiHome/></Nav.Link>
        <Nav.Link href="/AccountSettingPage">My Account</Nav.Link>
        <Nav.Link href="#link"
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}>
          배우기
          {isMenuHovered(1) && (
            <NavDropdown show={true}>
              <NavDropdown.Item href="/InfoPage">페이지설명</NavDropdown.Item>
              <NavDropdown.Item href="/LearnPage">배우기</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">기본</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">용어</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">연구글</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">확장프로그램</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav.Link>
        <Nav.Link href="#about"
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}>
          공유하기
          {isMenuHovered(2) && (
            <NavDropdown show={true}>
              <NavDropdown.Item href="#action/4.1">프롬프트</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">연구글</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">임베딩/로라</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.4">모델</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav.Link>
        <Nav.Link href="#about"
          onMouseOver={() => handleMouseOver(3)}
          onMouseOut={handleMouseOut}>
          의뢰하기
          {isMenuHovered(3) && (
            <NavDropdown show={true}>
              <NavDropdown.Item href="#action/5.1">대회</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.2">공개의뢰</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.3">1:1 의뢰</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.4">nightWorkers</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav.Link>
        <Nav.Link href="#about"
          onMouseOver={() => handleMouseOver(4)}
          onMouseOut={handleMouseOut}>
          문의하기
          {isMenuHovered(4) && (
            <NavDropdown show={true}>
              <NavDropdown.Item href="#action/4.1">버그</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">요청사항</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">패치노트</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.4">후원하기</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.4">개발자의 한탄</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav.Link>
        <Nav.Link href="#about" > 
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSearch">
              <Form.Control type="text" placeholder="작품검색"
               value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} size="lg" style={{top:100}}/>
            </Form.Group>
          </Form>
        </Nav.Link>
        <Nav.Link href="#about">
        <Button variant="secondary" type="submit" size="md">
              <AiOutlineSearch/>
            </Button>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
export default TopMenu;


{/* <NavDropdown.Divider /> */}//선나누기
