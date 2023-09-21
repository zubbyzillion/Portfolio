import React, { Children, useState } from 'react'
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

const navigationPages = ["About", "ShowCase", "Contact", "Blog"]
function Navigation() {
  const [currentNavigation, setCurrentNavigation] = useState(navigationPages[0]);

  const renderedPages = {
    About: <About />,
    ShowCase: <ShowCase />,
    Contact: <Contact />,
    Blog: <Blog />,
  }

  return (
    <>
    <section className="navigation_list_section">
      <div className="navigation_list">
        <div className="navigation_data_list_w">
          {Children.toArray(
            navigationPages.map((nav) => {
                return (
                  <div key={nav}>
                    <input type="radio" id={nav} name="nav" onChange={() => setCurrentNavigation(nav)} />
                    <label htmlFor={nav} className={currentNavigation === nav ? "active" : null}> {nav} </label>
                  </div>
                )
              })
          )}
        </div>
      </div>
    </section>
    
    <section className="navigation_list_drawer">
      <section>{renderedPages[currentNavigation]}</section>
    </section>
    </>
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
