import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/siteData';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Post not found
        </h2>
        <Link to="/" className="text-terracotta hover:underline">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 max-w-2xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-taupe hover:text-terracotta transition mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to all posts
      </Link>

      <header className="mb-8 pb-8 border-b border-clay">
        <div className="flex items-center gap-3 text-sm text-taupe mb-3">
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-espresso leading-tight">
          {post.title}
        </h1>
      </header>

      <div className="space-y-6 text-espresso/90 leading-relaxed whitespace-pre-line">
        {post.content.trim()}
      </div>
    </article>
  );
}
