'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">Contact</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg mb-10">
        Have a question or feedback? We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Form */}
        <div className="md:col-span-2">
          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h2>
              <p className="text-green-600 dark:text-green-400">Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0d8bf0] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0d8bf0] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0d8bf0] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0d8bf0] focus:border-transparent outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0d8bf0] hover:bg-[#0b7ad4] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📧 Email</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">support@tinywow.com</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">⏱️ Response Time</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">We typically respond within 24-48 hours on business days.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🐛 Bug Reports</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Found a bug? Include the tool name, your browser, and steps to reproduce.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
