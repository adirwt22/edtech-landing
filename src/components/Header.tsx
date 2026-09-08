import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/sutra-edu-logo.svg";

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Sutra Edu">
      <img
        src={logo}
        alt="Sutra Edu"
        className="logoImage"
      />

      <div className="logoText">
        <strong>
          Sutra <span>Edu</span>
        </strong>
        <small>Learn Anytime, Anywhere.</small>
      </div>
    </a>
  );
}

export default function Header() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="header container">
      {/* Logo */}
      <Logo />

      {/* Desktop / Mobile Navigation */}
      <nav className={menu ? "nav active" : "nav"}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About Us
        </a>

        <a href="#courses" onClick={closeMenu}>
          Courses
        </a>

        <a href="#features" onClick={closeMenu}>
          Features
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="button smallButton headerCTA"
        onClick={closeMenu}
      >
        Get Started
        <ArrowRight size={16} />
      </a>

      {/* Mobile Menu Button */}
      <button
        className="menuButton"
        onClick={() => setMenu(!menu)}
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
      >
        {menu ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
}