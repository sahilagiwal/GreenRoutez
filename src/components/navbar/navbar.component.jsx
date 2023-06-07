import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/logo.png";
import CarFront from "react-bootstrap-icons/dist/icons/car-front";
import { Link } from "react-router-dom";

import "./navbar.styles.css";

const Navigation = (props) => (
  <Navbar className="navbar" bg="none" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img className="logo_navbar" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/about">
            About Us
          </Link>

          <Nav.Link href="/faq">Faqs</Nav.Link>

          <Nav.Link href="#link">Contact Us</Nav.Link>

          <Link to="/rides" className="btn btn-dark">
            Available Rides <CarFront />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
