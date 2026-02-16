'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Sleepers',
    href: '/inventory?category=Sleepers',
    image: '/images/white-freightliner.jpg',
  },
  {
    title: 'Day Cabs',
    href: '/inventory?category=Day Cabs',
    image: '/images/hero-truck.jpg',
  },
  {
    title: 'Trailers',
    href: '/inventory?category=Trailers',
    image: '/images/trailer.jpg',
  },
  {
    title: 'Flatbeds',
    href: '/inventory?category=Flatbeds',
    image: '/images/experience.jpg',
  },
  {
    title: 'Cranes',
    href: 'https://rockcranes.com',
    image: '/images/workshop.jpg',
  },
];

export function CategoriesSection() {
  return (
    <Section className="bg-zinc-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>
              <Link
                href={category.href}
                className="group block relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-zinc-800">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-oswald font-bold text-white mb-2 tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                    {category.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View Inventory <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Border Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
