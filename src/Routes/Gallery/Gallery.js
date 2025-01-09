import React from 'react'
import styles from './Gallery.module.css'
import GalleryTitle from '../../Assets/Images/Gallery.png'

const Gallery = () => {


return (
	<div>
		<img src={GalleryTitle} className={styles.gallery} alt='Gallery' />
		<br/>
	</div>
	)
}


export default Gallery