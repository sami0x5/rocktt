'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="Industrial Truck Background"
          fill
          className="object-cover object-center opacity-50 contrast-125 saturate-0"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/30" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-widest leading-none drop-shadow-2xl">
            Buy like a fleet <br />
            <span className="text-accent">save thousands</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-medium drop-shadow-md">
            Quality semi trucks, trailers, reefers, and dry vans at wholesale
            prices. Reliable equipment for serious haulers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              variant="industrial"
              className="min-w-[200px] font-bold text-lg h-14"
              asChild>
              <Link href="/inventory">SEE OUR INVENTORY</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] font-bold text-lg h-14 bg-black/40 backdrop-blur-sm border-white/30 hover:bg-white hover:text-primary"
              asChild>
              <a href="tel:+18165270090">CALL NOW</a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
