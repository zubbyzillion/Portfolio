import React, { Children, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Favicon from '/Favicon.svg'
import './App.css'

function App() {

  return (
    <>
      <Preloader />
      <Header />
      <Navigation />
    </>
  );
}

function Preloader() {
  // const tl = gsap.timeline();

  return (
    <section className="preloader">
      <div className="preloader_wrapper">
        <p className="p_display">
          <span className="p_name">Nzubechukwu .P Beluonwu-Ogbo</span>
          <span className="p_mark">&nbsp;| &nbsp;</span>
          <span className="p_role">UX Engineer</span>
        </p>
      </div>
    </section>
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

      <p className="about_text">&nbsp; &nbsp; My name is Nzubechukwu P. Beluonwu-Ogbo, a 
       lifelong learner eager to try out new things to drive business growth and creating 
        amazing experience for users. <br />
        I am a graduate of Electrical/Electronics Engineering at Abia State University. <br />
        I am a fun and goal-oriented team mate to work with and you would either find me playing the game of chess, writing codes or reading a book during my leisure time .
      </p>

      <br />

      <div className="branches">
        <div className="design_branch">
          <div>
            <h3>Design</h3>
            <p>Proficient at user interaction, design systems & UI/UX Engineering.</p>
          </div>
        </div>

        <span>+</span>

        <div className="code_branch">
          <div>
            <h3>Engineering</h3>
            <p>Proven experience building successful products for clients across several countries.</p>
          </div>
        </div>
      </div>

      <br />

      <article className="xP_detail">
        <p className="xP_text">
        &nbsp; &nbsp; I have gained over 2+ years of experience and proficiency building 
        top-level Web Apps and features with various front-end/web frameworks.
        
        <br />

        &nbsp; &nbsp; Merging my experience from creating design to writing codes I strive to 
        always create a long-lasting positive experience in the mind of the user which does equal to a good product which the user loves💞.
        </p>
      </article>
    </div>
  );
}

function ShowCase()  {
  return (
    <div className="showcase_container">
      <div className="showcase_heading">
        <h3 className="showcase_title">Design + Engineering</h3>
        <span>Below are collections of projects and ideas I have worked on💡.</span>
      </div>

      <div className="showcase_gallery">
        <div className="gallery_container">
          <a href="/#" target='blank'>
            <figure className="gallery_1" aria-label="AGI Website Redesign"></figure>
          </a>

          <div className="gallery_content">
            <div className="gallery_label_section">
              <div>
                <span className="gallery_label">Figma</span>
                <span className="gallery_label">ReactJS</span>
              </div>
              <div>
                <span>Visit Site</span>
                <span>View Figma File</span>
              </div>
            </div>

            <div className="gallery_description_section">
              <p className="gallery_description_text">
                A research-based project built as an MVP for a startup. A research-based project built as an MVP for a startup.
              </p>
            </div>
          </div>
        </div>

        <div className="gallery_container">
          <a href="/#" target='blank'>
            <figure className="gallery_1" aria-label="AGI Website Redesign"></figure>
          </a>

          <div className="gallery_content">
            <div className="gallery_label_section">
              <div>
                <span className="gallery_label">Figma</span>
                <span className="gallery_label">ReactJS</span>
              </div>
              <div>
                <span>Visit Site</span>
                <span>View Figma File</span>
              </div>
            </div>

            <div className="gallery_description_section">
              <p className="gallery_description_text">
                A research-based project built as an MVP for a startup. A research-based project built as an MVP for a startup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowCaseList() {
  return (
    <h3>ShowCase List</h3>
  )
}

function Contact()  {
  return (
    <div className="contact_container">
      <h3 className="contact_heading">You can find me here</h3>
      <span>Hey Don't be a stranger, send a DM😎.</span>
    </div>
  );
}

function Blog()  {
  return (
    <div className="blog_container">
      <h3>Coming Soon!!!.</h3>
      Watch out for this Space🚀🚀🚀
    </div>
  );
}

export default App
