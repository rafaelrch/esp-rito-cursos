import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { IntroCall } from "@/components/landing/IntroCall";
import { CoursesGrid } from "@/components/landing/CoursesGrid";
import { CourseBanner } from "@/components/landing/CourseBanner";
import { FormSection } from "@/components/landing/FormSection";
import { EventBanner } from "@/components/landing/EventBanner";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroCall />
        <CoursesGrid />
        <CourseBanner />
        <FormSection />
        <EventBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
