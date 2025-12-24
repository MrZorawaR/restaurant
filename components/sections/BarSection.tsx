"use client";

import { motion } from "framer-motion";
import { barItems } from "@/data/bar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";

export function BarSection() {
  return (
    <section id="bar" className="py-24 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div className="space-y-4">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">
                Nightlife
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-cream font-bold">
                Bar & Lounge
            </h2>
        </div>
        <div className="hidden md:flex items-center text-gold text-sm font-bold tracking-widest uppercase gap-2">
            Scroll to Explore <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      <div className="relative w-full pl-6 md:pl-[calc((100vw-1280px)/2+1.5rem)]">
        <ScrollArea className="w-full whitespace-nowrap pb-10">
            <div className="flex w-max space-x-6">
                {barItems.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] flex-shrink-0 group overflow-hidden border border-white/5 cursor-pointer"
                    >
                         <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 whitespace-normal">
                             <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">{item.type}</span>
                             <h3 className="text-2xl font-serif text-cream font-bold mb-2">{item.name}</h3>
                             <p className="text-white/60 text-sm font-light font-sans">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" className="bg-white/5" />
        </ScrollArea>
      </div>
    </section>
  );
}
