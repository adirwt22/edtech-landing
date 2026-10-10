import { PenLine, BarChart3, TrendingUp } from "lucide-react";

const assessmentSteps = [
  {
    number: "01",
    icon: PenLine,
    title: "Practice",
    text: "Regular practice helps students strengthen their understanding and build consistency.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Assess",
    text: "Assessments help students see what they understand and where more attention is needed.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Improve",
    text: "Review and reflection help students work on gaps and move forward with greater confidence.",
  },
];

export default function AssessmentImprovement() {
  return (
    <section className="assessment section" id="assessment">
      <div className="container">

        <div className="assessmentHeader">
          <div className="sectionBadge center">
            Assessments & Improvement
          </div>

          <h2>
            Practice. Assess.
            <br />
            <span>Improve.</span>
          </h2>

          <p>
            Assessment is not just about marks. It is a way to understand
            progress and identify where learning needs more attention.
          </p>
        </div>

        <div className="assessmentFlow">
          {assessmentSteps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="assessmentStep" key={item.number}>

                <div className="assessmentTop">
                  <span>{item.number}</span>

                  <div className="assessmentIcon">
                    <Icon size={21} />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                {index !== assessmentSteps.length - 1 && (
                  <div className="assessmentConnector" />
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}