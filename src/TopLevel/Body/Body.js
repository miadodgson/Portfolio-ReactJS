import { Route, Routes } from 'react-router-dom'
import styles from './Body.module.css'
import Contact from '../../Routes/Contact/Contact.js'
import LandingPage from '../../Routes/LandingPage/LandingPage.js'
import Shop from '../../Routes/Shop/Shop.js'
import Gallery from '../../Routes/Gallery/Gallery.js'


const Body = () => {
    return (
        <div className={styles.bodyContentContainer}> 
            <Routes>
                <Route path='/' element={<LandingPage />}/>
				<Route path='/Shop' element={<Shop />}/>
				<Route path='/Gallery' element={<Gallery />}/>
                <Route path='/Contact' element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default Body