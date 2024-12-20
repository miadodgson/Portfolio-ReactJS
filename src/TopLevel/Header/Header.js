import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import Nav from '../Navbar/Navbar'
import img from '../../Assets/Images/BiochemistryLogo.png'

const Header = () => {
	const navigate = useNavigate()

	return (
		<div>
			<div className={styles.header}>
				<img
					src={img} 
					alt="biochemistry-logo"
					className={styles.biochemistryLogo}
					onClick={() => navigate('/')}
				/>
				<Nav/>
			</div>
		</div>
	)
}

export default Header