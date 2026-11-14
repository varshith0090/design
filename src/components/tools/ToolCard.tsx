import Link from 'next/link';
import { Tool } from '@/data/types';
import { categoryColorMap } from '@/data/categories';

interface ToolCardProps {
  tool: Tool;
}

const categoryLabels: Record<string, string> = {
  pdf: 'PDF',
  image: 'Image',
  write: 'Write',
  video: 'Video',
  file_conversion: 'File',
};

export default function ToolCard({ tool }: ToolCardProps) {
  const colors = categoryColorMap[tool.category] ?? { badge: 'bg-gray-100 text-gray-700' };

  return (
    <Link
      href={tool.route}
      className="block bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-5 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-gray-900 dark:text-white leading-tight">
          {tool.name}
        </h3>
        <span
          className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${colors.badge}`}
        >
          {categoryLabels[tool.category] ?? tool.category}
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
        {tool.description}
      </p>
    </Link>
  );
}
