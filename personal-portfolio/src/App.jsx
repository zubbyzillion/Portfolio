import React, { useState } from 'react'
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
  const [navigation, setNavigation] = useState(true);
  // const [selectedOption, setSelectedOptionchange] = useState(null);



  // const selectedOptionChange = (e) => {
  //   setSelectedOption(e.innerHTML);
  // };

  function handleNavigation() {
    // e.innerHTML();

    setNavigation(!navigation) ? "" : true;

    // checked === true ? setNavigation(() => "checked") : setNavigation("");

    // {setNavigation(navigation === true ? navigation === false : "")}

    // setNavigation(navigation => !navigation);
    // navigation === true ? setNavigation(() => "checked") : setNavigation("");
  }

  console.log(navigation);
  console.log(setNavigation);

  const selectedInput = (e) => {
    // (navigation === "input") ? selectedInput === true : null ;
    setNavigation(e.target.value)
    navigation === setNavigation(e.target.value) ? "" : !navigation ;
  }

  console.log(setNavigation);

  return (
    <div className="navigation_list_section">
      <div className="navigation_list">
      {/* <button key="about" onClick={handleNavigation} className= {navigation ? "btn_navigation_active" : ""} id="#About">
          <li className="navigation_active_list" id="#About">About</li>
        </button> */}

        {/* onChange={(e) => setNavigation(e.target.value)} */}

        <div className="navigation_data_list_w">
          <div className="active">
            <a href="/about" id="#about">About</a>
          </div>

          <div >
            <a href="/showcase" id="#showcase">ShowCase</a>
          </div>

          <div >
            <a href="/contact" id="#contact">Contact</a>
          </div>

          <div >
            <a href="/blog" id="#blog">Blog</a>
          </div>
        </div>
      </div>
    </div>
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
