import { Category } from './types';

export const categories: Category[] = [
  {
    slug: 'pdf',
    name: 'PDF Tools',
    description: 'Solve Your PDF Problems',
    icon: '📄',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    toolCount: 46,
    featuredTool: 'PDF Creator',
    routePrefix: '/pdf',
  },
  {
    slug: 'image',
    name: 'Image Tools',
    description: 'Edit & Transform Images',
    icon: '🖼️',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    toolCount: 74,
    featuredTool: 'Remove Background',
    routePrefix: '/image',
  },
  {
    slug: 'write',
    name: 'AI Write Tools',
    description: 'AI-Powered Writing',
    icon: '✍️',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    toolCount: 53,
    featuredTool: 'Paragraph Writer',
    routePrefix: '/write',
  },
  {
    slug: 'video',
    name: 'Video Tools',
    description: 'Process & Convert Videos',
    icon: '🎬',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    toolCount: 58,
    featuredTool: 'Compress Video',
    routePrefix: '/video',
  },
  {
    slug: 'file_conversion',
    name: 'File Tools',
    description: 'Convert & Transform Files',
    icon: '📁',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    toolCount: 12,
    featuredTool: 'Split Excel',
    routePrefix: '/converter',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const categoryColorMap: Record<string, { text: string; bg: string; border: string; badge: string }> = {
  pdf: { text: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  image: { text: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
  write: { text: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  video: { text: 'text-pink-700', bg: 'bg-pink-50', border: 'border-pink-200', badge: 'bg-pink-100 text-pink-700' },
  file_conversion: { text: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-700' },
};
