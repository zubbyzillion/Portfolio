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
      <div className="profile-card">
        <div className="profile-card-info">
          <img src="profile-pic.jpg" alt="profile-img" />

          <div>
            <h3> {userName} </h3>
            <p> {usernameDescription} </p>
          </div>
        </div>

        <div className="resume-btn">
          <a href="/resume" className="resume-btn-link">Download Resume</a>
        </div>
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <div className="navigation-list-section">
      <ul className="navigation-list">
        <button><li className="navigation-active" id="#About">About</li></button>
        <button><li className="active" id="#Showcase">Showcase</li></button>
        <button><li className="active" id="#Contact">Contact</li></button>
        <button><li className="active" id="#Blog">Blog</li></button>
      </ul>
    </div>
  );
}

export default App
