import { ProfileSection } from "@/components/ProfileSection";
import { BlogSection } from "@/components/BlogSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechSection } from "@/components/TechSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-mono">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <ProfileSection />

        <section id="projects" className="mb-16">
          <ProjectsSection />
        </section>

        <section id="tech" className="mb-16">
          <TechSection />
        </section>

        <section id="blog">
          <div className="text-center mb-8">
            <h2 className="font-mono text-2xl font-medium text-text-primary mb-2 random-underline-hover">Blog</h2>
          </div>
          <BlogSection />
        </section>
      </div>
    </div>
  );
};

export default Index;
