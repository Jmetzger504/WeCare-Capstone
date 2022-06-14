import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoachLogin.module.css';
import Container from 'react-bootstrap/esm/Container';
import Navigation from '../Navigation/Navigation';
import {Form,Button,Col} from "react-bootstrap"


const CoachLogin = () => (
  <>
    <Navigation/>
    <div className = "container p-3 mt-5 bg-dark text-white" style = {{"width": "30%", "border-radius": "2.5%"}}>
      <img style = {styles.img} src = "assets\Images\LifeCoachLogIn.jpg"></img>
      <h3 style = {styles.h3}>Login As Life Coach</h3>
      <Form horizontal = "true">
        <Form.Group controlId="formHorizontalId" className="mb-2">
          <Col sm={12}>
            <Form.Control size="lg" name="coachId" className="input-lg mt-4" type="text" placeholder="Coach Id" autoComplete='off' />
          </Col>
        </Form.Group>
        <Form.Group controlId="formHorizontalPassword" className="mb-2">
          <Col sm={12}>
            <Form.Control size="lg" name="password" className="input-lg mt-4" type="password" placeholder="Password" autoComplete='off' />
          </Col>
        </Form.Group>
        <Form.Group>
          <Col sm = {12}>
            <Button style = {styles.Button} size= "lg" className="mt-4" variant="primary" type="submit"> Sign in </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
    
  </>
);

CoachLogin.propTypes = {};

CoachLogin.defaultProps = {};

export default CoachLogin;
