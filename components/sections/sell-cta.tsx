'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SellCtaSection() {
  return (
    <Section className="relative bg-zinc-900 overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop)',
        }} // Construction/Industrial background
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/40 mix-blend-multiply" />

      <Container className="relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black font-oswald text-white uppercase mb-6 tracking-wide drop-shadow-md">
          Ready to Sell?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-medium drop-shadow-sm">
          We pay top dollar for used semi trucks and trailers. Single units or
          entire fleets. Fast payment, easy process.
        </p>
        <Button
          size="lg"
          variant="default"
          className="bg-white text-primary hover:bg-zinc-100 min-w-[250px] h-16 text-xl font-bold border-0 shadow-xl"
          asChild>
          <Link href="/sell-your-equipment">GET AN OFFER TODAY</Link>
        </Button>
      </Container>
    </Section>
  );
}
