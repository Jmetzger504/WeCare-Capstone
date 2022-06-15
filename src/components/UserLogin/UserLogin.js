import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserLogin.module.css';
import Navigation from '../Navigation/Navigation';
import {Form,Button,Col} from "react-bootstrap"
import {userLoginAction} from '../../actions/action'
import { connect } from 'react-redux';
import { useState } from 'react';


const UserLogin = () => {

  const [userCredentials,setUserCredentials] = useState({id: 0, password: 0})


  return (
    <>
    <Navigation/>
    <div className = "container p-5 mt-5 bg-dark text-white" style = {{"width": "30%", "border-radius": "2.5%"}}>
      <img className = "ms-5" style = {styles.img} src = "assets\Images\UserLogIn.jpg"></img>
      <h1>Login As User</h1>
      <Form horizontal = "true">
          <Form.Group className="mb-2">
            <Col sm={12}>
              <Form.Control size="lg" name = "userId" className="input-lg mt-4" type="number" placeholder="User Id" autoComplete='off' />
            </Col>
          </Form.Group>
          <Form.Group className="mb-1">
            <Col sm={12}>
              <Form.Control size="lg" name="coachPassword" className="input-lg mt-4" type="password" placeholder="Password" autoComplete='off' />
            </Col>
          </Form.Group>
          <Form.Group className = "mb-2"> 
            <Col sm = {12}>
              <Button style = {styles.Button} size= "lg" className="mt-4" variant="primary" type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(userLoginAction(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserLogin)
