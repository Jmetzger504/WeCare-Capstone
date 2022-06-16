import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoachHome.module.css';
import Navigation from '../Navigation/Navigation';

const CoachHome = () => {
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
