import React from 'react'
import '../../TopLevel/App/App.css'
import Image from '../../Assets/Images/Image.js'
import '../../Assets/Images/Image.css'
import CustomButton from '../../CustomButton'

const LeftContent = () => {

const handleClick = () => {
    alert('Button clicked!');
  };

return (
	<div className="left-content">
		<Image />
		<h1 className="title" > Biochemistry Researcher
		</h1>
		<CustomButton label="Email Me" onClick={handleClick} />
	</div>
	)
}

export default LeftContent