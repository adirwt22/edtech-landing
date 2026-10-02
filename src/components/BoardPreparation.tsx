import {
  BookOpenCheck,
  FileQuestion,
  PenLine,
  Target,
} from "lucide-react";

const boardPoints = [
  {
    icon: BookOpenCheck,
    title: "Know the Subject",
    text: "Build clarity around the subject and important concepts.",
  },
  {
    icon: FileQuestion,
    title: "Understand the Paper",
    text: "Become familiar with board-style questions and examination patterns.",
  },
  {
    icon: PenLine,
    title: "Present Your Answer",
    text: "Practice answering questions with clarity and proper presentation.",
  },
  {
    icon: Target,
    title: "Prepare With Purpose",
    text: "Use regular practice to approach examinations with greater confidence.",
  },
];

export default function BoardPreparation() {
  return (
    <section className="board section" id="board-preparation">
      <div className="container">
        <div className="boardLayout">

          {/* Left Content */}
          <div className="boardContent">
            <div className="sectionBadge">
              Board Examination Preparation
            </div>

            <h2>
              Know the Subject.
              <br />
              <span>Understand the Paper.</span>
              <br />
              Present Your Answer.
            </h2>

            <p>
              Board examinations require more than knowing the syllabus.
              Students also need familiarity with question patterns, answer
              writing, and examination expectations.
            </p>
          </div>

          {/* Right Points */}
          <div className="boardPoints">
            {boardPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div className="boardPoint" key={item.title}>
                  <div className="boardIcon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}