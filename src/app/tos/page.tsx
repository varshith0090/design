import Link from 'next/link';

export default function TOSPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">Terms of Service</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Terms of Service</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10">Last updated: January 1, 2025</p>

      <div className="space-y-8 text-gray-600 dark:text-gray-300">
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Acceptance of Terms</h2>
          <p>By accessing and using TinyWow, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Acceptable Use</h2>
          <p>You may use TinyWow for lawful purposes only. You agree to use our tools responsibly and in accordance with all applicable laws and regulations.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Prohibited Content</h2>
          <p>You may not upload, process, or generate content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable. This includes copyrighted material you do not have permission to use, and any content depicting the exploitation of minors.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Limitation of Liability</h2>
          <p>TinyWow is provided &quot;as is&quot; without warranties of any kind. We are not liable for any data loss, damages, or issues arising from the use of our tools. Files are automatically deleted after 1 hour and cannot be recovered.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Subscription Terms</h2>
          <p>Premium subscriptions are billed on a recurring basis. You may cancel at any time. Refunds are provided in accordance with applicable consumer protection laws. Free tier limitations may apply.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Modifications</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of TinyWow after changes constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact</h2>
          <p>For questions about these terms, please <Link href="/contact" className="text-[#0d8bf0] hover:underline">contact us</Link>.</p>
        </section>
      </div>
    </div>
  );
}
