import { notFound } from 'next/navigation';
import { tools } from '@/data/tools';
import ToolPageTemplate from '@/components/tools/ToolPageTemplate';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tools.filter((t) => t.category === 'video').map((t) => ({ slug: t.slug }));
}

export default async function VideoToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.category === 'video' && t.slug === slug);
  if (!tool) notFound();

  return (
    <ToolPageTemplate
      tool={tool}
      categoryName="Video Tools"
      categoryHref="/tools/video"
    />
  );
}
