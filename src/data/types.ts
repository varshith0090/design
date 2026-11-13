export type ToolType = 'upload' | 'writer' | 'converter';

export type CategorySlug = 'pdf' | 'image' | 'write' | 'video' | 'file_conversion';

export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: CategorySlug;
  type: ToolType;
  route: string;
  acceptedFormats?: string[];
  maxFileSize?: string;
  featured?: boolean;
  popular?: boolean;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  toolCount: number;
  featuredTool: string;
  routePrefix: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface NavCategory {
  name: string;
  slug: CategorySlug;
  items: NavItem[];
  viewAllHref: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface PricingPlan {
  name: string;
  slug: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  toolCount: string;
  features: string[];
  bestValue?: boolean;
}
