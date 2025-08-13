import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">ahmet emirhan</div>
      <ul className="nav-links">
        <li><a href="#hero">Ana Sayfa</a></li>
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#projects">Projeler</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>
  );
}
