import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserHome.module.css';
import Navigation from '../Navigation/Navigation';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Image,Row,Col } from 'react-bootstrap';

const UserHome = () => {

  let coachId = 0;
  let coachChosen = false;
  const [isLoading,setLoading] = useState(true);
  const [coaches,setCoaches] = useState([]);
  

  useEffect(() => {
    document.body.style.background = "url('/assets/Images/cloud-2725520_960_720.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    axios.get('http://localhost:8008/coaches')
    .then((response) => {
      setCoaches(response.data);
      setLoading(false);
    })
  },[])

  if(isLoading) {
    return <div className = "container">Loading....</div>
  }

  return (
    <>
      <Navigation/>
      <div className = "d-flex justify-content-center m-auto flex-wrap"
            style = {{"width": "80%"}}>
        {coaches.map((coach) => {
          return (
            <div className = "flex-fill p-3 mx-4 my-4 bg-light"
              style = {{"width": "32.5%", "max-width": "32.5%", "borderRadius": "3%", "textAlign": "center"}}>
                <Row>
                  <Col>
                    {coach.gender === "M" ? 
                      <Image roundedCircle src = "assets\Images\male.png"/> :
                      <Image roundedCircle src = "assets/Images/female.png"/> 
                    }
                  </Col>
                  <Col>
                    <h2>{coach.name}</h2>
                  </Col>
                </Row>
            </div>
          )
        })}
      </div>
      
    </>
  );
  
}

UserHome.propTypes = {};

UserHome.defaultProps = {};

export default UserHome;
