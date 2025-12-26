"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">
                The Experience
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-cream font-bold leading-tight">
                Dine in <br /><span className="text-gold italic">Royal Comfort</span>
              </h2>
            </div>
            
            <p className="text-white/70 text-lg leading-relaxed font-light">
              It is not just a restaurant; it is a sanctuary of taste and luxury. 
              Designed with warm wood accents, polished copper, and deep velvet seating, 
              we invite you to step into a world where time slows down.
            </p>
            
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Our boutique bar serves curated cocktails, while our kitchen prepares 
              premium plated dishes that are as visually stunning as they are delicious.
            </p>

            <Button
              variant="outline"
              className="mt-4 border-gold text-gold hover:bg-gold hover:text-charcoal rounded-none px-8 py-6 uppercase tracking-widest text-xs font-bold transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                <div className="h-64 w-full bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
                <div className="h-48 w-full bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
              </div>
              <div className="space-y-4">
                <div className="h-48 w-full bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
                <div className="h-64 w-full bg-[url('https://images.unsplash.com/photo-1551632436-cbf8dd354ca1?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[100px] rounded-full opacity-50 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
