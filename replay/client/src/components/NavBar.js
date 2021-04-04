import React from 'react';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import './NavBar.css';



class NavBar extends React.Component{

  render(){
    return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Replay</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="post">Post</Nav.Link>
          <Nav.Link href="top-artists">Top Artists</Nav.Link>
          <Nav.Link href="top-songs">Top Songs</Nav.Link>
        </Nav>
        <Button variant="outline-success">Login</Button>
      </Navbar.Collapse>
    </Navbar>
    )
  }
};
export default NavBar;