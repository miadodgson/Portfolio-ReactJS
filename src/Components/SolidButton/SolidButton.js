import React from 'react';
import PropTypes from 'prop-types';
import styles from './SolidButton.module.css';


const SolidButton = ({ label, onClick, style }) => {
  return (
    <button className={styles.solidButton} onClick={onClick} style={style} >
      {label}
    </button>
  );
};

SolidButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

SolidButton.defaultProps = {
  onClick: () => {},
  style: {},
};

export default SolidButton;