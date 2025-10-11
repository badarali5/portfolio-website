import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { loadBlogPost, loadBlogPostByFileName, BlogPostMeta } from '@/lib/blogLoader';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug, fileName } = useParams<{ slug?: string; fileName?: string }>();
  const [post, setPost] = useState<BlogPostMeta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      if (fileName) {
        const p = await loadBlogPostByFileName(fileName);
        setPost(p);
        setLoading(false);
        return;
      }
      if (slug) {
        const p = await loadBlogPost(slug);
        setPost(p);
        setLoading(false);
      }
    };
    run();
  }, [slug, fileName]);

  if (loading) return <div className="min-h-screen font-fira px-6 py-12 max-w-3xl mx-auto">Loading...</div>;
  if (!post) return <div className="min-h-screen font-fira px-6 py-12 max-w-3xl mx-auto">Post not found.</div>;

  return (
    <div className="min-h-screen bg-background font-fira px-6 py-12 max-w-3xl mx-auto">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors random-underline-hover w-fit">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </div>
      <article>
        <h1 className="font-fira text-3xl font-bold text-text-primary mb-4 random-underline-hover">{post.title}</h1>
        {post.date && <p className="font-fira text-xs text-text-secondary mb-6">{post.date}</p>}
        <div className="markdown-body max-w-none">
          <ReactMarkdown>{post.raw}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
