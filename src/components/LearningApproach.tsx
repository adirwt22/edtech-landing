import {
  BookOpen,
  PencilLine,
  Search,
  RefreshCw,
  CheckCircle2,
  Compass,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Understand",
    text: "Build strong academic foundations.",
  },
  {
    number: "02",
    icon: PencilLine,
    title: "Practice",
    text: "Apply concepts through meaningful questions and activities.",
  },
  {
    number: "03",
    icon: Search,
    title: "Identify",
    text: "Recognize gaps, errors, and areas that need attention.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Improve",
    text: "Revisit concepts and strengthen understanding.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Apply",
    text: "Use knowledge in examination-style and practical contexts.",
  },
  {
    number: "06",
    icon: Compass,
    title: "Explore",
    text: "Develop curiosity about future learning opportunities.",
  },
];

export default function LearningApproach() {
  return (
    <section className="approach section" id="learning-approach">
      <div className="container">

        <div className="approachHeader">
          <div className="sectionBadge center">
            Our Learning Approach
          </div>

          <h2>
            Learn. Practice.
            <br />
            <span>Improve. Explore.</span>
          </h2>

          <p>
            A connected approach that helps students build understanding,
            strengthen their skills, and move forward with confidence.
          </p>
        </div>

        <div className="approachGrid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="approachCard" key={step.number}>
                <div className="approachTop">
                  <span>{step.number}</span>

                  <div className="approachIcon">
                    <Icon size={20} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}