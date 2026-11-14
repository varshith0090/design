'use client';

import { useState, useRef, DragEvent } from 'react';

interface FileUploadZoneProps {
  acceptedFormats?: string[];
  maxFileSize?: string;
}

export default function FileUploadZone({
  acceptedFormats = [],
  maxFileSize = '100 MB',
}: FileUploadZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`relative cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-colors duration-200 ${
        isDragOver
          ? 'border-[#0d8bf0] bg-blue-50 dark:bg-blue-950/30'
          : 'border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800'
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept={acceptedFormats.join(',')}
      />

      {/* Upload icon */}
      <svg
        className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
        />
      </svg>

      <button
        type="button"
        className="mb-2 rounded-lg bg-[#0d8bf0] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0b7ad4] transition-colors"
      >
        Upload from PC or Mobile
      </button>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        or drag &amp; drop files here
      </p>

      {acceptedFormats.length > 0 && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
          Supported: {acceptedFormats.join(', ')}
          {maxFileSize && ` · Max ${maxFileSize}`}
        </p>
      )}

      <button
        type="button"
        onClick={(e) => e.stopPropagation()}
        className="mb-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        Google Drive
      </button>

      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        Uploaded and generated files are deleted 1 hour after upload
      </div>
    </div>
  );
}
