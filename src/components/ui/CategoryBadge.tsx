import { categoryColorMap } from '@/data/categories';

interface CategoryBadgeProps {
  category: string;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const colors = categoryColorMap[category];
  const badgeClass = colors?.badge ?? 'bg-gray-100 text-gray-700';

  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${badgeClass}`}>
      {category}
    </span>
  );
}
