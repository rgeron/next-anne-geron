import { BentoSection } from "@/components/bento-section";
import { Hero } from "@/components/my-hero";
import { PartnersSection } from "@/components/partners-section";
import { ProjectsSection } from "@/components/projects-section";
import { TextScrollSection } from "@/components/text-scroll-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TextScrollSection />
      <BentoSection />
      <PartnersSection />
      <ProjectsSection />
    </div>
  );
}
