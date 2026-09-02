import { GraduationCap } from "lucide-react";

function FooterLogo() {
  return (
    <div className="logo">
      <div className="logoIcon">
        <GraduationCap size={22} />
      </div>

      <div>
        <strong>EdTech</strong>
        <span>Learn Anytime, Anywhere.</span>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footerGrid">
        <div>
          <FooterLogo />

          <p>
            Empowering learners worldwide
            <br />
            with quality education.
          </p>

          <div className="socials">
            <span>f</span>
            <span>𝕏</span>
            <span>▶</span>
            <span>in</span>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#courses">Courses</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Support</h4>

          <a href="#contact">Help Center</a>
          <a href="#contact">FAQs</a>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
        </div>

        <div>
          <h4>Contact Us</h4>

          <p>✉ hello@edtech.com</p>
          <p>☎ +91 12345 67890</p>
          <p>
            ⌖ 123 Education Street,
            <br />
            Learning City, India
          </p>
        </div>
      </div>

      <div className="copyright">
        © 2026 EdTech. All rights reserved.
      </div>
    </footer>
  );
}