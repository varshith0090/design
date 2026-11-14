import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">Privacy Policy</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10">Last updated: January 1, 2025</p>

      <div className="space-y-8 text-gray-600 dark:text-gray-300">
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data Collection</h2>
          <p>When you use TinyWow, we collect minimal data necessary to provide our services. This includes files you upload for processing and basic usage analytics. We do not require account creation to use our free tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">File Processing & Storage</h2>
          <p>Files you upload are processed on our secure cloud servers. <strong>All uploaded and generated files are automatically and permanently deleted from our servers after 1 hour.</strong> We do not retain copies of your files beyond this window.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data Usage</h2>
          <p>We use your data solely to provide the requested tool functionality. We do not sell, share, rent, or trade your personal data or uploaded files with third parties. Your files are never used for AI model training.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cookies & Analytics</h2>
          <p>We use essential cookies to maintain site functionality and anonymous analytics to improve our services. Third-party advertising partners may use cookies to serve relevant ads. You can manage cookie preferences in your browser settings.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Third-Party Services</h2>
          <p>We may use third-party services for payment processing, analytics, and advertising. These services have their own privacy policies. We encourage you to review their terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GDPR & CCPA Compliance</h2>
          <p>We comply with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). You have the right to access, modify, or delete your personal data. Contact us to exercise these rights.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h2>
          <p>If you have questions about this privacy policy, please <Link href="/contact" className="text-[#0d8bf0] hover:underline">contact us</Link>.</p>
        </section>
      </div>
    </div>
  );
}
