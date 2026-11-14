'use client';

import { useState, useEffect } from 'react';

interface WriterWizardProps {
  toolName: string;
}

export default function WriterWizard({ toolName }: WriterWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Professional');
  const [length, setLength] = useState('Medium');
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (currentStep === 3 && generating) {
      const timer = setTimeout(() => setGenerating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, generating]);

  const handleContinue = () => {
    if (topic.trim()) setCurrentStep(2);
  };

  const handleGenerate = () => {
    setGenerating(true);
    setCurrentStep(3);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText('Your generated content will appear here...');
  };

  const steps = [1, 2, 3];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {steps.map((s) => (
          <div
            key={s}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              s <= currentStep ? 'bg-[#0d8bf0]' : 'bg-gray-200 dark:bg-slate-600'
            }`}
          />
        ))}
      </div>

      {/* Step 1 */}
      {currentStep === 1 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {toolName}
          </label>
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value.slice(0, 100))}
            placeholder="Enter your topic..."
            rows={4}
            className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-[#0d8bf0] focus:ring-1 focus:ring-[#0d8bf0] outline-none transition-colors resize-none"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-400">{topic.length}/100</span>
            <button
              onClick={handleContinue}
              disabled={!topic.trim()}
              className="rounded-lg bg-[#0d8bf0] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0b7ad4] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-gray-900 dark:text-white focus:border-[#0d8bf0] focus:ring-1 focus:ring-[#0d8bf0] outline-none"
            >
              <option>Professional</option>
              <option>Casual</option>
              <option>Academic</option>
              <option>Creative</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Length
            </label>
            <select
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-gray-900 dark:text-white focus:border-[#0d8bf0] focus:ring-1 focus:ring-[#0d8bf0] outline-none"
            >
              <option>Short</option>
              <option>Medium</option>
              <option>Long</option>
            </select>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setCurrentStep(1)}
              className="rounded-lg border border-gray-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleGenerate}
              className="rounded-lg bg-[#0d8bf0] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0b7ad4] transition-colors"
            >
              Generate
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {currentStep === 3 && (
        <div>
          {generating ? (
            <div className="flex flex-col items-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#0d8bf0]" />
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Generating...
              </p>
            </div>
          ) : (
            <div>
              <textarea
                readOnly
                rows={6}
                value="Your generated content will appear here..."
                className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 px-4 py-3 text-gray-900 dark:text-white resize-none"
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                  </svg>
                  Copy
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
