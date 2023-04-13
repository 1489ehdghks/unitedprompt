import React from 'react';
import { Navbar, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiHome } from "react-icons/bi";
const InfoTopMenu = () => {
  return (
    <div>
        <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/AccountSettingPage">My Account</Navbar.Brand>
        <Navbar.Brand href="/"><BiHome/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* The rest of your app's content goes here */}        
    </div>
  )
}

 

   
export default InfoTopMenu;
