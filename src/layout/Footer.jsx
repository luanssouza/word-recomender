import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light fixed-bottom">
		<Container>
			<p>
				<span className="text-muted">© 2020 Copyright</span>
			</p>
		</Container>
    </footer>
  );
};

export default Footer;
