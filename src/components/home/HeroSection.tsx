'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';

const rotatingWords = ['Business', 'Your Life', 'Everything', 'Education'];

const recentTools = [
  { name: 'Edit PDF', href: '/pdf/edit' },
  { name: 'Remove Background', href: '/image/remove-bg' },
  { name: 'Essay Writer', href: '/write/essay-writer' },
  { name: 'Compress Video', href: '/video/compress' },
];

const categoryGradients: Record<string, string> = {
  pdf: 'from-purple-500 to-purple-700',
  image: 'from-orange-400 to-orange-600',
  write: 'from-blue-500 to-blue-700',
  video: 'from-pink-500 to-pink-700',
  file_conversion: 'from-teal-500 to-teal-700',
};

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const cycleWord = useCallback(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      setIsVisible(true);
    }, 300);
    return timeout;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleWord();
    }, 2500);
    return () => clearInterval(interval);
  }, [cycleWord]);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Free Tools to Make{' '}
          <span
            className={`inline-block text-[#0d8bf0] transition-all duration-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
            }`}
          >
            {rotatingWords[wordIndex]}
          </span>{' '}
          Simple
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          We offer PDF, video, image and other online tools to make your life easier
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0d8bf0] focus:border-transparent text-base"
              readOnly
            />
          </div>
        </div>

        {/* Recent Tools */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
            Recent Tools
          </p>
          <div className="flex flex-wrap justify-center gap-2 overflow-x-auto">
            {recentTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Category Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tools/${cat.slug}`}
              className={`flex-shrink-0 w-[280px] md:w-auto rounded-2xl bg-gradient-to-br ${
                categoryGradients[cat.slug] || 'from-gray-500 to-gray-700'
              } p-6 text-left text-white snap-start hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  {cat.toolCount}+ tools
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1">{cat.name}</h3>
              <p className="text-sm text-white/80 mb-3">{cat.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">
                  Featured: {cat.featuredTool}
                </span>
                <span className="text-white/90 text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
