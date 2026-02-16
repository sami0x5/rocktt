'use client';

import * as React from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/use-scrolled';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { name: 'Sleepers', href: '/inventory?category=sleepers' },
  { name: 'Reefers', href: '/inventory?category=reefers' },
  { name: 'Dry Vans', href: '/inventory?category=dry-vans' },
  { name: 'Cranes', href: 'https://www.rockcal.com/', external: true }, // Assuming external link based on "links off-site", using generic placeholder or just # if unknown
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const scrolled = useScrolled();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-oswald uppercase',
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4 md:py-6',
      )}>
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <div className="relative w-40 h-10 md:w-52 md:h-12 p-1">
            <Image
              src="/logo.png"
              alt="Rock Truck & Trailer"
              fill
              className="object-contain invert brightness-0 grayscale"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              className="text-sm font-bold tracking-wide text-white/90 hover:text-accent transition-colors">
              {item.name}
            </Link>
          ))}
          <Button variant="industrial" size="sm" asChild>
            <Link href="/inventory">SEE OUR INVENTORY</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden 2xl:inline-flex">
            <Link href="/sell-your-equipment">Sell Equipment</Link>
          </Button>
          <a
            href="tel:+18165270090" // Placeholder number
            className="flex items-center gap-2 text-white hover:text-accent transition-colors font-bold">
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">Call Now</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          {mobileMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-zinc-950 flex flex-col pt-32 px-6 md:hidden">
              <nav className="flex flex-col gap-6 text-center">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-bold text-white hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/sell-your-equipment"
                  className="text-2xl font-bold text-accent hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}>
                  Sell Your Equipment
                </Link>
                <div className="w-full h-px bg-white/10 my-4" />
                <Link
                  href="tel:8165270090"
                  className="flex text-2xl font-bold text-white justify-center items-center gap-2 hover:text-accent">
                  <Phone className="w-6 h-6" /> Call Now
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
