import {
  BriefcaseBusiness,
  WalletCards,
  Lightbulb,
  Compass,
  Sparkles,
} from "lucide-react";

const topics = [
  {
    icon: BriefcaseBusiness,
    title: "Practical Situations",
  },
  {
    icon: Compass,
    title: "Career Awareness",
  },
  {
    icon: WalletCards,
    title: "Financial Concepts",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
  },
  {
    icon: Sparkles,
    title: "Everyday Decisions",
  },
];

export default function BeyondClassroom() {
  return (
    <section className="beyond section" id="beyond-classroom">
      <div className="container">

        <div className="beyondContent">
          <div className="sectionBadge center">
            Learning Beyond the Classroom
          </div>

          <h2>
            Prepare for More Than
            <br />
            <span>the Next Examination.</span>
          </h2>

          <p>
            Academic education provides a foundation. As Sutra Edu grows,
            we want to explore age-appropriate learning experiences that
            connect classroom knowledge with the world around students.
          </p>
        </div>

        <div className="beyondTopics">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <div className="beyondTopic" key={topic.title}>
                <div className="beyondIcon">
                  <Icon size={20} />
                </div>

                <span>{topic.title}</span>
              </div>
            );
          })}
        </div>

        <div className="beyondNote">
          <span />
          <p>
            Designed to complement academic learning—not replace the
            prescribed curriculum.
          </p>
          <span />
        </div>

      </div>
    </section>
  );
}