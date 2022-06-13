import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {BsTelephoneFill} from "react-icons/bs"
import { useEffect } from 'react';

function Navigation() {
  
  
  return  (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">WeCare</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <IconContext.Provider value={{ color: "white",
                                          style: { verticalAlign: 'middle' } }}>
            
            <Navbar.Brand className="ms-auto">
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
