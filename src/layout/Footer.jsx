import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer class="footer fixed-bottom p-3">
		<Container>
			<div class="footer-content">
				<span> © 2020 Copyright</span>
				<a href="https://icmc.usp.br/">Insituto de Ciências Matemáticas e de Computação - ICMC</a>
			</div>
		</Container>
    </footer>
  );
};

export default Footer;
