import React, { useState } from "react";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="header d-flex justify-content-between align-items-center">
      <div
        className={`left-nav d-flex align-items-center ${
          location.pathname === "/" ? "active" : ""
        }`}
        onClick={() => handleNavigation("/")}
      >
        <FaCode size={50} color="white" />
        <p className="text-white lumora">Lumora</p>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes size={25} color="white" />
        ) : (
          <FaBars size={25} color="white" />
        )}
      </button>

      <div className={`main d-flex align-items-center gap-4 ${isMenuOpen ? "show" : ""}`}>
        <div
          className={`center-logo ${
            location.pathname === "/main/html" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/main/html")}
        >
          <FaHtml5 size={25} color="#E34F26" />
          <span className="text-white">HTML</span>
        </div>

        <div
          className={`center-logo ${
            location.pathname === "/main/css" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/main/css")}
        >
          <FaCss3Alt size={25} color="#1572B6" />
          <span className="text-white">CSS</span>
        </div>

        <div
          className={`center-logo ${
            location.pathname === "/main/bootstrap" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/main/bootstrap")}
        >
          <FaBootstrap size={25} color="#7952B3" />
          <span className="text-white">Bootstrap</span>
        </div>

        <div
          className={`center-logo ${
            location.pathname === "/main/js" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/main/js")}
        >
          <FaJsSquare size={25} color="#F7DF1E" />
          <span className="text-white">JS</span>
        </div>

        <div
          className={`center-logo ${
            location.pathname === "/main/react" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/main/react")}
        >
          <FaReact size={25} color="#61DAFB" />
          <span className="text-white">React</span>
        </div>

        <div
          className={`center-logo ${
            location.pathname === "/main/mongo" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/main/mongo")}
        >
          <CiDatabase size={25} color="#47A248" />
          <span className="text-white">MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Header;