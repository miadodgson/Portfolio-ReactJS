import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import Nav from '../Navbar/Navbar'

const Header = () => {
	const navigate = useNavigate()

	return (
		<div>
			<div className={styles.header}>
						<div className={styles.loader} onClick={() => navigate('/')} ></div>				
				<Nav/>
			</div>
		</div>
	)
}

export default Header