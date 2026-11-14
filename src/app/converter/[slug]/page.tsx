import { notFound } from 'next/navigation';
import { tools } from '@/data/tools';
import ToolPageTemplate from '@/components/tools/ToolPageTemplate';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tools.filter((t) => t.category === 'file_conversion').map((t) => ({ slug: t.slug }));
}

export default async function ConverterToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.category === 'file_conversion' && t.slug === slug);
  if (!tool) notFound();

  return (
    <ToolPageTemplate
      tool={tool}
      categoryName="File Tools"
      categoryHref="/tools/file_conversion"
    />
  );
}
