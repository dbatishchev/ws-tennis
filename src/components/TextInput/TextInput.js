import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';

TextInput.propTypes = {

};

function TextInput(props) {
  return (
    <input className={styles.input} {...props} />
  );
}

export default TextInput;
