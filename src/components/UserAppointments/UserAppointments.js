import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserAppointments.module.css';
import { store } from '../../stores/store';
import {useEffect,useState} from 'react'
import Navigation from '../Navigation/Navigation';
import { Modal,Button } from 'react-bootstrap';
import axios from 'axios';

const UserAppointments = () => {

  let state = store.getState();
  const [myBookings,setMyBookings] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [isRescheduling,setIsRescheduling] = useState(false);
  const [isCancelling,setIsCancelling] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  //Set background and get current appointments.
  useEffect(() => {
    document.body.style.background = "url('/assets/Images/cloud-2725520_960_720.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    axios.get('http://localhost:8008/bookings')
    .then((response) => {
      let value = response.data;
      let result = value.filter(val => val.userId === state.user.id)
      if(result) {
        setMyBookings(result);
        setLoading(false);
      }
    })
  },[isLoading]);




  const cancelAppointment = (appointmentId) => {
    axios.delete('http://localhost:8008/bookings/' + appointmentId)
    .then(() => {
      setIsCancelling(true);
      setShowCancelModal(false);
    });
  }

  const resetPage = () => {
    setIsCancelling(false);
    setLoading(true);
    console.log(isLoading);
  }

  if(isCancelling) {
    return (
      <>
      <Navigation/>
        <div className = "container bg-dark mt-5 pt-1 text-white"
          style = {{"width": "30%", "text-align": "center", "borderRadius": "3%"}}>
          <p className = " mt-5">Your appointment was cancelled successfully.</p>
          <Button className = "my-3" onClick = {() => resetPage()}
            style = {{"width": "50%"}}>Go Back</Button>
        </div>
      </>
    )
  }
  else if(isLoading) {
    return (
      <>
        <Navigation/>
        <div className = "container bg-dark mt-5 text-white">
          <h1>Loading...</h1>
        </div>
      </>
    )
  }
   else {
    return (
      <>
        <Navigation/>
        {myBookings.map((myBooking) => {
          return (
            <>
              <div className = "container p-3 mt-5 bg-dark text-white"
              style = {{"width": "20%", "borderRadius": "2.5%", "textAlign": "center"}}>
                <h1>Appointment Date</h1>
                <h2>{myBooking.appointmentDate}</h2>
                <h3 className = "mb-5">Slot: {myBooking.slot}</h3>
                <Button variant = "info" className = "mt-5 mb-3 text-white">Reschedule your Appointment</Button>
                <Button 
                  variant = "danger" 
                  className = "mb-3" 
                  data-toggle="modal" 
                  onClick = {() => setShowCancelModal(true)}>
                  Cancel your Appointment
                </Button>
              </div>
              <Modal centered show={showCancelModal} onHide={() => setShowCancelModal(false)}>
                <Modal.Body closeButton>Are you sure you need to cancel the appointment?</Modal.Body>
                <Modal.Footer>
                  <Button onClick = {() => cancelAppointment(myBooking.id)} className = "mx-auto" style = {{"width": "40%"}} variant="success">
                    Yes
                  </Button>
                  <Button className = "mx-auto" style = {{"width": "40%"}} variant="danger" onClick={() => setShowCancelModal(false)}>
                    No
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )
        })}
      </>
    )
  }
};

UserAppointments.propTypes = {};

UserAppointments.defaultProps = {};

export default UserAppointments;
