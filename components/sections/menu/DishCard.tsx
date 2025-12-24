"use client";

import { motion } from "framer-motion";
import { Dish } from "@/data/menu";
import { Plus } from "lucide-react";

interface DishCardProps {
  dish: Dish;
  onClick: (dish: Dish) => void;
}

export function DishCard({ dish, onClick }: DishCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer bg-charcoal border border-white/5 relative overflow-hidden"
      onClick={() => onClick(dish)}
    >
      {/* Image */}
      <div className="h-64 w-full overflow-hidden relative">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            style={{ backgroundImage: `url(${dish.image})` }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        
        {/* Overlay Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gold/90 p-3 rounded-full">
                <Plus className="h-6 w-6 text-charcoal" />
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 relative z-10 bg-charcoal transition-colors group-hover:bg-zinc-900/50">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-serif text-cream font-medium group-hover:text-gold transition-colors">
                {dish.name}
            </h3>
            <span className="text-gold font-bold font-serif">{dish.price}</span>
        </div>
        <p className="text-white/60 text-sm font-light line-clamp-2 min-h-[40px]">
            {dish.description}
        </p>
      </div>
    </motion.div>
  );
}
