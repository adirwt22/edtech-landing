import {
  Lightbulb,
  Link2,
  ClipboardCheck,
  ArrowDownRight,
} from "lucide-react";

const syllabusPoints = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Understand",
    highlight: "Build clarity.",
    text: "Understand concepts instead of simply memorizing facts.",
    tag: "CONCEPT CLARITY",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connect",
    highlight: "See the bigger picture.",
    text: "Connect classroom concepts with examples from everyday life.",
    tag: "REAL-WORLD LEARNING",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Prepare",
    highlight: "Learn with purpose.",
    text: "Strengthen subject knowledge and prepare for board examinations.",
    tag: "EXAM READINESS",
  },
];

export default function LearningSyllabus() {
  return (
    <section className="syllabus section" id="learning-syllabus">
      <div className="container">
        <div className="syllabusHeader">
          <div className="sectionBadge center">
            Learning Within the Syllabus
          </div>

          <h2>
            From Understanding
            <br />
            <span>to Application.</span>
          </h2>

          <p>
            Meaningful learning begins with clarity, grows through
            connections, and builds confidence for examinations.
          </p>
        </div>

        <div className="syllabusJourney">
          {syllabusPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="syllabusStep" key={item.number}>
                <div className="syllabusStepTop">
                  <span className="syllabusNumber">
                    {item.number}
                  </span>

                  <div className="syllabusIcon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="syllabusStepBody">
                  <span className="syllabusTag">{item.tag}</span>

                  <h3>{item.title}</h3>

                  <h4>{item.highlight}</h4>

                  <p>{item.text}</p>
                </div>

                {index < syllabusPoints.length - 1 && (
                  <div className="syllabusArrow" aria-hidden="true">
                    <ArrowDownRight size={20} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}