import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserAppointments.module.css';
import { store } from '../../stores/store';
import {useEffect,useState} from 'react-redux'
import Navigation from '../Navigation/Navigation';
import { Button } from 'react-bootstrap';

const UserAppointments = () => (
  <>
    <Navigation/>

  </>
);

UserAppointments.propTypes = {};

UserAppointments.defaultProps = {};

export default UserAppointments;
