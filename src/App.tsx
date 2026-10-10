import Header from "./components/Header";
import Hero from "./components/Hero";
import DownloadApp from "./components/DownloadApp";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Footer from "./components/Footer";
import AssessmentImprovement from "./components/AssessmentImprovement";
import "./App.css";
import FinalCTA from "./components/FinalCTA";
import OurStory from "./components/OurStory";
import LearningApproach from "./components/LearningApproach";
import BeyondClassroom from "./components/BeyondClassroom";
import LearningSyllabus from "./components/LearningSyllabus";
import BoardPreparation from "./components/BoardPreparation";
import AcademicExperience from "./components/AcademicExperience";
function App() {
  return (
    <div className="website">
      <Header />

      <main>
        <Hero />

        <DownloadApp />

        <About />
         
        <OurStory />

        <AcademicExperience />

        <BoardPreparation />

        <LearningSyllabus />

        <AssessmentImprovement />

        <BeyondClassroom />

        <LearningApproach />

        <VisionMission />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;