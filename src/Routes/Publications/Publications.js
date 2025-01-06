import React from 'react';
import styles from './Publications.module.css';
import GradientLine from '../../Components/GradientLine/GradientLine.js'
import Paper from '../../Assets/Images/Paper.jpeg'
import SolidButton from '../../Components/SolidButton/SolidButton.js'

const handleClick = () => {
    alert('Button clicked!');
  };

const Publications = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Publications</h1>
      <GradientLine />
		<img src={Paper} className={styles.paper}alt="Publication"/>
		<SolidButton label='Read More'onClick={handleClick}/>
      </div>
  );
};

export default Publications;
