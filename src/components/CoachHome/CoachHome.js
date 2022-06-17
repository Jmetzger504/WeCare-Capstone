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
      <div className={styles.CoachHome}>
        CoachHome Component
      </div>
    </>
  );
}

CoachHome.propTypes = {};

CoachHome.defaultProps = {};

export default CoachHome;
