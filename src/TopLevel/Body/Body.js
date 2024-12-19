import { Route, Routes } from 'react-router-dom'
import '../App/App.css'
import './Body.css'
import Contact from '../../Routes/Contact/Contact.js'
import LandingPage from '../../Routes/LandingPage/LandingPage.js'
import Education from '../../Routes/Education/Education.js'
import Experience from '../../Routes/Experience/Experience.js'
import Publications from '../../Routes/Publications/Publications.js'


const Body = () => {
    return (
        <div className='body-content-container'>
            <Routes>
                <Route path='/' element={<LandingPage />}/>
				<Route path='/Education' element={<Education />}/>
				<Route path='/Experience' element={<Experience />}/>
				<Route path='/Publications' element={<Publications />}/>
                <Route path='/Contact' element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default Body