
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="finalCta section" id="start-learning">
      <div className="container">
        <div className="finalCtaContent">
          <div className="finalCtaBadge">
            <Sparkles size={15} />
            <span>Your Next Chapter Starts Here</span>
          </div>

          <h2>
            Start Your Learning
            <br />
            <span>Journey.</span>
          </h2>

          <p className="finalCtaDescription">
            Explore your subjects, strengthen your understanding,
            practice with purpose, and take your next step with Sutra Edu.
          </p>

          <div className="finalCtaActions">
            <a className="finalCtaPrimary" href="#learning-approach">
              Explore Sutra Edu
              <ArrowRight size={18} />
            </a>

            <a className="finalCtaSecondary" href="#about">
              Begin Your Learning Journey
            </a>
          </div>
        </div>

        <div className="finalCtaFooterLine">
          <span />
          <p>
            Academic foundations today.
            <strong> Greater possibilities for tomorrow.</strong>
          </p>
          <span />
        </div>
      </div>
    </section>
  );
}
