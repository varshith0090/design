'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pricingPlans } from '@/data/pricing';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">Pricing</span>
      </nav>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Choose Your TinyWow Plan
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
          Unlock unlimited access to our powerful tools
        </p>

        {/* Monthly / Yearly Toggle */}
        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? 'bg-[#0d8bf0]' : 'bg-gray-300 dark:bg-slate-600'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                isYearly ? 'translate-x-7' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">
              Save 30%
            </span>
          )}
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.slug}
            className={`relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border-2 transition-shadow hover:shadow-md ${
              plan.bestValue
                ? 'border-[#0d8bf0] ring-2 ring-[#0d8bf0]/20'
                : 'border-gray-100 dark:border-slate-700'
            }`}
          >
            {plan.bestValue && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#0d8bf0] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Best Value
                </span>
              </div>
            )}

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {plan.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {plan.toolCount} tools
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                {plan.currency}{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </span>
              <span className="text-gray-500 dark:text-gray-400">/mo</span>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.bestValue
                  ? 'bg-[#0d8bf0] hover:bg-[#0b7ad4] text-white'
                  : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            { q: 'Can I use TinyWow for free?', a: 'Yes! All tools are free to use with some limitations. Premium removes ads, limits, and CAPTCHA.' },
            { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your subscription at any time with no cancellation fees.' },
            { q: 'Is there a free trial?', a: 'We don\'t offer a free trial because all tools are already free! Premium just removes restrictions.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, and UPI payments.' },
          ].map((faq) => (
            <div key={faq.q} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
