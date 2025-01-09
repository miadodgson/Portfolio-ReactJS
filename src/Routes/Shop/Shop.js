import React from 'react'
import styles from './Shop.module.css'
import Painting from '../../Assets/Images/Painting.png'

const Shop = () => {
  return (
    <div>
		<img src={Painting} className={styles.painting} alt='Painting'/>
		<p className={styles.p}> $20 </p>
    </div>
  );
};

export default Shop