import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import Nav from '../Navbar/Navbar'
import Flask from '../../Assets/Images/Flask.png'
import Logo from '../../Assets/Images/Logo.png'
import Logo2 from '../../Assets/Images/MomoStudios.png'

const Header = () => {
	const navigate = useNavigate()

	return (
		<div>
			<div className={styles.header}>
						<div className={styles.loader} onClick={() => navigate('/')} >
							<img src={Flask} className={styles.loader}alt="Flask"/>
							<img src={Logo2} className={styles.logo2} alt='Logo'/>
						</div>				
				<Nav/>
			</div>
		</div>
	)
}

export default Header