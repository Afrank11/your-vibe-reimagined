import SEO from '@/components/SEO';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceNumbers from '@/components/sections/ExperienceNumbers';
import ProjectsSection from '@/components/sections/ProjectsSection';
import NowDoingSection from '@/components/sections/NowDoingSection';
import {
  EducationSection,
  ImpactSection,
  AccomplishmentsSection,
  CaseStudiesSection,
  BlogsSection,
  GitHubSection,
  BeyondTerminalSection,
  GuestbookCTA,
  MarqueeTicker,
  CTASection,
} from '@/components/sections/OtherSections';

const Index = () => {
  return (
    <div className="relative">
      <SEO title="Ateh Frank Ateh — Network Engineer & Software Engineer | Cameroon" description="Official portfolio of Ateh Frank Ateh (Frank Ateh, Ateh Frank Jr) — Network Engineer, Software Engineer & Cybersecurity builder. SUP'PTIC graduate, CAMTEL, 19+ projects." path="/" type="profile" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceNumbers />
      <ProjectsSection />
      <NowDoingSection />
      <EducationSection />
      <ImpactSection />
      <AccomplishmentsSection />
      <CaseStudiesSection />
      <BlogsSection />
      <GitHubSection />
      <BeyondTerminalSection />
      <GuestbookCTA />
      <MarqueeTicker />
      <CTASection />
    </div>
  );
};

export default Index;
