'use client';

import { Phone, Truck } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-16 bg-zinc-900 border-t border-white/10 shadow-xl animate-slide-up">
      <Link
        href="/inventory"
        className="flex-1 flex flex-col items-center justify-center text-white hover:bg-zinc-800 transition-colors">
        <Truck className="h-5 w-5 mb-1 text-zinc-400" />
        <span className="text-[10px] font-bold uppercase tracking-wider">
          Inventory
        </span>
      </Link>

      <a
        href="tel:+18165270090"
        className="flex-[1.5] bg-accent flex items-center justify-center gap-2 text-white font-oswald font-bold uppercase tracking-wider text-sm shadow-inner">
        <Phone className="h-5 w-5" />
        Call Now
      </a>

      <Link
        href="/financing"
        className="flex-1 flex flex-col items-center justify-center text-white hover:bg-zinc-800 transition-colors">
        <span className="text-xl font-bold text-zinc-400 sm-text">$</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">
          Financing
        </span>
      </Link>
    </div>
  );
}
