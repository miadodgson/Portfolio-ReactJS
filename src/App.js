import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './styles.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
	  <div className="app">
	  <Router>
	  <Header/>
	  <Body/>
	  </Router>
	<Footer/>
	  </div>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
