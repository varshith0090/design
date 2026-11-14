import Link from 'next/link';

export default function PremiumBanner() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#0d8bf0] to-blue-700 p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Decorative sparkles */}
          <span className="absolute top-4 left-8 text-2xl opacity-40 select-none">✨</span>
          <span className="absolute top-8 right-12 text-3xl opacity-30 select-none">✨</span>
          <span className="absolute bottom-6 left-1/4 text-xl opacity-25 select-none">⭐</span>
          <span className="absolute bottom-4 right-1/3 text-2xl opacity-35 select-none">✨</span>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 relative">
            Get more with Premium
          </h2>
          <p className="text-lg text-white/90 mb-2 relative">
            Ad-free experience, unlimited usage, faster processing
          </p>
          <p className="text-xl font-semibold mb-6 relative">
            Starting at ₹399/mo
          </p>
          <Link
            href="/support-tinywow"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#0d8bf0] font-semibold hover:bg-gray-100 transition-colors relative"
          >
            Upgrade Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
