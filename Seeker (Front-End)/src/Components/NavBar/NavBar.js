
import './NavBar.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container } from 'react-bootstrap';

export default function NavBar() {
  
  var logged = false;

  useEffect(() => {
    if (localStorage.getItem("token")) {
       logged = true;
    }
});



  return (

    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/"><img src="images/seeker.jpeg" width={150} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/courses">Courses | Paths</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


    
  )
}
