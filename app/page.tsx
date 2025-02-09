import { BentoSection } from "@/components/bento-section";
import { Hero } from "@/components/my-hero";
import { PartnersSection } from "@/components/partners-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "../components/my-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BentoSection />
      <PartnersSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
