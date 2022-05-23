import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import rbLogo from '../images/rblogo_white.png'

function Navibar(props){
  return (
    <Navbar collapseOnSelect expand="lg" className="navibar navbar-dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="rbLogo"
            src={rbLogo}
            width="110"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-3 mt-1 text-light" href="#about"><h5>About</h5></Nav.Link>
            <Nav.Link className="mx-3 mt-1 text-light" href="#skills"><h5>Skills</h5></Nav.Link>
            <Nav.Link className="mx-3 mt-1 text-light" href="#projects"><h5>Projects</h5></Nav.Link>
            <Nav.Link className="mx-3 mt-1 text-light" href="#contact"><h5>Contact</h5></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navibar