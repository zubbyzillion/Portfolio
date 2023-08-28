import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Favicon from '/Favicon.svg'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Navigation />
    </>
  );
}

function Header() {

  const userName = "Princewill Beluonwu-Ogbo";
  const usernameDescription = "UX Engineer";

  return (
    <header>
      <div className="profile_card">
        <div className="profile_card_info">
          <img src="profile-pic.jpg" alt="profile_Img" />

          <div>
            <h3> {userName} </h3>
            <p> {usernameDescription} </p>
          </div>
        </div>

        <div className="resume_btn">
          <a href="/resume" className="resume_btn_link">Download Resume</a>
        </div>
      </div>
    </header>
  );
}

function Navigation() {
  const [navigation, setNavigation] = useState(false);
  // const [selectedOption, setSelectedOptionchange] = useState(null);
  // const [isActive, setActive] = useState(false);


  return (
    <div className="navigation_list_section">
      <div className="navigation_list">
      {/* <button key="about" onClick={handleNavigation} className= {navigation ? "btn_navigation_active" : ""} id="#About">
          <li className="navigation_active_list" id="#About">About</li>
        </button> */}
        <div className="navigation_data_list_w">
          <input key="about" type="radio" name="navaigation_data_list" value="about" id="#About"  />
          <label htmlFor="about">About</label>

          <input key="showcase" type="radio" name="navaigation_data_list" value="showcase" id="#ShowCase" />
          <label htmlFor="showcase">ShowCase</label>

          <input key="contact" type="radio" name="navaigation_data_list" value="contact" id="#Contact" />
          <label htmlFor="contact">Contact</label>
          
          <input key="blog" type="radio" name="navaigation_data_list" value="blog" id="#Blog" />
          <label htmlFor="blog">Blog</label>
        </div>
      </div>
    </div>
  );
}

export default App
