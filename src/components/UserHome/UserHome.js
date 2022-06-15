import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserHome.module.css';
import Navigation from '../Navigation/Navigation';
import { Nav } from 'react-bootstrap';

const UserHome = () => {
  return (
    <>
      <Navigation/>
      <div className={styles.UserHome}>
        UserHome Component
      </div>
    </>
  );
}

UserHome.propTypes = {};

UserHome.defaultProps = {};

export default UserHome;
