"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={ref}
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=3870&auto=format&fit=crop')", // Dark luxury interior
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-charcoal" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="block text-gold text-sm md:text-base tracking-[0.4em] uppercase font-bold">
            Est. 2024
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream tracking-tighter leading-tight drop-shadow-2xl">
            KING’S <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">CROWN</span>
          </h1>
          <p className="text-lg md:text-2xl text-cream/90 font-light tracking-wide max-w-2xl mx-auto font-sans">
            A culinary journey into the heart of <span className="text-gold italic font-serif">Royal Dining</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <Button
            size="lg"
            className="bg-gold text-charcoal hover:bg-white hover:text-charcoal font-bold tracking-widest px-10 py-8 text-sm uppercase rounded-none transition-all duration-300 min-w-[200px]"
          >
            Reserve a Table
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-cream hover:bg-white hover:text-charcoal font-bold tracking-widest px-10 py-8 text-sm uppercase rounded-none transition-all duration-300 min-w-[200px]"
          >
            View Menu
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
