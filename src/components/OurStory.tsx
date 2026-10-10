
export default function OurStory() {
  return (
    <section className="ourStory section" id="our-story">
      <div className="container">
        <div className="ourStoryGrid">
          <div className="ourStoryContent">
            <div className="sectionBadge">
              Our Story
            </div>

            <h2>
              What If Learning Could
              <br />
              <span>Keep Up With the Learner?</span>
            </h2>

            <p>
              A classroom follows a schedule. A learner’s questions
              do not always follow one.
            </p>

            <p>
              A topic may need another explanation. A missed lesson
              may need to be revisited. A student may understand an
              idea but still need practice to apply it.
            </p>

            <p>
              Sutra Edu is being built around a learning experience
              that helps students understand, practice, reflect,
              and move forward.
            </p>
          </div>

          <div className="ourStoryVisual">
            <span className="ourStoryLabel">
              THE LEARNING JOURNEY
            </span>

            <div className="storyLine">
              <div className="storyPoint">
                <span className="storyDot">01</span>
                <div>
                  <h3>Understand</h3>
                  <p>Make sense of new concepts.</p>
                </div>
              </div>

              <div className="storyPoint">
                <span className="storyDot">02</span>
                <div>
                  <h3>Practice</h3>
                  <p>Build confidence through practice.</p>
                </div>
              </div>

              <div className="storyPoint">
                <span className="storyDot">03</span>
                <div>
                  <h3>Move Forward</h3>
                  <p>Reflect, improve, and explore further.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
