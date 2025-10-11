export interface BlogPostMeta {
  slug: string;
  title: string;
  date?: string;
  excerpt: string;
  raw: string;
  fileName: string; // original file name with extension, e.g., My Post.md
}

interface ParseResult {
  meta: Record<string, string>;
  content: string;
}

const slugFromPath = (path: string) =>
  path
    .split('/')
    .pop()!
    .replace(/\.(md|markdown)$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');

const fileNameFromPath = (path: string) =>
  path
    .split('/')
    .pop()!; // keep extension and case

function parseFrontmatter(raw: string): ParseResult {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fmMatch) return { meta: {}, content: raw.trim() };
  const metaBlock = fmMatch[1];
  const meta: Record<string, string> = {};
  metaBlock.split(/\n/).forEach(line => {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/);
    if (m) meta[m[1].trim()] = m[2].trim();
  });
  const content = raw.slice(fmMatch[0].length).trim();
  return { meta, content };
}

function extractTitle(meta: Record<string,string>, content: string, filePath: string): string {
  if (meta.title) return meta.title;
  const heading = content.match(/^#\s+(.+)$/m);
  if (heading) return heading[1].trim();
  return filePath.split('/').pop()!.replace(/\.(md|markdown)$/i, '') || 'Untitled';
}

function extractExcerpt(content: string): string {
  const paragraphs = content.split(/\n{2,}/).map(p => p.replace(/\n/g, ' ').trim()).filter(Boolean);
  return paragraphs[0] ? (paragraphs[0].length > 200 ? paragraphs[0].slice(0,197) + '...' : paragraphs[0]) : 'No preview available.';
}

export async function loadAllBlogPosts(): Promise<BlogPostMeta[]> {
  const modules = import.meta.glob('../blogs/**/*.{md,markdown}', { as: 'raw' });
  const loaded: BlogPostMeta[] = [];
  for (const path in modules) {
    try {
      const raw = await (modules as any)[path]();
      const { meta, content } = parseFrontmatter(raw as string);
      const title = extractTitle(meta, content, path);
      const excerpt = extractExcerpt(content);
      const date = meta.date || undefined;
      loaded.push({ slug: slugFromPath(path), title, date, excerpt, raw: content, fileName: fileNameFromPath(path) });
    } catch (e) {
      console.error('Failed to load blog file', path, e);
    }
  }
  loaded.sort((a,b) => {
    if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
    return a.title.localeCompare(b.title);
  });
  return loaded;
}

export async function loadBlogPost(slug: string): Promise<BlogPostMeta | null> {
  const posts = await loadAllBlogPosts();
  return posts.find(p => p.slug === slug) || null;
}

export async function loadBlogPostByFileName(fileName: string): Promise<BlogPostMeta | null> {
  const decoded = decodeURIComponent(fileName);
  const posts = await loadAllBlogPosts();
  return posts.find(p => p.fileName === decoded) || null;
}
