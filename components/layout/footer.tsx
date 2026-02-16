import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 md:py-16 border-t border-zinc-900 font-sans">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-10">
                <Image
                  src="/logo.png"
                  alt="Rock Truck & Trailer"
                  fill
                  className="object-contain invert brightness-0 grayscale"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner for quality semi trucks, trailers, and heavy
              equipment. Wholesale prices, nationwide delivery.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-oswald font-bold uppercase tracking-wider mb-6">
              Inventory
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/inventory"
                  className="hover:text-accent transition-colors">
                  All Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory?category=sleepers"
                  className="hover:text-accent transition-colors">
                  Sleepers
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory?category=daycabs"
                  className="hover:text-accent transition-colors">
                  Day Cabs
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory?category=reefers"
                  className="hover:text-accent transition-colors">
                  Reefers
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory?category=dry-vans"
                  className="hover:text-accent transition-colors">
                  Dry Vans
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory?category=flatbeds"
                  className="hover:text-accent transition-colors">
                  Flatbeds
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-oswald font-bold uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/financing"
                  className="hover:text-accent transition-colors">
                  Financing
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-accent transition-colors">
                  Resources / Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/sell-your-equipment"
                  className="hover:text-accent transition-colors">
                  Sell Your Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-oswald font-bold uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Main Office</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:9132984060"
                  className="hover:text-white transition-colors">
                  913-298-4060
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@rocktt.com"
                  className="hover:text-white transition-colors">
                  info@rocktt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>&copy; 2026 Rock Truck & Trailer. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
