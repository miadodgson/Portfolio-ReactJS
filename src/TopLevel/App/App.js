import React from 'react';
import ReactDOM from 'react-dom';
import '../App/App.css';
import '../Body/Body.css'
import Header from '../Header/Header.js'
import Body from '../Body/Body.js'
import Footer from '../Footer/Footer.js'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
	  <div className="app">
	  <Router>
	  <Header />
	  <Body/>
	  </Router>
	<Footer/>
	</div>
  )
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);