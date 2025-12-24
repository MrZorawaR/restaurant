"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Bar & Lounge", href: "#bar" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md py-4 border-white/10 shadow-lg"
          : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-serif text-cream font-bold tracking-wider group-hover:text-gold transition-colors duration-300">
            KING’S CROWN
          </h1>
          <span className="block text-[10px] tracking-[0.3em] text-gold uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            Taste of Royalty
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-charcoal rounded-none px-6 uppercase tracking-wider text-xs font-bold transition-all duration-300"
          >
            Reserve Table
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-cream hover:text-gold hover:bg-transparent"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-charcoal border-l border-white/10 w-[300px] sm:w-[400px]"
            >
              <div className="flex flex-col h-full py-10">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="mb-10 text-center">
                  <h2 className="text-2xl font-serif text-gold font-bold">
                    KING’S CROWN
                  </h2>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xl font-serif text-cream hover:text-gold transition-colors flex items-center justify-between group border-b border-white/5 pb-4"
                      >
                        {link.name}
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all text-gold -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button className="w-full bg-gold text-charcoal hover:bg-white hover:text-charcoal font-bold uppercase tracking-widest py-6 rounded-none">
                    Reserve Table
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
