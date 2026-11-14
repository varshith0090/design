import { Tool } from '@/data/types';
import ToolCard from './ToolCard';

interface ToolGridProps {
  tools: Tool[];
}

export default function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tools.map((tool) => (
        <ToolCard key={`${tool.category}-${tool.slug}`} tool={tool} />
      ))}
    </div>
  );
}
