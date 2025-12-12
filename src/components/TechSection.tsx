export const TechSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
  <h2 className="font-mono text-2xl font-bold text-text-primary mb-6 random-underline-hover text-center w-full">Skills</h2>

      {/* Card grid: 1 col on small, 2 cols on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Languages card */}
        <section className="border border-border rounded-lg p-6 bg-background">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">C++</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">C</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Java</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Python</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">JavaScript</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">HTML</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">CSS</span>
          </div>
        </section>

        {/* Tools card */}
        

        {/* Frameworks & Libraries card */}
        <section className="border border-border rounded-lg p-6 bg-background">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Spring Boot</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">React</span>
          </div>
        </section>

        <section className="border border-border rounded-lg p-6 bg-background">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">Tools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Git</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Docker</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Render</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Railway</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Vercel</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Netlify</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">GitHub Actions</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">JUnit</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Jest</span>
          </div>
        </section>

        {/* Databases card */}
        <section className="border border-border rounded-lg p-6 bg-background">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">Databases</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">PostgreSQL</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">MySQL</span>
            <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary">Supabase</span>
          </div>
        </section>
      </div>
    </div>
  );
};
