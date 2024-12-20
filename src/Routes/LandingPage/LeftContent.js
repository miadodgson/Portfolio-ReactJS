import React from 'react'
import '../../TopLevel/App/App.css'
import CustomButton from '../../CustomButton'
import './LandingPage.css'
import img from '../../Assets/Images/MyImage.png'

const LeftContent = () => {

const handleClick = () => {
    alert('Button clicked!');
  };

return (
	<div className="left-content">
		<img src={img} alt="image" className="profile-image" />
		<h1 className="job-title" > Biochemistry Researcher
		</h1>
		<CustomButton label="Email Me" onClick={handleClick} />
	</div>
	)
}

export default LeftContent