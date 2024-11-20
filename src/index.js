import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'
import './App.js'
import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function Index() {
	
return (
    <StrictMode>
        <Router>
            <App />  
        </Router>
    </StrictMode>
)
}

export default Index

ReactDOM.render(<App />, document.getElementById('root'))

