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
      <SEO title="Ateh Frank Ateh (Frank Ateh) — Network & Software Engineer | Cameroon" description="Official portfolio of Ateh Frank Ateh — also known as Frank Ateh, Ateh Frank Jr, Franck Ateh. Network Engineer, Software Engineer & Cybersecurity builder. SUP'PTIC graduate, CAMTEL, 19+ projects." path="/" type="profile" />
      {/* SEO: visually-hidden semantic content with name variants for search engines */}
      <h1 className="sr-only">Ateh Frank Ateh — Frank Ateh, Ateh Frank Jr, Franck Ateh — Network Engineer & Software Engineer in Cameroon</h1>
      <p className="sr-only">
        Official website of Ateh Frank Ateh, also commonly searched as Frank Ateh, Ateh Frank,
        Ateh Frank Junior, Ateh Frank Jr, Franck Ateh, Ateh Franck, and Afrank11. Ateh Frank Ateh
        is a Network Engineer, Software Engineer, and Cybersecurity builder from Yaoundé, Cameroon,
        and a graduate of SUP'PTIC (National Advanced School of Posts, Telecommunications and ICT).
        This is the LinkedIn-linked portfolio of Frank Ateh covering 19+ projects, CV, GitHub
        (Afrank11), and contact details.
      </p>
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
