import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoachHome.module.css';
import Navigation from '../Navigation/Navigation';
import { useEffect } from 'react';
import { store } from '../../stores/store';

const CoachHome = () => {

  let state = store.getState();
  let myBookings = state.user.myBookings;

  useEffect(() => {
    document.body.style.background = "url('/assets/Images/cloud-2725520_960_720.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    
    console.log(myBookings);
  },[])

  return (
    <>
      <Navigation/>
      {myBookings.map((myBooking) => {
        return (
          <div className = "container p-3 mt-5 bg-dark text-white"
              style = {{"width": "20%", "borderRadius": "2.5%", "textAlign": "center"}}>
            <h1>Appointment Date</h1>
            <h2>{myBooking.appointmentDate}</h2>
            <h3>Slot: {myBooking.slot}</h3>
            <br/>
            <p>Booking Id: {myBooking.id}</p>
            <p>User Id: {myBooking.userId}</p>
          </div>
        )
      })}
      
    </>
  );
}

export default CoachHome;
