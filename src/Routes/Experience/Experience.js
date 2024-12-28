import React from 'react'
import styles from './Experience.module.css'
import SkillCard from '../../Components/SkillCard/SkillCard.js'

const Experience = () => {


return (
	<div>
		<h1 className={styles.h1}> Experience </h1>
		<h2 className={styles.gradientLine}/>
		<br/>
		<SkillCard />
	</div>
	)
}


export default Experience