import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Image from './Image.js'
import CustomButton from './CustomButton'

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <table className="left-sidebar-tables">
        <tbody>
          <tr>
            <td colSpan="2" className="header">Maria Dodgson</td>
          </tr>
          <tr>
            <td className="left-sidebar">
			  <Image/>
              Biochemistry Researcher
              <h1 style={{display: 'flex',  justifyContent:'center', fontSize:'20px',alignItems:'center', height: '1vh'}}>
	            Email Me
	          </h1>
              <CustomButton label="mddodgson@mun.ca" onClick={handleClick}/>
            </td>
            <td className="main-content">Main content</td>
          </tr>
          <tr>
            <td colSpan="2" className="footer">Footer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
