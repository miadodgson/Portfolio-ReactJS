import React from 'react';
import styles from './Publications.module.css';
import GradientLine from '../../Components/GradientLine/GradientLine.js';

const Publications = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Publications</h1>
      <GradientLine />
      <p className={styles.p}>CSDE1</p>
    </div>
  );
};

export default Publications;
