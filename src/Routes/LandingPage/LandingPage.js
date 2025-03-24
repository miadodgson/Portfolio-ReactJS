import React from 'react'
import LeftContent from '../../Routes/LandingPage/LeftContent.js'
import RightContent from '../../Routes/LandingPage/RightContent.js'
import styles from './LandingPage.module.css'


const LandingPage = () => {

  return (
	  <div className={styles.contentContainer}>
		  <LeftContent />
		  <RightContent />
    </div>
  )
}

export default LandingPage
