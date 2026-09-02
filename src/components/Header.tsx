import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

function Logo() {
  return (
    <div className="logo">
      <div className="logoIcon">
        <GraduationCap size={25} />
      </div>

      <div>
        <strong>EdTech</strong>
        <span>Learn Anytime, Anywhere.</span>
      </div>
    </div>
  );
}

export default function Header() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="header container">
      <Logo />

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

      <a href="#contact" className="button smallButton">
        Get Started
        <ArrowRight size={15} />
      </a>

      <button
        className="menuButton"
        onClick={() => setMenu(!menu)}
        aria-label="Toggle menu"
      >
        {menu ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}