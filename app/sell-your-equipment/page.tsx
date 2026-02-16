'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Camera } from 'lucide-react';

export default function SellPage() {
  return (
    <div className="bg-zinc-950 min-h-screen pt-24">
      <Section className="pb-0">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white uppercase mb-6 leading-none">
              Clean Up Your <span className="text-accent">Yard</span>
            </h1>
            <p className="text-xl text-zinc-300">
              Turn your unused equipment into cash. We buy used semi trucks,
              trailers, and heavy machinery. Fair prices, fast payment.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-zinc-900 border-y border-zinc-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: '1. Submit Info',
                desc: 'Fill out the simple form below with your equipment details.',
              },
              {
                title: '2. Get an Offer',
                desc: 'Our buyers will review your submission and contact you with a cash offer.',
              },
              {
                title: '3. Get Paid',
                desc: 'We handle the paperwork and arrange pickup. You get paid fast.',
              },
            ].map((step, i) => (
              <div key={i} className="p-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-accent font-bold text-xl mx-auto mb-4 border border-zinc-700">
                  {i + 1}
                </div>
                <h3 className="text-xl font-oswald font-bold text-white uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-900 border-zinc-800 shadow-2xl">
              <CardHeader className="text-center border-b border-zinc-800 pb-8">
                <CardTitle className="text-3xl text-white">
                  Equipment Information
                </CardTitle>
                <p className="text-zinc-400">
                  Tell us about what you're selling
                </p>
              </CardHeader>
              <CardContent className="space-y-6 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Year
                    </label>
                    <input
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                      placeholder="2018"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Make
                    </label>
                    <input
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                      placeholder="Peterbilt"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Model
                    </label>
                    <input
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                      placeholder="579"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Mileage/Hours
                    </label>
                    <input
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                      placeholder="450,000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-300">
                    Condition / Notes
                  </label>
                  <textarea
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none min-h-[100px]"
                    placeholder="Runs good, new tires, etc."
                  />
                </div>

                <div className="border border-dashed border-zinc-700 rounded-sm p-8 text-center bg-zinc-950/50 hover:bg-zinc-950 transition-colors cursor-pointer group">
                  <Camera className="h-8 w-8 text-zinc-500 mx-auto mb-2 group-hover:text-accent transition-colors" />
                  <p className="text-zinc-400 font-bold group-hover:text-white">
                    Upload Photos
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    Click to select files
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800">
                  <h3 className="text-xl font-oswald font-bold text-white uppercase mb-4">
                    Your Contact Info
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-300">
                        Name
                      </label>
                      <input className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-300">
                        Phone
                      </label>
                      <input className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none" />
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full h-14 text-lg font-bold"
                  variant="industrial">
                  SUBMIT FOR OFFER
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
