import profileImage from "@/assets/profile-image.jpg";
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
          Hi! I'm Badar, a Software Engineering student at FAST NUCES.
        </p>
        
        <p className="font-mono text-sm leading-relaxed text-text-secondary mb-4 opacity-80">
          I love turning ideas into real projects. 
          From web apps to backend systems, I am exploring how tech and startups can solve problems
           that actually matter. Always building, always learning.
        </p>
        
        {/* <p className="font-mono text-sm leading-relaxed text-text-secondary">
          You should <a href="#" className="text-text-accent underline hover:text-highlight transition-colors">subscribe to my newsletter</a>!
        </p> */}
      </div>
    </div>
  );
};
