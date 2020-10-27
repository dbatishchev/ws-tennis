import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

Label.propTypes = {
  hasError: PropTypes.bool,
};

Label.defaultProps = {
  hasError: false,
}

function Label(props) {
  return (
    <label className={`${styles.label} ${props.hasError ? styles.labelError : ''}`}>{props.children}</label>
  );
}

export default Label;
