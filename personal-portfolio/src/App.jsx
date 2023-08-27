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
  const [navigation, setNavigation] = useState("");
  // const [isActive, setActive] = useState(false);

  // function  activeNavigation() {
  //   // isActive= true;

  //   setActive(current => current);
  // }

  function handleNavigation() {
    // e.innerHTML();

    !navigation === true ? setNavigation(() => "btn_navigation_active") : setNavigation("");
    // setNavigation(navigation => !navigation);
  }

  console.log(navigation);
  // console.log(isActive);

  return (
    <div className="navigation_list_section">
      <div className="navigation_list">
      {/* <button key="about" onClick={handleNavigation} className= {navigation ? "btn_navigation_active" : ""} id="#About">
          <li className="navigation_active_list" id="#About">About</li>
        </button> */}
        <div className="navigation_data_list_w">
          <input type="radio" name="navaigation_data_list" value="about" id="#About" className="active" checked />
          <label for="about">About</label>
          <input type="radio" name="navaigation_data_list" value="about" id="#ShowCase" className="active" />
          <label for="showcase">ShowCase</label>
          <input type="radio" name="navaigation_data_list" value="about" id="#Contact" className="active" />
          <label for="contact">Contact</label>
          <input type="radio" name="navaigation_data_list" value="about" id="#Blog" className="active" />
          <label for="blog">Blog</label>
        </div>
      </div>
    </div>
  );
}

export default App
