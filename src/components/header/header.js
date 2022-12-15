import React from "react";
import "./header.css"
import instal from "./logo.png"
import insta from "./instacopy.png"

function Header() {
  return (
    <div>
      <nav className="header">
        <section className="clone">
          <img src={insta} alt="clone"></img>
        </section>
        <section className="icon">
          <a href="/upload">
          <img src={instal} alt="icon" ></img>
          </a>

        </section>
      </nav>
    </div>
  );
}

export default Header;
