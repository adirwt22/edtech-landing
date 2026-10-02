import Header from "./components/Header";
import Hero from "./components/Hero";
import DownloadApp from "./components/DownloadApp";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Footer from "./components/Footer";
import "./App.css";
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

        <AcademicExperience />

        <BoardPreparation />

        <LearningSyllabus />

        <VisionMission />
      </main>

      <Footer />
    </div>
  );
}

export default App;