import { Sparkles, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="vision section" id="vision">
      <div className="container">
        <div className="sectionBadge center">
          Our Purpose
        </div>

        <h2>
          Our Vision <span>&</span> Mission
        </h2>

        <div className="visionGrid">
          {/* Mission */}
          <div className="glassCard">
            <div className="bigIcon">
              <Target />
            </div>

            <div>
              <h3>Our Mission</h3>

              <h4>Help Every Student Learn With Confidence.</h4>

              <p>
                Make academic learning more accessible, personalized, and
                effective—helping students understand their subjects, practice
                consistently, recognize learning gaps, and move forward.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="glassCard">
            <div className="bigIcon tealIcon">
              <Sparkles />
            </div>

            <div>
              <h3>Our Vision</h3>

              <h4>A World Where Learning Opens More Doors.</h4>

              <p>
                Build strong foundations, discover interests, and develop the
                confidence to navigate a changing world.
              </p>

              <p>
                We want learning to become more responsive to individual
                needs, while encouraging questions, practice, reflection, and
                exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
