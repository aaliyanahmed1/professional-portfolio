// client/src/pages/home.tsx

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
// import AboutSection from "@/components/about-section"; // Removed because it's now merged into HeroSection
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      {/* AboutSection is now part of HeroSection */}
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
