"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    if (window.innerWidth > 500) {
      return; // Exit the function if viewport is more than 500px
    }
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <Image
            src="/mushroom-logo.jpg"
            width="100"
            height="100"
            alt="Mush - Home"
          />
        </a>

        <nav className={showNavbar ? "navbar active" : " navbar"} data-navbar>
          <button
            className="close-btn"
            aria-label="close menu"
            onClick={handleShowNavbar}
            data-nav-toggler
          >
            X
          </button>

          <a href="#" className="logo">
            <Image
              src="/mushroom-logo.jpg"
              width="100"
              height="100"
              alt="Mush Room - Home"
            />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item" onClick={handleShowNavbar}>
              <a href="#menu" className="navbar-link hover-underline">
                <span className="span">Menu</span>
              </a>
            </li>

            <li className="navbar-item" onClick={handleShowNavbar}>
              <a href="#rezerwuj" className="navbar-link hover-underline">
                <span className="span">Rezerwuj</span>
              </a>
            </li>

            <li className="navbar-item" onClick={handleShowNavbar}>
              <a href="#eventy" className="navbar-link hover-underline">
                <span className="span">Eventy</span>
              </a>
            </li>

            <li className="navbar-item" onClick={handleShowNavbar}>
              <a href="#contact" className="navbar-link hover-underline">
                <span className="span">Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        <a href="#rezerwuj" className="btn btn-secondary">
          <span className="text text-1">Rezerwuj</span>

          <span className="text text-2" aria-hidden="true">
            Rezerwuj
          </span>
        </a>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
          onClick={handleShowNavbar}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;
