import React from 'react'
import '../../TopLevel/App/App.css'
import Image from '../../Image.js'
import '../../Image.css'
import Title from '../../Title.js'
import CustomButton from '../../CustomButton'

const LeftContent = () => {

const handleClick = () => {
    alert('Button clicked!');
  };

return (
	<div className="left-content">
		<Image />
		<Title />
	<CustomButton label="Email Me" onClick={handleClick} />
	<a href='mailto:mddodgson@mun.ca'>mddodgson@mun.ca</a>
	</div>
	)
}

export default LeftContent