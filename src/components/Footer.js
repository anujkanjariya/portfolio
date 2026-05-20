import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/project" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="footer-row">
          <Col md="4" className="footer-body footer-links-col">
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright &copy; {year} AK</h3>
          </Col>
          <Col md="4" className="footer-body footer-social-col">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/anujkanjariya"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anuj-kanjariya-a91862231/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anuj__4950/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
