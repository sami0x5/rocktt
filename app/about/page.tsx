'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-zinc-950 min-h-screen pt-24">
      {/* Hero */}
      <div className="relative h-[500px] flex items-center justify-center bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/workshop.jpg"
            alt="About Rock Truck & Trailer"
            fill
            className="object-cover object-center opacity-50 grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950" />
        <Container className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black font-oswald text-white uppercase tracking-widest leading-none drop-shadow-2xl">
            ROCK <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-orange-600">
              SOLID
            </span>
          </h1>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-oswald font-bold text-white uppercase">
                About Rock Truck & Trailer
              </h2>
              <div className="h-1 w-24 bg-accent rounded-full" />
              <p className="text-zinc-300 text-lg leading-relaxed">
                Rock Truck & Trailer is an equipment dealership located in
                Kansas City. We aren’t a normal dealership, because you can buy
                directly from us at wholesale prices and save thousands. We
                don’t have a fancy sales lot, but we do have the best prices on
                trucks and trailers.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Our painless, online finance form only takes a few minutes to
                complete, and you can get an answer in hours. Even better, our
                “soft” credit check has ZERO effect on your credit. No
                commitment. Why not see how much money you can get to grow your
                business?
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Rock was founded in 2016 by a team of guys from the industry.
                The common thread is that to work at Rock you have to treat
                people right. Our word means everything. When we say equipment
                is good, it is. When we say we’ll make it right, we do.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                {[
                  'Wholesale Prices',
                  'Soft Credit Check',
                  'Industry Veterans',
                  'Integrity First',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-zinc-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0">
                  <Image
                    src="/images/experience.jpg"
                    alt="Industry Experience"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-zinc-100 p-8 rounded-sm shadow-xl max-w-[240px] hidden md:block">
                <p className="font-oswald font-bold text-primary text-4xl mb-1">
                  15+
                </p>
                <p className="text-zinc-600 text-sm font-bold uppercase tracking-wider">
                  Years of Industry Experience
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-zinc-900 border-t border-zinc-800">
        <Container className="text-center">
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mb-8">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="industrial"
              className="h-14 font-bold text-lg"
              asChild>
              <Link href="/inventory">BROWSE INVENTORY</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 font-bold text-lg"
              asChild>
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
