import React from 'react'
import styles from './LandingPage.module.css'
import Painting from '../../Assets/Images/Painting.png'


const LandingPage = () => {

  return (
	  <div className={styles.contentContainer}>
			<img src={Painting} className={styles.painting} alt='Painting'/>
    </div>
  )
}

export default LandingPage
