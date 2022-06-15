import React from 'react';
import PropTypes from 'prop-types';
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {BsTelephoneFill} from "react-icons/bs"
import { useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  
  
  return  (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home">WeCare</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-end">
        <Nav>
          <Nav.Link to = "/" className = "me-3 navlink">Profile</Nav.Link>
          <Nav.Link to = "/" className = "me-3 navlink">My Appointments</Nav.Link>
          <IconContext.Provider value={{ color: "white"}}>
            <Navbar.Brand >
              <BsTelephoneFill/>
              Call Us: +1 (504)-123-4567
            </Navbar.Brand>
          </IconContext.Provider>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
