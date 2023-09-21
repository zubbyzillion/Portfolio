import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Favicon from '/Favicon.svg'
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
  const [navigation, setNavigation] = useState(true);
  const id = [ "about", "showcase", "contact", "blog" ];
  // const [selectedOption, setSelectedOption] = useState(null);

  // navigation === selectedOption;

  function toggleHandle(event, id) {
    // console.log(event.target)
    console.log(id);
  }

  // console.log(toggleHandle);

  return (
    <div className="navigation_list_section">
      <div className="navigation_list">
        <div className="navigation_data_list_w">
          <div id={id} className={navigation ? "active" : ""} onClick={toggleHandle}>
            <a href="/about" id="#about">About</a>
          </div>

          <div id={id} className={navigation ? "active" : ""} onClick={toggleHandle}>
            <a href="/showcase" id="#showcase">ShowCase</a>
          </div>

          <div id={id} className={navigation ? "active" : ""} onClick={toggleHandle}>
            <a href="/contact" id="#contact">Contact</a>
          </div>

          <div id={id} className={navigation ? "active" : ""} onClick={toggleHandle}>
            <a href="/blog" id="#blog">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function About()  {
  return (
    <div>About</div>
  );
}

function ShowCase()  {
  return (
    <div>ShowCase</div>
  );
}

function Contact()  {
  return (
    <div>Contact</div>
  );
}

function Blog()  {
  return (
    <div>Blog</div>
  );
}

{/* <input key="about" type="radio" name="navaigation_data_list" value="about" id="#About" checked={navigation} />
<label htmlFor="about" onClick={handleNavigation}>About</label>

<input key="showcase" type="radio" name="navaigation_data_list" value="showcase" id="#ShowCase" checked={navigation} />
<label htmlFor="showcase" onClick={handleNavigation}>ShowCase</label>

<input key="contact" type="radio" name="navaigation_data_list" value="contact" id="#Contact" checked={navigation} />
<label htmlFor="contact" onClick={handleNavigation}>Contact</label>

<input key="blog" type="radio" name="navaigation_data_list" value="blog" id="#Blog" checked={navigation} />
<label htmlFor="blog" onClick={handleNavigation}>Blog</label> */}

export default App
