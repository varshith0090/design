import Link from 'next/link';

export default function FeaturedTool() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-4">
                Featured Tool
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                PDF Creator
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Create professional PDF documents from scratch with our powerful online
                editor. Add text, images, tables, and more — no software installation
                required. Perfect for reports, invoices, and presentations.
              </p>
              <Link
                href="/pdf/create"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d8bf0] text-white font-medium hover:bg-blue-600 transition-colors"
              >
                Try PDF Creator →
              </Link>
            </div>

            {/* Right: Decorative Illustration */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-xs aspect-square rounded-2xl bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-800/40 dark:to-blue-800/40 flex flex-col items-center justify-center gap-4 shadow-inner">
                <div className="text-6xl">📄</div>
                <div className="w-3/4 space-y-2">
                  <div className="h-2 bg-white/60 dark:bg-white/20 rounded-full" />
                  <div className="h-2 bg-white/40 dark:bg-white/15 rounded-full w-5/6" />
                  <div className="h-2 bg-white/30 dark:bg-white/10 rounded-full w-2/3" />
                </div>
                <div className="px-4 py-1.5 bg-white/50 dark:bg-white/10 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300">
                  .PDF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
