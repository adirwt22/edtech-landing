import { Sparkles, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="vision section" id="courses">
      <div className="container">
        <div className="sectionBadge center">
          Our Purpose
        </div>

        <h2>
          Our Vision <span>&</span> Mission
        </h2>

        <div className="visionGrid">
          <div className="glassCard">
            <div className="bigIcon">
              <Target />
            </div>

            <div>
              <h3>Our Vision</h3>

              <p>
                To become a global leader in online education,
                empowering individuals to achieve their dreams
                through accessible and innovative learning.
              </p>
            </div>
          </div>

          <div className="glassCard">
            <div className="bigIcon tealIcon">
              <Sparkles />
            </div>

            <div>
              <h3>Our Mission</h3>

              <p>
                To provide high-quality, affordable, and flexible
                learning solutions that help students and
                professionals grow their skills and build better
                futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}