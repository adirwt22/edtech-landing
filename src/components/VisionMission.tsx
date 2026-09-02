import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="vision-mission-section" id="vision-mission">
      <div className="vision-mission-container">

        <div className="vision-mission-heading">
          <span className="section-badge">Our Purpose</span>

          <h2>
            Vision & <span>Mission</span>
          </h2>

          <p>
            We are committed to creating a smarter and more accessible
            learning environment where every learner can grow, improve,
            and achieve their goals.
          </p>
        </div>

        <div className="vision-mission-grid">

          {/* Vision */}
          <div className="vision-mission-card">
            <div className="vm-icon">
              👁️
            </div>

            <div>
              <h3>Our Vision</h3>

              <p>
                To become a trusted learning platform that empowers
                students and professionals with quality education,
                practical knowledge, and the skills needed to succeed
                in a rapidly changing world.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="vision-mission-card">
            <div className="vm-icon">
              🎯
            </div>

            <div>
              <h3>Our Mission</h3>

              <p>
                Our mission is to provide engaging courses, expert
                guidance, practical resources, and a learner-focused
                experience that makes education simple, effective,
                and accessible to everyone.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;