import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import {Form,Button,Col,Row} from "react-bootstrap"
import styles from './CoachRegister.module.css';

function CoachRegister() { 

  const [coachCredentials,setCoachCredentials] = useState({coachName: '',
                                                           coachPassword: '',
                                                           coachDOB: new Date(Date.now),
                                                           coachGender: '',
                                                           coachPhoneNum: '',
                                                           coachSpec: ''});

  const [coachNameValid,setCoachNameValid] = useState(true);
  

  const coachRegisterChange = (event) => {
    let tempCredentials = Object.assign({},coachCredentials,{[event.target.name]: event.target.value})
    setCoachCredentials(tempCredentials);
  }

  const handleCoachRegister = (event) => {
   event.preventDefault();
  
  }


  return (
    <>
      <Navigation/>
      <div className = "container p-5 mt-5 bg-dark text-white" style = {{"width": "45%", "borderRadius": "2.5%"}}>
        <img src = "assets\Images\LifeCoachLogIn.jpg"></img>
        <h1>Life Coach Profile</h1>
        <Form horizontal="true" className = "mt-3" onSubmit = {handleCoachRegister}>
          <Row>
            <Col>
              <Form.Group className="mb-3" onChange = {coachRegisterChange}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name = "coachName"
                  type = "text"
                  required
                  minLength={5}
                  maxLength = {50}
                />
                <Form.Control.Feedback type = "invalid">Name must be between 2 and 50 characters in length</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className = "mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name = "coachPassword"
                  type = "password"
                  required
                  minLength = {5}
                  maxLength = {10}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group required className = "mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name = "coachDOB"
                  type="date"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group name = "coachGender" required className = "mb-3">  
                <Form.Label>Gender</Form.Label><br/>
                <Form.Check
                  name = "coachGender"
                  inline
                  type="radio"
                  label="Male"
                  required
                />
                <Form.Check
                name = "coachGender" 
                value = "F" 
                inline 
                type="radio" 
                label="Female"
                required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className = "mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control 
                  name = "coachPhoneNum" 
                  type = "tel"
                  required
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className = "mb-3">
                <Form.Label>Speciality</Form.Label>
                <Form.Control 
                name = "coachSpec" 
                type = "text"
                required
                minLength = {10}
                maxLength = {50}
                />
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

CoachRegister.propTypes = {};

CoachRegister.defaultProps = {};

export default CoachRegister;
