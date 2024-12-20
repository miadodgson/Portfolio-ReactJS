import React from 'react'
import styles from './LandingPage.module.css'
import AboutMe from '../AboutMe/AboutMe'

const RightContent = () => {

return (
	<div className={styles.rightContent}>
		<AboutMe />
	</div>
	)
}

export default RightContent