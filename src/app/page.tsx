import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import PopularTools from '@/components/home/PopularTools';
import FeaturedTool from '@/components/home/FeaturedTool';
import PremiumBanner from '@/components/home/PremiumBanner';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-slate-950">
      <HeroSection />
      <StatsCounter />
      <PopularTools />
      <FeaturedTool />
      <PremiumBanner />
    </div>
  );
}
