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
  const [navigation, setNavigation] = useState(true);
  const [selectedOption, setSelectedOptionchange] = useState(null);
  // const [isActive, setActive] = useState(false);


  const selectedOptionChange = (e) => {
    setSelectedOption(e.innerHTML);
  };

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
  // console.log(isActive);

  return (
    <div className="navigation_list_section">
      <div className="navigation_list">
      {/* <button key="about" onClick={handleNavigation} className= {navigation ? "btn_navigation_active" : ""} id="#About">
          <li className="navigation_active_list" id="#About">About</li>
        </button> */}
        <div className="navigation_data_list_w">
          <input type="radio" name="navaigation_data_list" value="about" id="#About" className="active" checked={navigation} onChange={handleNavigation} />
          <label for="about" onClick={ handleNavigation }>About</label>

          <input type="radio" name="navaigation_data_list" value="showcase" id="#ShowCase" className="active" checked={navigation} onChange={handleNavigation} />
          <label for="showcase" onClick={ handleNavigation }>ShowCase</label>

          <input type="radio" name="navaigation_data_list" value="contact" id="#Contact" className="active" checked={navigation} onChange={handleNavigation} />
          <label for="contact" onClick={ handleNavigation }>Contact</label>
          
          <input type="radio" name="navaigation_data_list" value="blog" id="#Blog" className="active" checked={navigation} onChange={handleNavigation} />
          <label for="blog" onClick={ handleNavigation }>Blog</label>
        </div>
      </div>
    </div>
  );
}

export default App
