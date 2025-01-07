import styles from './Resources.module.css';
import ReactIcon from '../../Assets/Images/React.svg'

const Resources = () => {
  return (
	    <div className={styles.container} >
			<img src={ReactIcon} className={styles.reactIcon} alt="React Icon"/>
			<a href="https://www.flaticon.com/free-icons/navigation" title="navigation icons">Navigation icons created by Freepik - Flaticon</a>

		</div>
	)
}


export default Resources