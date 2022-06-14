import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import {Form,Button,Col,Row} from "react-bootstrap"
import styles from './CoachRegister.module.css';

function CoachRegister() { 
  let styles = '';
  return (
    <>
      <Navigation/>
      
      <div className = "container p-5 mt-5 bg-dark text-white" style = {{"width": "45%", "border-radius": "2.5%"}}>
        <img style = {styles.img} src = "assets\Images\LifeCoachLogIn.jpg"></img>
        <h1 style = {styles.h1}>Life Coach Profile</h1>
        <Form horizontal="true" className = "mt-3">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name = "coachName" required type = "text"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className = "mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name = "coachPassword" required type = "password"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group required className = "mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control name = "coachDOB" required type="date"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group required className = "mb-3">  
                <Form.Label>Gender</Form.Label><br/>
                <Form.Check required name = "gender" id = "Male" inline type="radio" label="Male"></Form.Check>
                <Form.Check required name = "gender" id = "Female" inline type="radio" label="Female"></Form.Check>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className = "mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control name = "coachPhoneNum" required type = "text"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className = "mb-3">
                <Form.Label>Speciality</Form.Label>
                <Form.Control name = "coachSpec" required type = "text"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
              <Form.Group className = "mb-3">
                <Button style = {styles.coachRegButton} type = "submit">Register</Button>
              </Form.Group>
            </Row>
        </Form>
      </div>
    </>
  );

}

CoachRegister.propTypes = {};

CoachRegister.defaultProps = {};

export default CoachRegister;
