import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import ToolCard from '@/components/tools/ToolCard';
import Link from 'next/link';

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const catTools = getToolsByCategory(cat.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-[#0d8bf0]">Tools</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">{cat.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl">{cat.icon}</span>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {cat.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {cat.description} — {catTools.length} free tools available
            </p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {catTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
