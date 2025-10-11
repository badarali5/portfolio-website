import { BlogSection } from "@/components/BlogSection";
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background font-mono px-6 py-12 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm font-fira text-text-secondary hover:text-text-primary random-underline-hover">
          <span className="translate-y-px">←</span>
          <span>Back to Home</span>
        </Link>
      </div>
      <div className="mb-10">
        <h1 className="font-mono text-3xl font-bold text-text-primary random-underline-hover mb-2">All Blogs</h1>
        <p className="font-mono text-sm text-text-secondary">Browse all markdown posts.</p>
      </div>
      <BlogSection />
    </div>
  );
};

export default Blogs;
