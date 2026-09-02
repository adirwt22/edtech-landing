import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="website">
      <Header />

      <main>
        <Hero />
        <Features />
        <About />
        <VisionMission />
      </main>

      <Footer />
    </div>
  );
}

export default App;