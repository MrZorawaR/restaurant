"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuCategories, menuItems, Dish, Category } from "@/data/menu";
import { DishCard } from "./DishCard";
import { MenuModal } from "./MenuModal";

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Starters");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
    setDetailsOpen(true);
  };

  return (
    <section id="menu" className="py-24 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">
                Culinary Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-cream font-bold">
                Our Signature Menu
            </h2>
        </div>

        <Tabs 
            defaultValue="Starters" 
            className="w-full flex flex-col items-center"
            onValueChange={(val) => setSelectedCategory(val as Category)}
        >
          <TabsList className="bg-transparent border-b border-white/10 w-full flex-wrap justify-center h-auto gap-4 md:gap-8 pb-4 mb-12">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="bg-transparent text-white/50 data-[state=active]:text-gold data-[state=active]:bg-transparent data-[state=active]:shadow-none text-lg md:text-xl font-serif capitalize transition-all duration-300 rounded-none border-b-2 border-transparent data-[state=active]:border-gold px-2 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredItems.map((dish) => (
                        <DishCard key={dish.id} dish={dish} onClick={handleDishClick} />
                    ))}
                </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>

        <MenuModal 
            dish={selectedDish} 
            open={detailsOpen} 
            onOpenChange={setDetailsOpen} 
        />
      </div>
    </section>
  );
}
