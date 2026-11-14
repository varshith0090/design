'use client';

import Link from 'next/link';
import { NavCategory } from '@/data/types';

interface NavDropdownProps {
  category: NavCategory;
}

export default function NavDropdown({ category }: NavDropdownProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div className="w-80 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl p-4">
        <div className="grid grid-cols-2 gap-1">
          {category.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors truncate"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-slate-700">
          <Link
            href={category.viewAllHref}
            className="flex items-center justify-center text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            View All {category.name} Tools →
          </Link>
        </div>
      </div>
    </div>
  );
}
