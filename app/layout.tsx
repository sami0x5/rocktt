import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
});

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileStickyCTA } from '@/components/layout/mobile-sticky-cta';

export const metadata: Metadata = {
  title: 'Rock Truck & Trailer | Quality Semi Trucks & Trailers',
  description:
    'Find the best deals on semi trucks, trailers, reefers, and dry vans. Rock Truck & Trailer offers quality equipment at wholesale prices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-zinc-950 font-sans antialiased text-zinc-100',
          inter.variable,
          oswald.variable,
        )}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
