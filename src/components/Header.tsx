
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/sutra-edu-logo.svg";

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Sutra Edu Home">
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

  const closeMenu = () => setMenu(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#academic-experience" },
    { label: "Features", href: "#learning-approach" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="header container">
      <Logo />

      <nav
        className={menu ? "nav active" : "nav"}
        id="main-navigation"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>

      
<a
  href="#start-learning"
  className="button smallButton headerCTA"
  onClick={closeMenu}
>
  Get Started
  <ArrowRight size={16} />
</a>


      <button
        type="button"
        className="menuButton"
        onClick={() => setMenu((prev) => !prev)}
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
        aria-controls="main-navigation"
      >
        {menu ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
}
