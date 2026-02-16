'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { contacts } from '@/lib/contacts';

export function ContactSection() {
  return (
    <Section className="bg-black border-t border-zinc-900 pb-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-zinc-800 rounded-sm overflow-hidden">
          {/* Info Side */}
          <div className="bg-zinc-900 p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-4xl font-oswald font-bold text-white uppercase mb-2">
                Questions? <span className="text-accent">Contact Us</span>
              </h2>
              <div className="h-1 w-16 bg-accent rounded-full mb-6" />
              <p className="text-zinc-400">
                Our sales team is ready to help you find the right equipment for
                your needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 rounded-sm border border-zinc-800 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Main Office
                  </h4>
                  <p className="text-zinc-400">913-298-4060</p>
                  <p className="text-zinc-400">info@rocktt.com</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contacts
                  .filter(c => c.role === 'Sales')
                  .map((contact, i) => (
                    <div
                      key={i}
                      className="bg-zinc-950 p-4 border border-zinc-800 rounded-sm">
                      <h5 className="font-bold text-white">{contact.name}</h5>
                      <a
                        href={`tel:${contact.phone}`}
                        className="block text-zinc-400 hover:text-accent text-sm">
                        {contact.phone}
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="block text-zinc-500 hover:text-white text-xs">
                        {contact.email}
                      </a>
                    </div>
                  ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                className="w-full h-14 font-bold text-lg"
                variant="industrial"
                asChild>
                <a href="tel:9132984060">CALL MAIN OFFICE</a>
              </Button>
            </div>
          </div>

          {/* Map Side */}
          <div className="bg-zinc-800 h-[400px] lg:h-auto min-h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.643666578056!2d-94.34110302353396!3d39.14170897167232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e5a881358a9d%3A0x6b6d51c06888c3a9!2s21101%20E%2024%20Hwy%2C%20Independence%2C%20MO%2064058!5e0!3m2!1sen!2sus!4v1707071234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(100%) invert(90%) contrast(83%)',
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
