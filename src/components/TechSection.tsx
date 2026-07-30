export const TechSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-mono text-2xl font-bold text-text-primary mb-6 random-underline-hover text-center w-full">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Languages */}
        <section className="border border-border rounded-lg p-6 bg-background">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "JavaScript",
              "TypeScript",
              "Python",
              "C++",
              "C",
              "HTML",
              "CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Frameworks & AI/ML */}
        <section className="border border-border rounded-lg p-6 bg-background">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">
            Frameworks & AI/ML
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Spring Boot",
              "React.js",
              "Tailwind CSS",
              "PyTorch",
              "Transformers",
              "QLoRA",
              "Unsloth",
              "RAG",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Cloud & DevOps */}
        <section className="border border-border rounded-lg p-6 bg-background">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">
            Cloud & DevOps
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "AWS",
              "Azure",
              "Docker",
              "GitHub Actions",
              "Railway",
              "Vercel",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Databases */}
        <section className="border border-border rounded-lg p-6 bg-background">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">
            Databases
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "PostgreSQL",
              "Supabase",
              "MongoDB",
              "Oracle SQL",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Testing & Concepts */}
        <section className="border border-border rounded-lg p-6 bg-background sm:col-span-2">
          <h3 className="font-mono text-base text-text-primary mb-4 random-underline-hover">
            Testing & Concepts
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "JUnit",
              "Jest",
              "REST APIs",
              "JWT Auth",
              "RBAC",
              "Row-Level Security",
              "Agile/Scrum",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 rounded text-xs font-mono bg-muted/40 border border-border text-text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};