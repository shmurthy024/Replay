import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import './NavBar.css';



function NavBar(){
  return(
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Replay</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#link">Post</Nav.Link>
        <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Top Artists</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Top Songs</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Button variant="outline-success">Login</Button>
    </Navbar.Collapse>
  </Navbar>
  )
};
export default NavBar;