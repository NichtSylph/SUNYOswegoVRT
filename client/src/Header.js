import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <a href="https://ww1.oswego.edu/" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/resources/pngs/SUNYOswegoLogoGreen.png`} alt="SUNY Oswego Logo" className="header-logo" />
      </a>
    </div>
    <div className="header-title-bar">
      <div className="vertical-bar"></div>
      <h1 className="header-title">SUNY OSWEGO VIRTUAL TOUR MAP</h1>
    </div>
  </header>
);

export default Header;