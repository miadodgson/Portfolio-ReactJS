import React from 'react'
import CustomButton from '../../CustomButton'
import styles from './LandingPage.module.css'
import img from '../../Assets/Images/MyImage.png'

const LeftContent = () => {

const handleClick = () => {
    alert('Button clicked!');
  };

return (
	<div className={styles.leftContent}>
		<img src={img} alt="image" className={styles.profileImage}/>
		<h1 className={styles.jobTitle} > Biochemistry Researcher
		</h1>
		<CustomButton label="Email Me" onClick={handleClick} />
	</div>
	)
}

export default LeftContent