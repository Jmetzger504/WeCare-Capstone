import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoachProfile.module.css';
import { store } from '../../stores/store';
import Navigation from '../Navigation/Navigation';

const CoachProfile = () => {
  
  return (
    <>
    <Navigation/>
      <div className={styles.CoachProfile}>
        CoachProfile Component
      </div>
    </>
  )
};

CoachProfile.propTypes = {};

CoachProfile.defaultProps = {};

export default CoachProfile;
