import { Button } from "react-bootstrap";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./App.css";


function Header() {

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light" className="header">
        <Button href="/quotes" variant="warning" size="lg" className="nav-button">Click here for quotes </Button>
        <Button href="/" variant="warning" size="lg"  className="nav-button" >Recipes </Button>
      </Navbar>
    </Container>
  )
}

export default Header;