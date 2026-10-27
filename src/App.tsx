import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import DSA from "./components/DSA";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <DSA />
        <TechStack />
        <Resume />
        <Contact />
      </main>
      <Footer />
      </div>
    </ThemeProvider>
  );
}
