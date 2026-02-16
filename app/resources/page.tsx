'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { BlogSection } from '@/components/sections/blog'; // Reusing the grid

export default function ResourcesPage() {
  return (
    <div className="bg-zinc-950 min-h-screen pt-24">
      <div className="relative h-[300px] flex items-center justify-center bg-zinc-900 border-b border-zinc-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1517174637213-39d67566cb73?q=80&w=2940&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        <Container className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white uppercase drop-shadow-xl">
            Trucking <span className="text-accent">Resources</span>
          </h1>
          <p className="text-xl text-zinc-300 mt-4 max-w-2xl mx-auto">
            Industry insights, maintenance tips, and news for the professional
            driver.
          </p>
        </Container>
      </div>

      {/* Just reusing the BlogSection component for simplicity as it draws from the same data source concept */}
      <BlogSection />

      <Section className="pt-0">
        <Container>
          <div className="text-center p-12 bg-zinc-900 border border-zinc-800 rounded-sm">
            <h3 className="text-2xl font-oswald font-bold text-white uppercase mb-4">
              Have a topic you want us to cover?
            </h3>
            <p className="text-zinc-400 mb-6">
              We're always looking for ways to help our community. Let us know
              what you want to learn about.
            </p>
            <a
              href="mailto:info@rocktt.com"
              className="text-accent font-bold hover:underline text-lg">
              info@rocktt.com
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
