'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Mock Data (would typically fetch based on ID)
const truck = {
  id: '1',
  title: '2020 Peterbilt 579 Epic',
  price: '$65,000',
  specs: {
    year: '2020',
    make: 'Peterbilt',
    model: '579 Epic',
    engine: 'Cummins X15',
    transmission: 'Eaton Endurant 12-Spd',
    mileage: '450,231',
    sleeper: '80" UltraLoft',
    axles: 'Tandem',
    ratio: '2.64',
    vin: '1XP5D49X0KD123456',
  },
  description:
    'Clean, one-owner fleet maintained unit. Paccar MX-13 engine with Eaton 12-speed automated transmission. Double bunk, refrigerator, inverter, and Espar heater. Tires are 80% or better. Ready to work immediately.',
  images: [
    '/images/hero-truck.jpg',
    '/images/red-semi.jpg',
    '/images/white-freightliner.jpg',
  ],
};

export default function InventoryDetailPage() {
  const params = useParams();

  return (
    <div className="bg-zinc-950 min-h-screen pt-24 pb-24">
      <Section className="py-8">
        <Container>
          <Button
            variant="link"
            asChild
            className="mb-6 pl-0 text-zinc-400 hover:text-white">
            <Link href="/inventory">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images & Description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-oswald font-bold text-white uppercase">
                  {truck.title}
                </h1>
                <div className="flex items-center gap-4">
                  <Badge variant="accent" className="text-xl px-4 py-1.5">
                    {truck.price}
                  </Badge>
                  <span className="text-zinc-400 font-medium">
                    Stock #{params.id}
                  </span>
                </div>
              </div>

              {/* Main Image */}
              <div className="rounded-sm overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${truck.images[0]})` }}
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {truck.images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-sm overflow-hidden border border-zinc-800 cursor-pointer hover:border-accent transition-colors relative">
                    <div className="md:col-span-2 aspect-video relative rounded-sm overflow-hidden border border-zinc-800">
                      <Image
                        src={img} // Changed from item.image to img
                        alt={truck.title} // Changed from item.title to truck.title
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        priority
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {truck.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Specs & Contact */}
            <div className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-y-4 text-sm">
                    <div className="text-zinc-500">Year</div>
                    <div className="text-white font-bold text-right">
                      {truck.specs.year}
                    </div>

                    <div className="text-zinc-500">Make</div>
                    <div className="text-white font-bold text-right">
                      {truck.specs.make}
                    </div>

                    <div className="text-zinc-500">Model</div>
                    <div className="text-white font-bold text-right">
                      {truck.specs.model}
                    </div>

                    <div className="text-zinc-500">Mileage</div>
                    <div className="text-white font-bold text-right">
                      {truck.specs.mileage}
                    </div>

                    <div className="text-zinc-500">Engine</div>
                    <div className="text-white font-bold text-right">
                      {truck.specs.engine}
                    </div>

                    <div className="text-zinc-500">Trans</div>
                    <div className="text-white font-bold text-right">
                      {truck.specs.transmission}
                    </div>

                    <div className="text-zinc-500">Sleeper</div>
                    <div className="text-white font-bold text-right">
                      {truck.specs.sleeper}
                    </div>

                    <div className="text-zinc-500">VIN</div>
                    <div className="text-white font-bold text-right font-mono text-xs">
                      {truck.specs.vin}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-accent/50 shadow-lg shadow-accent/5">
                <CardHeader>
                  <CardTitle className="text-accent">Interested?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full h-12 text-lg font-bold"
                    variant="industrial"
                    asChild>
                    <a href="tel:+18165270090">
                      <Phone className="mr-2 h-5 w-5" /> Call Sales
                    </a>
                  </Button>
                  <Button
                    className="w-full h-12 text-lg font-bold"
                    variant="outline">
                    <Mail className="mr-2 h-5 w-5" /> Email Inquiry
                  </Button>
                  <Button
                    className="w-full h-12 text-lg font-bold"
                    variant="secondary"
                    asChild>
                    <Link href="/financing">Get Pre-Qualified</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="bg-zinc-900 p-6 rounded-sm border border-zinc-800">
                <h4 className="font-bold text-white uppercase mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-accent h-5 w-5" /> Buy With
                  Confidence
                </h4>
                <ul className="text-sm text-zinc-400 space-y-2">
                  <li>• DOT Inspected</li>
                  <li>• Dyno Tested</li>
                  <li>• Detail Cleaned</li>
                  <li>• Oil Sample Available</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
