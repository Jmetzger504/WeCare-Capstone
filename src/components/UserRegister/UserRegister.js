import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserRegister.module.css';
import Navigation from '../Navigation/Navigation';
import {Form,Button,Col,Row} from "react-bootstrap"
function UserRegister() { 
  
  return (
    <>
      <Navigation/>
      <div className = "container p-5 mt-5 bg-dark text-white" style = {{"width": "45%", "border-radius": "2.5%"}}>
          <img src = "assets\Images\UserLogIn.jpg"></img>
          <h1>User Profile</h1>
          <Form horizontal="true" className = "mt-3">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name = "userName" required type = "text"></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name = "userPassword" required type = "password"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type = "text"></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type = "text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type = "date"></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>Gender</Form.Label><br/>
                  <Form.Check required name = "gender" id = "Male" inline type="radio" label="Male"></Form.Check>
                  <Form.Check required name = "gender" id = "Female" inline type="radio" label="Female"></Form.Check>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type = "number"></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type = "text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control type = "text"></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className = "mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type = "text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
                <Form.Group className = "mb-3">
                  <Button type = "submit">Register</Button>
                </Form.Group>
              </Row>
          </Form>
        </div>
    </>
  );

}

export default UserRegister;
