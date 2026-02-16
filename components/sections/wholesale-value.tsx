'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { DollarSign, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Wholesale Reefers, Dry Vans, & Sleepers',
    description:
      'Rock Truck & Trailer is an equipment dealership in Kansas City, offering wholesale reefers, dry vans, and sleepers at the best prices. We aren’t a normal dealership, because you can buy directly from us at wholesale price and save thousands. We don’t have a fancy sales lot, but we do have the lowest prices on good, clean equipment in the country.',
  },
  {
    icon: Users,
    title: 'Buying From Rock Truck & Trailer',
    description:
      'When you buy from Rock, you are buying at a “wholesale price.” In other words, you pay the same price a truck dealer pays when they buy from us. We guarantee that you won’t find a better price on the same truck or trailer anywhere in the U.S.',
  },
  {
    icon: BarChart3,
    title: 'How Are The Prices So Low?',
    description:
      'We buy huge packages of equipment, 100+ at a time, so we get a great price on what we buy. We don’t operate a big retail sales lot, so we don’t have all that overhead cost. We sell at a lower profit margin, and make it up by selling a lot more equipment.',
  },
];

export function WholesaleValueSection() {
  return (
    <Section className="bg-zinc-900 border-t border-zinc-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4 uppercase">
            Wholesale <span className="text-accent">Pricing</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-950 p-8 rounded-sm border border-zinc-800 hover:border-accent/50 transition-colors group">
              <div className="mb-6 inline-flex p-3 rounded-full bg-zinc-900 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase font-oswald">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
