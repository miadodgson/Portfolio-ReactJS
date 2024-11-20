import React from 'react'
import './App.css'
import Image from './Image.js'
import './Image.css'
import CustomButton from './CustomButton'

const Contact = () => {

const handleClick = () => {
    alert('Button clicked!');
  };

return (
	<div>
		<Image className="image" />
	<CustomButton label="Email Me" onClick={handleClick} />
	<a href='mailto:mddodgson@mun.ca'>mddodgson@mun.ca</a>
	</div>
	)
}

export default Contact