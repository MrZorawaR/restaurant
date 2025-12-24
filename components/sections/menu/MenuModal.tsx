"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dish } from "@/data/menu";
import { Heart, Share2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface MenuModalProps {
  dish: Dish | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MenuModal({ dish, open, onOpenChange }: MenuModalProps) {
  const [liked, setLiked] = useState(false);

  if (!dish) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-charcoal border-white/10 sm:rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh] md:h-auto">
          {/* Image Side */}
          <div className="relative h-64 md:h-full w-full bg-zinc-900">
             {/* Using standard img for now if next/image config is strict about domains, but using img tag with className is safer for quick prototyping without next.config updates, though we should use Image */}
             {/* We'll use a simple img tag for maximum compatibility with external unsplash urls without config churn, or handle next/image loader */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${dish.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Content Side */}
          <div className="flex flex-col h-full bg-charcoal p-6 md:p-8 relative">
             <DialogClose className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
             </DialogClose>

             <div className="mt-4 space-y-2">
                <Badge variant="outline" className="text-gold border-gold/30 rounded-none uppercase tracking-widest text-[10px]">
                    {dish.category}
                </Badge>
                <DialogTitle className="text-3xl font-serif text-cream font-bold">
                    {dish.name}
                </DialogTitle>
                <p className="text-gold text-xl font-medium font-serif">{dish.price}</p>
             </div>

             <ScrollArea className="flex-1 mt-6 text-white/70 font-light leading-relaxed pr-4 max-h-[200px] md:max-h-none">
                <DialogDescription className="text-white/80 text-base">
                    {dish.details}
                </DialogDescription>
                {dish.tags && (
                    <div className="mt-4 flex gap-2">
                        {dish.tags.map(tag => (
                            <span key={tag} className="text-xs text-white/40 border border-white/10 px-2 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
             </ScrollArea>

             <div className="mt-auto pt-8 flex gap-4">
                <Button 
                    className="flex-1 bg-gold text-charcoal hover:bg-white hover:text-charcoal font-bold uppercase tracking-widest rounded-none h-12"
                    onClick={() => onOpenChange(false)} // Just closes for "Add to Order" simulation or could show toast
                >
                    Add to Order
                </Button>
                <Button 
                    variant="outline" 
                    size="icon"
                    className={`h-12 w-12 rounded-none border-white/20 ${liked ? 'text-red-500 border-red-500' : 'text-cream hover:text-white'}`}
                    onClick={() => setLiked(!liked)}
                >
                    <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-none border-white/20 text-cream hover:text-white">
                    <Share2 className="h-5 w-5" />
                </Button>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
