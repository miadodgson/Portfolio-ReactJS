import React from 'react'
import styles from './LandingPage.module.css'

const RightContent = () => {

return (
	<div className={styles.rightContent}>
		<h1 className={styles.h1}> About Me
		</h1>
		<hr className={styles.gradientLine}/>
		<br/>
		<h2 className={styles.h2}>A biochemist with a passion for molecular biology, medicine, and sustainability.
		</h2>
	</div>
	)
}

export default RightContent