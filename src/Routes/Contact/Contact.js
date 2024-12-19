import React from 'react'
import './Contact.css'
import img from '../../Assets/ProfileImage.png'
import plant from '../../Assets/Images/Plant.png'
import Socials from '../../Components/Socials/Socials.jsx'

const Contact = () => {


return (
	<div>
		<img src={img} alt="image" height={250}/>
		<h1 className='h1'> Maria Dodgson 
		</h1>
		<h1 className='h1'> mddodgson@mun.ca 
		</h1>
		<h1 className='h1'> +1 709-687-7779
		</h1>
		<img src={plant} alt="plant" height={100}/>
		<Socials/>
	</div>
	)
}

export default Contact