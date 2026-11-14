'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { tools } from '@/data/tools';
import { CategorySlug } from '@/data/types';
import CategoryBadge from '@/components/ui/CategoryBadge';

interface FilterTab {
  label: string;
  category: CategorySlug | 'all';
}

const filterTabs: FilterTab[] = [
  { label: 'All Tools', category: 'all' },
  { label: 'PDF Tools', category: 'pdf' },
  { label: 'Video Tools', category: 'video' },
  { label: 'Image Tools', category: 'image' },
  { label: 'Converter Tools', category: 'file_conversion' },
  { label: 'AI Write', category: 'write' },
];

export default function PopularTools() {
  const [activeTab, setActiveTab] = useState<CategorySlug | 'all'>('all');

  const filteredTools = useMemo(() => {
    const popular = tools.filter((t) => t.popular);
    const filtered =
      activeTab === 'all'
        ? popular
        : popular.filter((t) => t.category === activeTab);

    // If filtered by category yields fewer than 12, supplement from all tools in that category
    if (filtered.length < 12 && activeTab !== 'all') {
      const remaining = tools
        .filter((t) => t.category === activeTab && !filtered.includes(t))
        .slice(0, 12 - filtered.length);
      return [...filtered, ...remaining].slice(0, 12);
    }

    return filtered.slice(0, 12);
  }, [activeTab]);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Popular Tools
        </h2>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {filterTabs.map((tab) => (
            <button
              key={tab.category}
              onClick={() => setActiveTab(tab.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.category
                  ? 'bg-[#0d8bf0] text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <Link
              key={tool.route}
              href={tool.route}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-5 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#0d8bf0] transition-colors">
                  {tool.name}
                </h3>
                <CategoryBadge category={tool.category} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-1 px-6 py-3 rounded-full bg-[#0d8bf0] text-white font-medium hover:bg-blue-600 transition-colors"
          >
            View All Tools →
          </Link>
        </div>
      </div>
    </section>
  );
}
