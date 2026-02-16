'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Mock Data
const posts = [
  {
    title: 'Save Big: Learn to Buy Trucks Wholesale',
    excerpt: 'Simple, practical tips on saving money when buying trucks.',
    date: 'Current',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Transform Your Trucking Experience with an APU!',
    excerpt: 'How APUs make life on the road easier.',
    date: 'Current',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Why Freightliner Cascadia’s are the Better Choice',
    excerpt: 'Decision support content for fleet owners.',
    date: 'Current',
    image:
      'https://images.unsplash.com/photo-1596564654922-e1d51c36398f?q=80&w=2940&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'The Future of the Crane Industry: Highlights from Conexpo',
    excerpt: 'Industry highlights and what to expect in the coming years.',
    date: 'Current',
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2940&auto=format&fit=crop',
    href: '#',
  },
];

export function BlogSection() {
  return (
    <Section className="bg-zinc-950">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase">
            Latest <span className="text-accent">Resources</span>
          </h2>
          <Button
            variant="link"
            className="hidden md:inline-flex text-accent"
            asChild>
            <Link href="/resources">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 group h-full flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-zinc-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
              </div>
              <CardHeader>
                <div className="text-xs text-accent font-bold uppercase tracking-wider mb-2">
                  {post.date}
                </div>
                <CardTitle className="text-xl leading-snug group-hover:text-accent transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={post.href}
                  className="text-sm font-bold text-white hover:text-accent uppercase tracking-wider flex items-center gap-2">
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/resources">View All Articles</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
