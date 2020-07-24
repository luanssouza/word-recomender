import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
        <Navbar class="navbar">
          <Container>
            <Navbar class="navbar-brand" href="/">Word Recommender</Navbar>
          </Container>
        </Navbar>
    </header>
  );
};

export default Header;
