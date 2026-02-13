import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CourseBanner } from "@/components/landing/CourseBanner";
import { SkillsSection } from "@/components/landing/SkillsSection";
import { CoursesGrid } from "@/components/landing/CoursesGrid";
import { BlogSection } from "@/components/landing/BlogSection";
import { EventBanner } from "@/components/landing/EventBanner";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CourseBanner />
        <SkillsSection />
        <CoursesGrid />
        <BlogSection />
        <EventBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
