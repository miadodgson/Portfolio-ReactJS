import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Contact.js'
import LandingPage from './LandingPage.js'


const Body = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default Body