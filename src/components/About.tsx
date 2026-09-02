export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="sectionBadge">
          About Us
        </div>

        <h2>
          Built for learners who
          <br />
          <span>want to move forward.</span>
        </h2>

        <p className="lead">
          Our goal is simple: make high-quality learning
          accessible, practical, and engaging for everyone.
        </p>

        <div className="stats">
          <div>
            <strong>10K+</strong>
            <span>Learners</span>
          </div>

          <div>
            <strong>100+</strong>
            <span>Courses</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Expert Mentors</span>
          </div>

          <div>
            <strong>95%</strong>
            <span>Positive Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}