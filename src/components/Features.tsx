import { Bell, GraduationCap, ShieldCheck } from "lucide-react";

export default function DownloadApp() {
  return (
    <section className="download section">
      <div className="container downloadGrid">
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
            <button>
              <strong>▶</strong>

              <span>
                <small>COMING SOON ON</small>
                Google Play
              </span>
            </button>

            <button>
              <strong>●</strong>

              <span>
                <small>COMING SOON ON</small>
                App Store
              </span>
            </button>
          </div>
        </div>

        <div className="downloadPhone">
          <div className="simplePhone">
            <div className="notch" />

            <div className="appLogo">
              <GraduationCap size={45} />

              <b>EdTech</b>

              <small>
                Learn Anytime,
                <br />
                Anywhere.
              </small>
            </div>
          </div>

          <div className="downloadBubble bubbleOne">
            <Bell size={18} />
          </div>

          <div className="downloadBubble bubbleTwo">
            <ShieldCheck size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}