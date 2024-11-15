import React from 'react'
import Header from './Header.js'
import Image from './Image.js'
import Title from './Title.js'
import CustomButton from './CustomButton'
import AboutMe from './AboutMe'
import './Line.css'

const LandingPage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
	  <Header/>
      <table className="left-sidebar-tables">
        <tbody>
          <tr>
            <td>
			</td>
          </tr>
          <tr>
            <td className="left-sidebar">
              <Image />
			  <Title />
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
