import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

Button.propTypes = {

};

function Button(props) {
  return (
    <button className={styles.btn} {...props} />
  );
}

export default Button;
