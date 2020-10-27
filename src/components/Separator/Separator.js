import React from 'react';
import PropTypes from 'prop-types';
import styles from './Separator.module.css';

Separator.propTypes = {
  children: PropTypes.node,
};

Separator.defaultProps = {
  children: null,
}

function Separator(props) {
  return (
    <div className={styles.separator}>{props.children}</div>
  );
}

export default Separator;
