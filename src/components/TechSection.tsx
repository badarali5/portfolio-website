export const TechSection = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-mono text-2xl font-bold text-text-primary mb-6 random-underline-hover">Tech</h2>
      <div className="space-y-6 text-text-secondary font-mono text-sm leading-relaxed">
        <div>
          <h3 className="font-mono text-base text-text-primary mb-2 random-underline-hover">💻 Programming Languages</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li>Java </li>
            <li>C </li>
            <li>Python </li>
            <li>C++ </li>
            <li>JavaScript </li>
            <li>HTML </li>
            <li>CSS </li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-base text-text-primary mb-2 random-underline-hover">⚙️ Frameworks & Libraries</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li>React </li>
            <li>Spring Boot </li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-base text-text-primary mb-2 random-underline-hover">🗄️ Databases</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li>PostgreSQL </li>
            <li>Supabase </li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-base text-text-primary mb-2 random-underline-hover">🚀 Tools & Platforms</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li>Git & GitHub </li>
            <li>Docker </li>
            <li>Render</li>
            <li>Railway</li>
            <li>Vercel</li>
            <li>Netlify </li>
            <li>GitHub Actions </li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-base text-text-primary mb-2 random-underline-hover">🧪 Testing</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li>JUnit </li>
            <li>Jest </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
