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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);