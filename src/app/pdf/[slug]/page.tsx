import { notFound } from 'next/navigation';
import { tools } from '@/data/tools';
import ToolPageTemplate from '@/components/tools/ToolPageTemplate';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tools.filter((t) => t.category === 'pdf').map((t) => ({ slug: t.slug }));
}

export default async function PdfToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.category === 'pdf' && t.slug === slug);
  if (!tool) notFound();

  return (
    <ToolPageTemplate
      tool={tool}
      categoryName="PDF Tools"
      categoryHref="/tools/pdf"
    />
  );
}
