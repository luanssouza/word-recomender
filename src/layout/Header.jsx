import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
        <Navbar className="navbar" variant="dark">
          <Container>
            <Navbar.Brand href="/">Word Recommender</Navbar.Brand>
          </Container>
        </Navbar>
    </header>
  );
};

export default Header;
