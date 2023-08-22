import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Favicon from '/Favicon.svg'
import './App.css'

function App() {

  return (
    <>
      <Header />
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

export default App
