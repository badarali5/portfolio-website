import profileImage from "@/assets/profile-image.png";
import { Navigation } from "@/components/Navigation";

export const ProfileSection = () => {
  return (
    <div className="text-center mb-12">
      <div className="mb-6">
        <img
          src={profileImage}
          alt="Developer profile"
          className="w-32 h-32 rounded-full mx-auto object-cover"
        />
      </div>
      
      <h1 className="font-mono text-4xl font-bold text-text-primary mb-2 random-underline-hover">
        Badar Ali
      </h1>
      
      <p className="font-mono text-lg text-text-secondary mb-6">
        Software Engineer 
      </p>

      
      <Navigation />
      
      <div className="max-w-2xl mx-auto text-left">
      
        
        <p className="font-mono text-sm leading-relaxed text-text-secondary mb-4 opacity-80">
Hi! I'm Badar, a Software Engineering student at FAST NUCES (Class of 2028), best known for shipping FAST Notes Hub — a
live platform serving 5,000+ users. Experienced across Java/Spring Boot, PostgreSQL, cloud infrastructure (AWS/Azure), and
LLM applications (RAG, fine-tuning). Seeking backend, full-stack, or AI engineering internships.
</p>
        
        {/* <p className="font-mono text-sm leading-relaxed text-text-secondary">
          You should <a href="#" className="text-text-accent underline hover:text-highlight transition-colors">subscribe to my newsletter</a>!
        </p> */}
      </div>
    </div>
  );
};
