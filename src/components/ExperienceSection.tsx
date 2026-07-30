import { ReactNode } from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: ReactNode;
}

const experiences: Experience[] = [
  {
    title: 'Software Engineering Intern',
    company: '10Pearls',
    location: 'Karachi, Pakistan',
    startDate: 'July 2026',
    endDate: 'August 2026',
    description: (
      <>
        <li>Implemented secure user authentication, RESTful APIs, database persistence, and user profile management with password reset functionality.</li>
        <li>Applied software engineering best practices by implementing JUnit Mockito for unit testing, SLF4J/Logback for application logging, global exception handling, Git for version control, and SonarQube for code quality analysis.</li>
      </>
    ),
  },
  {
    title: 'Generative AI Intern',
    company: 'Arch Technologies',
    location: 'Remote',
    startDate: 'June 2026',
    endDate: 'July 2026',
    description: (
      <>
        <li>Built an LLM chatbot using Streamlit and Ollama with conversation history and session management.</li>
        <li>Developed RAG pipelines and fine-tuned open-source LLMs using QLoRA, PEFT, and Unsloth.</li>
      </>
    ),
  },
  {
    title: 'Cloud Computing Intern',
    company: 'DecodeLabs',
    location: 'Remote',
    startDate: 'May 2026',
    description: (
      <>
        <li>Deployed Linux servers and static websites on AWS and Azure using EC2, S3, Blob Storage, and Nginx.</li>
        <li>Configured IAM, networking, storage, and cloud infrastructure using AWS CLI and Azure CLI.</li>
      </>
    ),
  },
];

export const ExperienceSection = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-mono text-2xl font-bold text-text-primary mb-6 random-underline-hover">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-border pl-4">
            <div className="mb-1">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-base font-medium text-text-primary random-underline-hover">
                  {exp.title}
                </h3>
                <p className="font-mono text-xs text-text-secondary opacity-70 whitespace-nowrap">
                  {exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ''}
                </p>
              </div>
              <p className="font-mono text-sm text-text-secondary opacity-90">
                {exp.company} — {exp.location}
              </p>
            </div>
            <ul className="list-disc list-outside ml-4 mt-2 space-y-1.5 font-mono text-sm">
              {exp.description}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

