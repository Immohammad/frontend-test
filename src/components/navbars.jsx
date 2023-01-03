import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./stuffs/download-removebg-preview.png";


const Navbars = () => {

  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect className="navbarFont">
      <Navbar.Brand>
        <img src={logo} id="logo"/>{" "}
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/" className="navbarFont" style={{marginLeft: "30px"}}>
            خانه
          </Nav.Link>
          <Nav.Link as={Link} to="/aboutus" className="navbarFont" style={{marginLeft: "30px"}}>
            درباره ما
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
