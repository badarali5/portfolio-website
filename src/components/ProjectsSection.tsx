import { ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

interface Project {
  title: string;
  description: ReactNode; // <-- changed this line
  stack: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'FAST Notes Hub',
    description: (
      <>
        <p className="font-mono text-sm text-text-secondary/80 mb-2">
  A notes and past papers hub for FAST university students, 
    <span className="text-text-secondary opacity-100 font-semibold"> solving a real-world academic need</span>, with{' '}
  <span className="text-text-secondary opacity-100 font-semibold">1.3K+ active users</span>, generating{' '}
  <span className="text-text-secondary opacity-100 font-semibold">7.3K+ views</span>, and handling{' '}
  <span className="text-text-secondary opacity-100 font-semibold">21K+ total events</span> with a{' '}
  <span className="text-text-secondary opacity-100 font-semibold">60% engagement rate</span>.
</p>

      </>
    ),
    stack: ['React.js', 'Supabase', 'Tailwind CSS'],
    link: 'https://fast-notes-hub.vercel.app/',
  },
  {
    title: 'Cricket-Zone',
    description: (
      <>
        A cricket stats and updates platform where users can build their own custom team by choosing favorite players and tracking their stats.
      </>
    ),
    stack: ['Spring Boot', 'PostgreSQL', 'Maven', 'React.js'],
    link: 'https://github.com/badarali5/cricket-fantasy-team',
  },
  {
    title: 'Portfolio Website',
    description: <>Personal portfolio site showcasing projects and skills.</>,
    stack: ['React', 'TypeScript', 'Vite'],
    link: '#',
  },
  {
    title: 'GetJob Website',
    description: <>Job finder website with CI/CD pipeline.</>,
    stack: ['Spring Boot', 'PostgreSQL', 'Docker', 'Railway', 'GitHub Actions'],
    link: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-mono text-2xl font-bold text-text-primary mb-6 random-underline-hover">
        Projects
      </h2>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <div key={i} className="border-l-2 border-border pl-4">
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <h3 className="font-mono text-base font-medium text-text-primary mb-1 random-underline-hover inline-flex items-center gap-1 w-fit">
                  <span>{p.title}</span>
                  <ArrowUpRight
                    className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                    aria-label="External link"
                  />
                </h3>
                <p className="font-mono text-sm text-text-secondary mb-2 opacity-80">
                  {p.description}
                </p>
                <p className="font-mono text-xs text-text-secondary opacity-80">
                  Stack: {p.stack.join(', ')}
                </p>
              </a>
            ) : (
              <>
                <h3 className="font-mono text-base font-medium text-text-primary mb-1 random-underline-hover w-fit">
                  {p.title}
                </h3>
                <p className="font-mono text-sm text-text-secondary mb-2 opacity-80">
                  {p.description}
                </p>
                <p className="font-mono text-xs text-text-secondary opacity-80">
                  Stack: {p.stack.join(', ')}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
