import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/sutra-edu-logo.svg";

function FooterLogo() {
  return (
    <a href="#home" className="footerLogo" aria-label="Sutra Edu Home">
      <img
        src={logo}
        alt="Sutra Edu"
        className="footerLogoImage"
      />

      <div className="footerLogoText">
        <strong>
          Sutra <span>Edu</span>
        </strong>

        <small>Learn Anytime, Anywhere.</small>
      </div>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footerGrid">

        {/* Brand */}
        <div className="footerBrand">
          <FooterLogo />

          <p>
            Empowering learners worldwide
            <br />
            with quality education.
          </p>

          <div className="socials">
            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="X">
              𝕏
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footerColumn">
          <h4>Quick Links</h4>

           <a href="#home">Home</a>
  <a href="#about">About Us</a>
  <a href="#our-story">Our Story</a>
  <a href="#academic-experience">Courses</a>
  <a href="#learning-approach">Features</a>
  <a href="#vision">Our Vision & Mission</a>
  <a href="#contact">Contact</a>
        </div>

        {/* Support */}
        <div className="footerColumn">
          <h4>Support</h4>

          <a href="#contact">Help Center</a>
          <a href="#contact">FAQs</a>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
        </div>

        {/* Contact */}
        <div className="footerColumn footerContact">
          <h4>Contact Us</h4>

          <a href="mailto:hello@sutraedu.com">
            <Mail size={13} />
            <span>hello@sutraedu.com</span>
          </a>

          <a href="tel:+911234567890">
            <Phone size={13} />
            <span>+91 12345 67890</span>
          </a>

          <p>
            <MapPin size={14} />
            <span>
              123 Education Street,
              <br />
              Learning City, India
            </span>
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="copyright">
        © {new Date().getFullYear()} Sutra Edu. All rights reserved.
      </div>
    </footer>
  );
}