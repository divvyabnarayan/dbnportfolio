import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { ToolsSkills } from "@/components/ToolsSkills";
import { DesignProcess } from "@/components/DesignProcess";
import { Footer } from "@/components/Footer";
import { HomepageNav } from "@/components/HomepageNav";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <HomepageNav />
      <main className="flex-1">
        <Hero />
        <CaseStudies />
        <ToolsSkills />
        <DesignProcess />
      </main>
      <Footer />
    </div>
  );
}
