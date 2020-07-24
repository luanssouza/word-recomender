import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
        <Navbar className="navbar">
          <Container>
            <Navbar className="navbar-brand" id="brand" href="/">Word Recommender</Navbar>
          </Container>
        </Navbar>
    </header>
  );
};

export default Header;
