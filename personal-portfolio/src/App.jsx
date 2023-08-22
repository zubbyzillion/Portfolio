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
        <button key="about" onClick={handleNavigation} className= {navigation ? "btn_navigation_active" : ""} id="#About">
          <li className="navigation_active_list" id="#About">About</li>
        </button>
        <button key="showcase" onClick={handleNavigation} className={navigation ? "btn_navigation_active" : ""} id="#Showcase">
          <li className="active" id="#Showcase">Showcase</li>
        </button>
        <button key="contact" onClick={handleNavigation} className={navigation ? "btn_navigation_active" : ""} id="#Contact">
          <li className="active" id="#Contact">Contact</li>
        </button>
        <button key="blog" onClick={handleNavigation} className={navigation ? "btn_navigation_active" : ""} id="#Blog">
          <li className="active" id="#Blog">Blog</li>
        </button>
      </div>
    </div>
  );
}

export default App
