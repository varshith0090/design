'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { searchTools } from '@/data/tools';
import CategoryBadge from '@/components/ui/CategoryBadge';
import type { Tool } from '@/data/types';

interface SearchBarProps {
  onClose?: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Tool[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleChange = (value: string) => {
    setQuery(value);
    if (value.trim().length > 0) {
      setResults(searchTools(value).slice(0, 8));
    } else {
      setResults([]);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search tools..."
          autoFocus
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] placeholder:text-gray-400"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden z-50">
          {results.map((tool) => (
            <Link
              key={tool.route}
              href={tool.route}
              onClick={() => onClose?.()}
              className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="text-sm text-gray-900 dark:text-gray-100">{tool.name}</span>
              <CategoryBadge category={tool.category} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
