'use client';

import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Gauge, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Mock Data
const allInventory = [
  {
    id: '1',
    title: '2020 Peterbilt 579',
    price: '$65,000',
    year: '2020',
    mileage: '450k',
    category: 'Sleepers',
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
    category: 'Sleepers',
    image: '/images/red-semi.jpg',
  },
  {
    id: '4',
    title: '2018 Great Dane Reefer',
    price: '$35,000',
    year: '2018',
    mileage: 'N/A',
    category: 'Reefers',
    image: '/images/trailer.jpg',
  },
  {
    id: '5',
    title: '2022 Volvo VNL 860',
    price: '$89,000',
    year: '2022',
    mileage: '210k',
    category: 'Sleepers',
    image: '/images/white-freightliner.jpg',
  },
  {
    id: '6',
    title: '2017 Utility Dry Van',
    price: '$28,000',
    year: '2017',
    mileage: 'N/A',
    category: 'Dry Vans',
    image: '/images/trailer.jpg',
  },
];

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredInventory =
    activeCategory === 'All'
      ? allInventory
      : allInventory.filter(item => item.category === activeCategory);

  return (
    <div className="bg-zinc-950 min-h-screen pb-24 pt-32">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase mb-4">
              Current <span className="text-accent">Inventory</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl">
              Browse our selection of quality pre-owned equipment. All units are
              inspected and ready to work.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-64 shrink-0 space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
              <div className="flex items-center gap-2 mb-4 text-white font-oswald font-bold uppercase tracking-wider text-sm">
                <Filter className="h-4 w-4" /> Filter Inventory
              </div>

              <div className="space-y-2">
                {['All', 'Sleepers', 'Reefers', 'Dry Vans', 'Flatbeds'].map(
                  category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-2 text-sm font-medium rounded-sm transition-colors ${
                        activeCategory === category
                          ? 'bg-accent text-white'
                          : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                      }`}>
                      {category}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredInventory.map(item => (
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
                    <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">
                      {item.category}
                    </div>
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
                          {item.mileage}
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
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
