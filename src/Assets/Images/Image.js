import React from 'react';
import './Image.css'
import img from './MyImage.png'

function Image() {
	
console.log(Image)

return (
	<div className="image">
		<img src={img} alt="image" height={250}/>
	</div>
	)
}

	
export default Image