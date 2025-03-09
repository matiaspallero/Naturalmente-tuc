import React, { useState } from "react";
import "../style-component/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Naturalmente</a>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="/">Inicio</a>
        <a href="/about">Acerca de</a>
        <a href="/services">Servicios</a>
        <a href="/contact">Contacto</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
