import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

function Heading(props) {
  return (
    <div className={styles.heading}>{props.children}</div>
  );
}

export default Heading;
