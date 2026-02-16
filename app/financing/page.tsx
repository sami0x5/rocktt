'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, DollarSign, Clock, FileText } from 'lucide-react';
import Image from 'next/image';

export default function FinancingPage() {
  return (
    <div className="bg-zinc-950 min-h-screen pt-24">
      {/* Hero */}
      <div className="relative h-[400px] flex items-center justify-center bg-zinc-900 border-b border-zinc-800">
        <div className="absolute inset-0">
          <Image
            src="/images/financing.jpg"
            alt="Financing Options"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent" />
        <Container className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white uppercase drop-shadow-xl">
            Capital <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-xl text-zinc-300 mt-4 max-w-2xl mx-auto">
            Flexible financing options for owner-operators and fleets. We work
            with all credit types.
          </p>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-oswald font-bold text-white uppercase mb-4">
                  Why Finance With Us?
                </h2>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  We specialize in commercial truck lending. Our detailed
                  understanding of the equipment value allows us to secure
                  better rates and terms than traditional banks. We look at the
                  whole picture, not just a credit score.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Clock,
                    title: 'Fast Approvals',
                    desc: 'Decisions in hours, not days',
                  },
                  {
                    icon: DollarSign,
                    title: 'Low Down Payments',
                    desc: 'Keep your capital working',
                  },
                  {
                    icon: CheckCircle2,
                    title: 'All Credit Types',
                    desc: 'Startups & past issues OK',
                  },
                  {
                    icon: FileText,
                    title: 'Simple Paperwork',
                    desc: 'Digital process available',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-zinc-900 p-6 rounded-sm border border-zinc-800">
                    <item.icon className="h-8 w-8 text-accent mb-4" />
                    <h3 className="text-white font-bold uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="bg-zinc-900 border-accent/30 shadow-2xl">
                <CardHeader className="bg-accent/10 border-b border-accent/20 pb-6">
                  <CardTitle className="text-white text-2xl">
                    Quick Application
                  </CardTitle>
                  <p className="text-zinc-400 text-sm">
                    No impact to your credit score to apply.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-300">
                        First Name
                      </label>
                      <input
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-300">
                        Last Name
                      </label>
                      <input
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Phone
                    </label>
                    <input
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Email
                    </label>
                    <input
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Estimated Credit
                    </label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none">
                      <option>Excellent (720+)</option>
                      <option>Good (660-719)</option>
                      <option>Fair (600-659)</option>
                      <option>Poor (Below 600)</option>
                    </select>
                  </div>

                  <Button
                    className="w-full h-14 text-lg font-bold mt-4"
                    variant="industrial">
                    SUBMIT APPLICATION
                  </Button>
                  <p className="text-xs text-center text-zinc-500 mt-2">
                    By submitting, you agree to our terms and privacy policy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
