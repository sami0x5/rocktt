'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function FinancingSection() {
  return (
    <Section className="bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-zinc-800/20 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase leading-none">
              Get Financed <br />
              <span className="text-accent">Fast & Easy</span>
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              We understand that time is money. That&apos;s why we&apos;ve
              streamlined our financing process to get you behind the wheel
              faster. Whether you have perfect credit or are just starting out,
              we have options for you.
            </p>

            <ul className="space-y-4">
              {[
                "Soft credit check - won't impact your score",
                'Approvals in as little as 2 hours',
                'Low down payment options available',
                'First-time buyer programs',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent h-6 w-6 shrink-0" />
                  <span className="text-zinc-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                size="lg"
                variant="industrial"
                className="min-w-[200px] text-lg h-14"
                asChild>
                <Link href="/financing">APPLY NOW</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden border border-zinc-700">
            <div className="absolute inset-0">
              <Image
                src="/images/financing.jpg"
                alt="Financing"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-950/90 border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-zinc-400 text-sm uppercase tracking-wider mb-1">
                    Monthly Payments As Low As
                  </p>
                  <p className="text-3xl font-bold text-white font-oswald">
                    $1,250
                    <span className="text-lg text-zinc-500 font-sans font-normal">
                      /mo
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
