import React, { Children, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Favicon from '/Favicon.svg'
import './App.css'

function App() {

  return (
    <>
    <main className="container">
        <Header />
        <Navigation />
      </main>
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
          <span className="img" aria-label="Photo of Nzubechukwu" role="profile_img"></span>
          {/* <img src="profile-pic.jpg" alt="profile_Img" /> */}

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
        <section className="navigation_list_container">{renderedPages[currentNavigation]}</section>
      </section>
    </>
  );
}

function About()  {
  return (
    <div className="about_container">
      <h3 className="about_heading">Hello there! 👋, </h3>

      <br />

      <p className="about_text">&nbsp; &nbsp; My name is Nzubechukwu P. Beluonwu-Ogbo and I am a UX Engineer, <br /> 
        A lifelong learner eager to try out new things to drive business growth and creating amazing experience for users.
      </p>

      <br />
      <br />

      <div className="xP_detail">
        <p className="xP_text">
        &nbsp; &nbsp; I have gained over 3+ years of experience and proficiency working with various front-end/web frameworks building top-level Web Apps and features.
        </p>
      </div>
    </div>
  );
}

function ShowCase()  {
  return (
    <div className="showcase_container">ShowCase</div>
  );
}

function Contact()  {
  return (
    <div className="contact_container">Contact</div>
  );
}

function Blog()  {
  return (
    <div className="blog_container">Blog</div>
  );
}

export default App
