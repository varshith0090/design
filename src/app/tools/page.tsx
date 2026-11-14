'use client';

import { useState } from 'react';
import { tools } from '@/data/tools';
import { categories } from '@/data/categories';
import ToolCard from '@/components/tools/ToolCard';
import Link from 'next/link';

const filterTabs = [
  { label: 'All Tools', value: 'all' },
  { label: 'PDF Tools', value: 'pdf' },
  { label: 'Image Tools', value: 'image' },
  { label: 'AI Write', value: 'write' },
  { label: 'Video Tools', value: 'video' },
  { label: 'File Tools', value: 'file_conversion' },
];

export default function ToolsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTools =
    activeFilter === 'all'
      ? tools
      : tools.filter((t) => t.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          All Tools
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Browse all {tools.length}+ free online tools
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === tab.value
                ? 'bg-[#0d8bf0] text-white'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      {activeFilter === 'all' ? (
        <>
          {categories.map((cat) => {
            const catTools = tools.filter((t) => t.category === cat.slug);
            return (
              <div key={cat.slug} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {cat.name}
                    </h2>
                    <span className="text-sm bg-gray-100 dark:bg-slate-800 text-gray-500 px-2 py-0.5 rounded-full">
                      {catTools.length} tools
                    </span>
                  </div>
                  <Link
                    href={`/tools/${cat.slug}`}
                    className="text-[#0d8bf0] hover:underline text-sm font-medium"
                  >
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {catTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
