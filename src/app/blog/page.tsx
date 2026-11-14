import Link from 'next/link';
import { blogPosts } from '@/data/pricing';

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">Blog</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Blog</h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg mb-10">
        Tips, tutorials, and updates from the TinyWow team
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#0d8bf0] transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="text-xs text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </Link>
        ))}
      </div>

      {/* Support CTA */}
      <div className="bg-gradient-to-r from-[#0d8bf0] to-blue-700 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Support TinyWow</h2>
        <p className="text-blue-100 mb-4">
          Help us keep these tools free by upgrading to Premium
        </p>
        <Link
          href="/support-tinywow"
          className="inline-block bg-white text-[#0d8bf0] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          View Plans →
        </Link>
      </div>
    </div>
  );
}
