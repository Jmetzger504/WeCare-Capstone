import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoachRegister.module.css';
import Navigation from '../Navigation/Navigation';
import {Form,Button,Col,Row} from "react-bootstrap"
const CoachRegister = () => (
  <>
    <Navigation/>
    <div className = "container p-3 mt-5 bg-dark text-white" style = {{"width": "45%", "border-radius": "2.5%"}}>
      <img src = "assets\Images\LifeCoachLogIn.jpg"></img>
      <h3>Life Coach Profile</h3>
      <Form horizontal="true" className = "mt-auto">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control required type = "text"></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className = "mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control required type = "password"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group required className = "mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control required type="date"></Form.Control>
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
              <Form.Control required type = "text"></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className = "mb-3">
              <Form.Label>Speciality</Form.Label>
              <Form.Control required type = "text"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  </>
);

CoachRegister.propTypes = {};

CoachRegister.defaultProps = {};

export default CoachRegister;
