'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

export default function SignInModal({ isOpen, onClose, onSwitchToSignUp }: SignInModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Sign in — it&apos;s free</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Access all tools with your account</p>

        {/* Google sign in */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors mb-4">
          <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Sign in with Google
        </button>

        {/* Divider */}
        <div className="flex items-center w-full mb-4">
          <div className="flex-1 h-px bg-gray-200 dark:bg-slate-700" />
          <span className="px-3 text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-slate-700" />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2.5 mb-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] placeholder:text-gray-400"
        />

        {/* Password */}
        <div className="relative w-full mb-3">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between w-full mb-4">
          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <input type="checkbox" className="rounded border-gray-300" />
            Remember me
          </label>
          <button className="text-sm text-[var(--color-primary)] hover:underline">Forgot Password?</button>
        </div>

        {/* Submit */}
        <button className="w-full py-2.5 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium text-sm transition-colors mb-4">
          Sign In
        </button>

        {/* Switch */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Don&apos;t have an account?{' '}
          <button onClick={onSwitchToSignUp} className="text-[var(--color-primary)] font-medium hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </Modal>
  );
}
