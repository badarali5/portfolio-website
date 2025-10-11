import { useEffect, useState } from 'react';
import { loadAllBlogPosts, BlogPostMeta } from '@/lib/blogLoader';
import { Link, useNavigate } from 'react-router-dom';

export const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAllBlogPosts().then(setPosts);
  }, []);

  return (
  <div className="max-w-2xl mx-auto font-fira">
      <div className="flex items-center gap-4 mb-6">
        <p className="font-fira text-sm text-text-secondary">
          {posts.length > 0 ? `Here's my most recent posts` : 'No blog posts found yet.'}
          {posts.length > 0 && (
            <>
              {' '}or{' '}
              <button
                type="button"
                onClick={() => {
                  if (posts.length === 0) return;
                  const idx = Math.floor(Math.random() * posts.length);
                  const p = posts[idx];
                  navigate(`/blogs/${encodeURIComponent(p.fileName)}`);
                }}
                className="text-text-primary underline hover:text-text-primary transition-colors"
              >
                read a random one
              </button>
              !
            </>
          )}
        </p>
      </div>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.slug} className="border-l-2 border-profile-border pl-4 font-fira">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h3 className="font-fira text-base font-medium text-text-primary random-underline-hover">
                <Link to={`/blogs/${encodeURIComponent(post.fileName)}`} className="text-inherit no-underline">{post.title}</Link>
              </h3>
              {post.date && (
                <span className="font-fira text-xs text-text-secondary">{post.date}</span>
              )}
            </div>
            <p className="font-fira text-sm text-text-secondary leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};