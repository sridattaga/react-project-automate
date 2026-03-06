import React from 'react';

function Header() {
  return (
    <header className="fs-header">
      <div className="fs-header__brand">
        <span className="fs-header__logo">🌸</span>
        <div>
          <h1 className="fs-header__title">Venky&apos;s Flower shop are wonderful and ugly </h1>
          <p className="fs-header__subtitle">Fresh blooms and , delivered with love  everyone </p>
        </div>
      </div>
      <nav className="fs-header__nav">
        <a href="#home">Home</a>
        <a href="#bouquets">Bouquets</a>
        <a href="#about">Aboutcjj</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
