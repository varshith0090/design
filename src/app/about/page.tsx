import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">About</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About TinyWow</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          TinyWow is a free online platform that provides over 250 tools for everyday tasks — from PDF editing
          and image processing to AI-powered writing and video conversion. Our mission is simple: make powerful
          tools accessible to everyone, without paywalls or forced sign-ups.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300">
          We believe that basic digital tools should be free and accessible. Whether you need to merge a PDF,
          remove a background from a photo, or write an essay, you shouldn&apos;t have to pay or create an account
          to get things done. TinyWow exists to eliminate that friction.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10">Privacy First</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Your privacy matters to us. All uploaded and generated files are automatically deleted from our
          servers after <strong>1 hour</strong>. We never sell, share, or use your files for training. Your
          data stays yours.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10">Part of Jenni AI</h2>
        <p className="text-gray-600 dark:text-gray-300">
          TinyWow is proudly part of the Jenni AI family. Together, we&apos;re building the next generation of
          AI-powered productivity tools that help millions of people work smarter, not harder.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 py-8 border-t border-b border-gray-200 dark:border-slate-700">
          {[
            { number: '250+', label: 'Free Tools' },
            { number: '1M+', label: 'Active Users' },
            { number: '10M+', label: 'Files Processed' },
            { number: '0', label: 'Data Sold' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#0d8bf0]">{stat.number}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
