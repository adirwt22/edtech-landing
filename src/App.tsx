import Header from "./components/Header";
import Hero from "./components/Hero";
import DownloadApp from "./components/DownloadApp";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="website">
      <Header />

      <main>
        <Hero />

        <DownloadApp />

        <About />

        <VisionMission />
      </main>

      <Footer />
    </div>
  );
}

export default App;