import { ThemeToggle } from "../components/ThemeToggle";
import { CloudBackground } from "../components/CloudBackground";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return <div className="min-h-dvh gradient-bg text-foreground overflow-x-hidden">
    { /* Theme Toggle */}


    { /* Background Effects */}
    <CloudBackground />
    <StarBackground />

    { /* Background Effects */}

    { /* Navbar */}
    <NavBar />

    { /* Main Content */}
    <main>
        {/* Empty anchor for Home */}
        <div id="home" />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
    </main>

    { /* Footer */}
    <Footer />
  </div>;
};
