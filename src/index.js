import React from 'react'
import ReactDOM from 'react-dom'
import App from './TopLevel/App/App.js'
import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <StrictMode>
        <Router>
            <App />  
        </Router>
    </StrictMode>,
    document.getElementById('root'))
