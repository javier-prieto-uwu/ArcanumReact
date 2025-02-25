import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { ContacPAge, HomePage, NosotrosPage } from '../pages/Pages';
import { Link } from "react-router-dom";
import '../compoentes/Navbar.css';

const Navbar2 = () => {
  return (

    <Navbar id="navbarfondo" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand id="text" href="#home">ARCANUM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

            <Nav.Link id='intento' as={Link} to="/">Home</Nav.Link>
            <Nav.Link id='intento' as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link id='intento' as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link id='intento' as={Link} to="/Login">Log In</Nav.Link>
            <Nav.Link id='intento' as={Link} to="/Register">Register</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar2