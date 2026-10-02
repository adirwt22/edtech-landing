import {
  BookOpen,
  Eye,
  UserRound,
  RefreshCw,
  PenLine,
  BarChart3,
} from "lucide-react";

const experiences = [
  {
    icon: BookOpen,
    title: "Academic Learning",
    description:
      "Structured learning for Classes 9–12 across relevant subjects and boards.",
  },
  {
    icon: Eye,
    title: "Visual Understanding",
    description:
      "Diagrams, examples, and visual explanations to make difficult concepts easier to explore.",
  },
  {
    icon: UserRound,
    title: "Personalized Support",
    description:
      "Opportunities to ask questions, revisit explanations, and learn at a suitable pace.",
  },
  {
    icon: RefreshCw,
    title: "Learning Continuity",
    description:
      "Support for revisiting available lessons and reviewing missed topics.",
  },
  {
    icon: PenLine,
    title: "Regular Practice",
    description:
      "Topic-based practice, periodic tests, and examination-style questions.",
  },
  {
    icon: BarChart3,
    title: "Progress Insights",
    description:
      "Clearer visibility into learning progress, practice patterns, and areas that need attention.",
  },
];

export default function AcademicExperience() {
  return (
    <section className="academic section" id="academic-experience">
      <div className="container">
        <div className="academicHeader">
          <div className="sectionBadge center">
            Core Academic Experience
          </div>

          <h2>
            Learning Designed Around
            <br />
            <span>the Learner.</span>
          </h2>

          <p>
            A connected learning experience that helps students understand,
            practice, and make progress with confidence.
          </p>
        </div>

        <div className="academicGrid">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <div className="academicCard" key={item.title}>
                <div className="academicIcon">
                  <Icon size={22} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}