import { Nav, NavDropdown } from 'react-bootstrap';

function LearnPageSideMenu() {
  return (
    <Nav className="flex-column">
      <Nav.Item>
        <Nav.Link href="#">My Account</Nav.Link>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img src="https://via.placeholder.com/80x80.png" alt="Character" />
        </div>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Page Description</Nav.Link>
        <NavDropdown title="Categories" id="categories-dropdown">
          <NavDropdown.Item href="#">Learn Basics</NavDropdown.Item>
          <NavDropdown.Item href="#">Research Terms</NavDropdown.Item>
          <NavDropdown.Item href="#">Explore Extensions</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Learn Basics" id="learn-basics-dropdown">
          <NavDropdown.Item href="#">Introduction</NavDropdown.Item>
          <NavDropdown.Item href="#">Recommended Articles</NavDropdown.Item>
          <NavDropdown.Item href="#">Hall of Fame</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Research Terms" id="research-terms-dropdown">
          <NavDropdown.Item href="#">Basic Terms</NavDropdown.Item>
          <NavDropdown.Item href="#">Advanced Terms</NavDropdown.Item>
          <NavDropdown.Item href="#">Case Studies</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Explore Extensions" id="explore-extensions-dropdown">
          <NavDropdown.Item href="#">Browser Extensions</NavDropdown.Item>
          <NavDropdown.Item href="#">Tools and Resources</NavDropdown.Item>
          <NavDropdown.Item href="#">User Contributions</NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
    </Nav>
  );
}

export default LearnPageSideMenu;
