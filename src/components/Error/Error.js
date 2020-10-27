import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css';

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

function Error(props) {
  return (
    <div>{props.children}</div>
  );
}

export default Error;
