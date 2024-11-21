import React from 'react';
import ReactDOM from 'react-dom';
import '../App/App.css';
import '../Body/Body.css'
import Header from '../Header/Header.js'
import Body from '../Body/Body.js'
import Footer from '../Footer/Footer.js'
import { BrowserRouter as Router } from 'react-router-dom'
import img from '../../Assets/Images/Background.png'

  const background = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"}

function App() {
  return (
	  <div className="app">
	  <div style={background}>
	  <Router>
	  <Header/>
	  <Body/>
	  </Router>
	<Footer/>
	</div>
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
