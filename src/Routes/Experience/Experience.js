import React from 'react'
import styles from './Experience.module.css'
import GradientLine from '../../Components/GradientLine/GradientLine.js'
import SkillCard from '../../Components/SkillCard/SkillCard.js'

const Experience = () => {


return (
	<div>
		<h1 className={styles.h1}> Research </h1>
		<GradientLine/>
		<br/>
		<SkillCard />
	</div>
	)
}


export default Experience