'use client';

import { useState } from 'react';

interface StarRatingProps {
  rating?: number;
  totalVotes?: number;
}

export default function StarRating({ rating = 4.5, totalVotes = 3645 }: StarRatingProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const displayRating = selectedRating ?? rating;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-5 text-center">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        Help Us Improve
      </p>
      <div className="flex items-center justify-center gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = hoverIndex !== null ? star <= hoverIndex : star <= Math.floor(displayRating);
          const half = hoverIndex === null && star === Math.ceil(displayRating) && displayRating % 1 !== 0;

          return (
            <button
              key={star}
              onMouseEnter={() => setHoverIndex(star)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setSelectedRating(star)}
              className="p-0.5 transition-transform hover:scale-110"
              aria-label={`Rate ${star} stars`}
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                {half ? (
                  <>
                    <defs>
                      <linearGradient id={`half-${star}`}>
                        <stop offset="50%" stopColor="#facc15" />
                        <stop offset="50%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill={`url(#half-${star})`}
                    />
                  </>
                ) : (
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill={filled ? '#facc15' : '#d1d5db'}
                  />
                )}
              </svg>
            </button>
          );
        })}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {displayRating} ({totalVotes.toLocaleString()} votes)
      </p>
    </div>
  );
}
