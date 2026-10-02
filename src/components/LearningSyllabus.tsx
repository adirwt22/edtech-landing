import { Lightbulb, Link2, ClipboardCheck } from "lucide-react";

const syllabusPoints = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Understand the Concept",
    text: "Learning goes beyond memorizing. Concepts are explained in ways that help students understand why something works.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connect With Real Life",
    text: "Where relevant, concepts are connected to examples and situations beyond the textbook.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Prepare for the Examination",
    text: "Learning stays aligned with syllabus requirements while supporting stronger preparation for board examinations.",
  },
];

export default function LearningSyllabus() {
  return (
    <section className="syllabus section" id="learning-syllabus">
      <div className="container">

        <div className="syllabusIntro">
          <div className="sectionBadge center">
            Learning Within the Syllabus
          </div>

          <h2>
            Understand.
            <span> Connect.</span>
            <br />
            Prepare.
          </h2>

          <p>
            Learning stays connected to the syllabus while helping students
            build deeper understanding and stronger examination readiness.
          </p>
        </div>

        <div className="learningJourney">
          {syllabusPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="journeyItem" key={item.number}>

                <div className="journeyNumber">
                  {item.number}
                </div>

                <div className="journeyIcon">
                  <Icon size={22} />
                </div>

                <div className="journeyContent">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                {index !== syllabusPoints.length - 1 && (
                  <div className="journeyLine" />
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}