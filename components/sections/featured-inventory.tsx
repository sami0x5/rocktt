'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Gauge, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Mock Data
const inventory = [
  {
    id: '1',
    title: '2020 Peterbilt 579',
    price: '$65,000',
    year: '2020',
    mileage: '450k',
    image: '/images/white-freightliner.jpg',
  },
  {
    id: '2',
    title: '2019 Kenworth T680',
    price: '$58,500',
    year: '2019',
    mileage: '520k',
    image: '/images/hero-truck.jpg',
  },
  {
    id: '3',
    title: '2021 Freightliner Cascadia',
    price: '$72,000',
    year: '2021',
    mileage: '380k',
    image: '/images/red-semi.jpg',
  },
];

export function FeaturedInventorySection() {
  return (
    <Section className="bg-zinc-950">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-2 uppercase">
              Featured <span className="text-accent">Inventory</span>
            </h2>
            <p className="text-zinc-400">
              Fresh arrivals ready to hit the road.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/inventory">VIEW ALL INVENTORY</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inventory.map(item => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-zinc-900 border-zinc-800">
              <div className="aspect-16/10 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="accent"
                    className="text-lg px-3 py-1 shadow-lg border border-white/20">
                    {item.price}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-zinc-400">
                  <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800">
                    <Calendar className="h-4 w-4 text-zinc-500" />
                    <span className="font-semibold text-zinc-300">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800">
                    <Gauge className="h-4 w-4 text-zinc-500" />
                    <span className="font-semibold text-zinc-300">
                      {item.mileage} Mi
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button
                  className="w-full font-bold"
                  variant="industrial"
                  asChild>
                  <Link href={`/inventory/${item.id}`}>VIEW DETAILS</Link>
                </Button>
                <Button
                  className="w-full font-bold"
                  variant="secondary"
                  asChild>
                  <Link href="/financing">FINANCE</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
