import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoachHome.module.css';
import Navigation from '../Navigation/Navigation';
import { useEffect } from 'react';

const CoachHome = () => {

  useEffect(() => {
    document.body.style.background = "url('/assets/Images/cloud-2725520_960_720.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  },[])

  return (
    <>
      <Navigation/>
      <div className = "container p-3 mt-5 bg-dark text-white"
           style = {{"width": "20%", "border-radius": "2.5%", "textAlign": "center"}}>
        <h1>Appointment Date</h1>
        <h2>2020-09-24</h2>
        <h3>Slot: 10 AM to 11AM</h3>
        <br/>
        <p>Booking Id: 1</p>
        <p>User Id: 1</p>
      </div>
    </>
  );
}

export default CoachHome;
