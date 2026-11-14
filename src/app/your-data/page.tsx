import Link from 'next/link';

export default function YourDataPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">Your Data</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Your Data &amp; Privacy</h1>

      <div className="space-y-8 text-gray-600 dark:text-gray-300">
        {/* Privacy Hero */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Your files are automatically deleted
          </h2>
          <p className="text-blue-700 dark:text-blue-300 text-lg">
            All uploaded and generated files are permanently wiped from our servers after <strong>1 hour</strong>.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How Files Are Processed</h2>
          <p>When you upload a file to TinyWow, it is sent to our secure cloud servers for processing. The processing happens entirely on our infrastructure — your files are never sent to third parties. Once processing is complete, the result is available for you to download.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Automatic Deletion</h2>
          <p>Our servers run an automated cleanup process that permanently deletes all uploaded and generated files after 1 hour. This process is irreversible — once deleted, files cannot be recovered by anyone, including our team.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">No Data Selling</h2>
          <p>We do not sell, share, or monetize your uploaded files or personal data in any way. Your files exist on our servers solely for the purpose of processing your request.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Request Data Deletion</h2>
          <p>
            While files are automatically deleted after 1 hour, if you need immediate deletion of your data,
            please <Link href="/contact" className="text-[#0d8bf0] hover:underline">contact us</Link> and we will
            process your request within 24 hours.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Account Data</h2>
          <p>If you create an account, we store your email address and preferences. You can request complete deletion of your account and all associated data at any time.</p>
        </section>
      </div>
    </div>
  );
}
