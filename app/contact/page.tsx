'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/sections/contact';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 min-h-screen pt-24">
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-oswald font-bold text-white uppercase">
                Get In <span className="text-accent">Touch</span>
              </h1>
              <p className="text-zinc-400 text-lg">
                Have questions about our inventory? Need financing? Ready to
                sell? We're here to help. Fill out the form or give us a call.
              </p>
              <div className="h-1 w-24 bg-accent rounded-full" />

              <div className="pt-8">
                <h3 className="text-2xl font-oswald font-bold text-white uppercase mb-4">
                  Department Emails
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-zinc-900 border border-zinc-800 rounded-sm">
                    <Mail className="text-accent h-5 w-5" />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
                        Sales
                      </p>
                      <a
                        href="mailto:sales@rocktt.com"
                        className="text-white hover:text-accent font-bold">
                        sales@rocktt.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-zinc-900 border border-zinc-800 rounded-sm">
                    <Mail className="text-accent h-5 w-5" />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
                        Financing
                      </p>
                      <a
                        href="mailto:finance@rocktt.com"
                        className="text-white hover:text-accent font-bold">
                        finance@rocktt.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-oswald font-bold text-white uppercase mb-6 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-accent" /> Send A
                  Message
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Name
                    </label>
                    <input
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-300">
                      Phone
                    </label>
                    <input
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-300">
                    Email
                  </label>
                  <input
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-300">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-3 text-white focus:border-accent outline-none min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  className="w-full h-14 text-lg font-bold"
                  variant="industrial">
                  SEND MESSAGE
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Reusing Contact Section for Map/Location Info */}
      <ContactSection />
    </div>
  );
}
