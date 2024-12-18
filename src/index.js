import React from 'react'
import ReactDOM from 'react-dom'
import App from './TopLevel/App/App.js'
import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function Index() {
	
return (
    <StrictMode>
        <Router>
            <App className='app' />  
        </Router>
    </StrictMode>
)
}

export default Index

ReactDOM.render(<App />, document.getElementById('root'))

