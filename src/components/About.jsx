import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section id="about" className="about-container">
      <div className="buttons">
        <button onClick={() => setShowAbout(!showAbout)}>
          Hakkımda
        </button>
      </div>

      <div className={`about-content ${showAbout ? "open" : ""}`}>
        <h2>Hakkımda</h2>
        <p>
          Merhaba! Ben Mehmet, yazılım geliştirme konusunda tutkulu bir
          öğrenciyim. Web teknolojileri, veritabanı yönetimi ve modern frontend
          framework'leri ile ilgileniyorum. Amacım kullanıcı dostu ve estetik
          arayüzler geliştirmek.
        </p>
        <p>
          Boş zamanlarımda yeni teknolojiler öğrenmeyi, proje geliştirmeyi ve
          teknoloji blogları okumayı severim.
        </p>
      </div>
    </section>
  );
}
