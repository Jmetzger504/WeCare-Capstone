import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Navigation from '../Navigation/Navigation'
import { useEffect } from 'react';
import {Button,Card} from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from "react-router-dom";

function Home() {

  useEffect(() => {
    document.body.style.background = "url('/assets/Images/cloud-2725520_960_720.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  },[])

  let nav = useNavigate();

  const handleUserLoginClick = () => {
    nav("/userlogin");
  }

  const handleUserRegisterClick = () => {
    nav("/userregister");
  }

  const handleCoachLoginClick = () => {
    nav("/coachlogin");
  }

  const handleCoachRegisterClick = () => {
    nav("/coachregister");
  }
  

  return(
    <>
      <Navigation/>
      <Container>
        <Row>
          <Col>
            <Card bg = "dark" className="mt-5" text = "light" style = {{width: '20rem'}}>
              <Card.Img className="m-1" style = {styles.Img} variant="top" src="assets\Images\LifeCoachLogIn.jpg" />
              <Card.Body>
                <Button variant = "primary" onClick = {handleCoachLoginClick}>Login as a Coach</Button><br/>
                <Button variant="primary" onClick = {handleCoachRegisterClick}>Register as a Coach</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card bg = "dark" className="mt-5 ms-auto" text = "light" style = {{width: '20rem'}}>
            <Card.Img className = "m-1" style = {styles.Img} variant="top" src="assets\Images\UserLogin.jpg" />
            <Card.Body>
              <Button variant = "primary" onClick = {handleUserLoginClick}>Login</Button><br/>
              <Button variant="primary" onClick = {handleUserRegisterClick}>Register</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        
          
        
      </Container>
  </>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
