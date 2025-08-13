// src/components/Hero.jsx
import React, { useState } from "react";
import "./Hero.css";
import About from "./About"; // Eğer About component ayrı dosyada ise

export default function Hero() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img
          src="https://via.placeholder.com/150"
          alt="Profil"
          className="hero-image"
        />
        <h1>Ahmet Emirhan Küçük</h1>
        <p>Yazılım mühendisliği öğrencisi</p>

        <div className="hero-buttons">
          <a
            href="https://github.com/aemirhan35"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmet-emirhan-k%C3%BC%C3%A7%C3%BCk-8700562a0/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <button onClick={() => setShowAbout(!showAbout)}>Hakkımda</button>
        </div>

        {/* About bölümü */}
        {showAbout && <About />}
      </div>
    </section>
  );
}
