import { SiteChrome } from "../components/SiteChrome";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <SiteChrome>
      <div id="home" />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </SiteChrome>
  );
};
