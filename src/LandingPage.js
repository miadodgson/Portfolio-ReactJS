import React from 'react'
import ReactDOM from 'react-dom'
import Image from './Image.js'
import CustomButton from './CustomButton'
import AboutMe from './AboutMe'
import './Line.css'

const LandingPage = () => {
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
              <Image />
              Biochemistry Researcher
              <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', alignItems: 'center', height: '1vh' }}>
                Email Me
              </h1>
              <CustomButton label="mddodgson@mun.ca" onClick={handleClick} />
            </td>
            <td className="main-content">
              <AboutMe />
              <hr />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="footer"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LandingPage
