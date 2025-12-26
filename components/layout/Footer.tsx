import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="block group">
              <h2 className="text-2xl font-serif text-cream font-bold tracking-wider group-hover:text-gold transition-colors">
                RESTAURANT
              </h2>
              <span className="block text-[10px] tracking-[0.3em] text-gold uppercase opacity-80 mt-1">
                Taste of Royalty
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-light font-sans max-w-xs transition-colors hover:text-white/80">
              Experience the finest culinary artistry in an atmosphere of royal elegance.
              Where every meal is a celebration of taste.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Explore</h3>
            <ul className="space-y-3 text-sm text-white/70 font-sans">
              <li><Link href="#menu" className="hover:text-gold transition-colors">Our Menu</Link></li>
              <li><Link href="#gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="#events" className="hover:text-gold transition-colors">Private Events</Link></li>
              <li><Link href="#bar" className="hover:text-gold transition-colors">Bar & Lounge</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70 font-sans">
              <li className="flex flex-col">
                <span className="text-white/40 text-xs mb-1">Location</span>
                <span>Any perfect location</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs mb-1">Reservations</span>
                <span className="font-serif text-lg text-cream">+91 9876543210</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs mb-1">Email</span>
                <span>hello@restaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Opening Hours</h3>
            <ul className="space-y-3 text-sm text-white/70 font-sans">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Thu</span>
                <span className="text-white">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Fri - Sat</span>
                <span className="text-white">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-white">10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
        <div>

          <p className="text-xs text-white/40 font-sans">
            © {new Date().getFullYear()} Restaurant. All rights reserved.
          </p>
          <a href="www.croft.co.in" className="text-xs hover:text-white text-gold transition-colors" target="_blank" rel="noopener noreferrer">
            Powered By Croft
          </a>
        </div>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-white/40 hover:text-gold transition-colors">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-white/40 hover:text-gold transition-colors">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white/40 hover:text-gold transition-colors">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
