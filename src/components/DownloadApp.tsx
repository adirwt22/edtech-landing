import { Bell, ShieldCheck } from "lucide-react";
import logo from "../assets/sutra-edu-logo.svg";

export default function DownloadApp() {
  return (
    <section className="download section">
      <div className="container downloadGrid">

        {/* Left Content */}
        <div>
          <div className="sectionBadge">
            Stay Tuned
          </div>

          <h2>
            Download Our App
            <br />
            <span>Coming Soon!</span>
          </h2>

          <p className="downloadText">
            We are working hard to bring you the best learning
            experience on the go. Our app is coming soon!
          </p>

          <div className="storeButtons">
            <button type="button">
              <strong>▶</strong>

              <span>
                <small>COMING SOON ON</small>
                Google Play
              </span>
            </button>

            <button type="button">
              <strong>●</strong>

              <span>
                <small>COMING SOON ON</small>
                App Store
              </span>
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="downloadPhone">
          <div className="simplePhone">
            <div className="notch" />

            <div className="appLogo">
              <img
                src={logo}
                alt="Sutra Edu"
                className="downloadAppLogo"
              />
            </div>
          </div>

          {/* Floating Bell */}
          <div className="downloadBubble bubbleOne">
            <Bell size={18} />
          </div>

          {/* Floating Shield */}
          <div className="downloadBubble bubbleTwo">
            <ShieldCheck size={18} />
          </div>
        </div>

      </div>
    </section>
  );
}