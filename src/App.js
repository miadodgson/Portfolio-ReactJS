import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import LandingPage from './LandingPage.js'

function App() { 
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
