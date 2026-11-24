import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/siteData';

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-6 h-6 text-terracotta" />
        <h2 className="text-2xl font-bold text-espresso">Writing</h2>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group p-6 bg-sand/70 border border-clay rounded-2xl hover:border-terracotta/50 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-3 text-xs text-taupe mb-2">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <Link to={`/blog/${post.id}`}>
              <h3 className="text-xl font-semibold text-espresso group-hover:text-terracotta transition mb-2">
                {post.title}
              </h3>
            </Link>

            <p className="text-sm text-taupe leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <Link
              to={`/blog/${post.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta hover:text-rose-clay transition"
            >
              Read post <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
