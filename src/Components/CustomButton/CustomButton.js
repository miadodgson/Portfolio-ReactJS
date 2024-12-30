import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomButton.module.css';


const CustomButton = ({ label, onClick, style }) => {
  return (
    <button className={styles.customButton} onClick={onClick} style={style} >
      {label}
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

CustomButton.defaultProps = {
  onClick: () => {},
  style: {},
};

export default CustomButton;