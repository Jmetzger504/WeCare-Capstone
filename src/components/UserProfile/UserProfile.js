import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserProfile.module.css';
import Navigation from '../Navigation/Navigation';
import { store } from '../../stores/store';

const UserProfile = () => {
  
  return (
    <>
    <Navigation/>
    <div className={styles.UserProfile}>
      UserProfile Component
    </div>
  </>
)};

UserProfile.propTypes = {};

UserProfile.defaultProps = {};

export default UserProfile;
