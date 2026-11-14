'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation } from '@/data/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import SearchBar from '@/components/ui/SearchBar';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthClick: (mode: 'signin' | 'signup') => void;
}

export default function MobileDrawer({ isOpen, onClose, onAuthClick }: MobileDrawerProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggle = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-950 z-[70] transform transition-transform duration-300 lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-800">
          <span className="font-bold text-lg text-gray-900 dark:text-white">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <SearchBar onClose={onClose} />
        </div>

        {/* Nav accordion */}
        <div className="flex-1 overflow-y-auto px-4">
          {navigation.map((cat) => (
            <div key={cat.slug} className="mb-1">
              <button
                onClick={() => toggle(cat.slug)}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                {cat.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-gray-400 transition-transform ${expandedSlug === cat.slug ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSlug === cat.slug && (
                <div className="pl-3 pb-3 space-y-1">
                  {cat.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="block py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)]"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href={cat.viewAllHref}
                    onClick={onClose}
                    className="block py-1.5 text-sm font-medium text-[var(--color-primary)]"
                  >
                    View All →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="p-4 border-t border-gray-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
            <ThemeToggle />
          </div>
          <Link
            href="/support-tinywow"
            onClick={onClose}
            className="block w-full text-center py-2 text-sm font-medium text-[var(--color-primary)] border border-[var(--color-primary)] rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
          >
            Upgrade
          </Link>
          <button
            onClick={() => { onClose(); onAuthClick('signin'); }}
            className="block w-full text-center py-2 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
