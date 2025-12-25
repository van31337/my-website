import { useEffect, useRef } from "react";
import Lenis from "lenis";

import { Navbar, MatrixBackground } from "./components";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./sections/HeroSection";
import StorySceneAlert from "./sections/StorySceneAlert";
import AboutSection from "./sections/AboutSection";
import StorySceneDeepDive from "./sections/StorySceneDeepDive";
import ProjectsSection from "./sections/ProjectsSection";
import StorySceneScale from "./sections/StorySceneScale";
import ContactSection from "./sections/ContactSection";

import "./App.css";
import "lenis/dist/lenis.css";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis for navbar scroll
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <MatrixBackground />
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <StorySceneAlert />
        <AboutSection />
        <StorySceneDeepDive />
        <ProjectsSection />
        <StorySceneScale />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
