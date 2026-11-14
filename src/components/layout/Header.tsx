'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation } from '@/data/navigation';
import NavDropdown from '@/components/layout/NavDropdown';
import MobileDrawer from '@/components/layout/MobileDrawer';
import ThemeToggle from '@/components/ui/ThemeToggle';
import SearchBar from '@/components/ui/SearchBar';
import SignInModal from '@/components/auth/SignInModal';
import SignUpModal from '@/components/auth/SignUpModal';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [authModal, setAuthModal] = useState<null | 'signin' | 'signup'>(null);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left — Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                TinyWow
                <sup className="ml-1 text-[10px] font-normal text-gray-400">by Jenni</sup>
              </span>
            </Link>

            {/* Center — Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((cat) => (
                <div key={cat.slug} className="relative group">
                  <button className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[var(--color-primary)] transition-colors">
                    {cat.name}
                  </button>
                  <NavDropdown category={cat} />
                </div>
              ))}
            </nav>

            {/* Right — Actions */}
            <div className="flex items-center gap-1">
              <ThemeToggle />

              {/* Search toggle (desktop) */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
                className="hidden sm:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </button>

              {/* Sign In */}
              <button
                onClick={() => setAuthModal('signin')}
                className="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors"
              >
                Sign In
              </button>

              {/* Hamburger (mobile) */}
              <button
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Search bar (slides open below header on desktop) */}
          {isSearchOpen && (
            <div className="pb-3">
              <SearchBar onClose={() => setIsSearchOpen(false)} />
            </div>
          )}
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onAuthClick={(mode) => setAuthModal(mode)}
      />

      {/* Auth modals */}
      <SignInModal
        isOpen={authModal === 'signin'}
        onClose={() => setAuthModal(null)}
        onSwitchToSignUp={() => setAuthModal('signup')}
      />
      <SignUpModal
        isOpen={authModal === 'signup'}
        onClose={() => setAuthModal(null)}
        onSwitchToSignIn={() => setAuthModal('signin')}
      />
    </>
  );
}
