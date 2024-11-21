import { Route, Routes } from 'react-router-dom'
import '../App/App.css'
import Contact from '../../Routes/Contact/Contact.js'
import LandingPage from '../../Routes/LandingPage/LandingPage.js'

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/Contact' element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default Body