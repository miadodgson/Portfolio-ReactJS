import React from 'react';
import ReactDOM from 'react-dom';
import '../App/App.css';
import '../Body/Body.css'
import Header from '../Header/Header.js'
import Body from '../Body/Body.js'
import Footer from '../Footer/Footer.js'


function App() {
  return (
	<div className="app">
		<Header />
	  	<Body/>
		<Footer/>
	</div>
  )
}

export default App;