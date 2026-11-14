import { notFound } from 'next/navigation';
import { tools } from '@/data/tools';
import ToolPageTemplate from '@/components/tools/ToolPageTemplate';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tools.filter((t) => t.category === 'write').map((t) => ({ slug: t.slug }));
}

export default async function WriteToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.category === 'write' && t.slug === slug);
  if (!tool) notFound();

  return (
    <ToolPageTemplate
      tool={tool}
      categoryName="AI Write Tools"
      categoryHref="/tools/write"
    />
  );
}
