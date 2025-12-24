"use client";

import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { GalleryImage } from "@/data/gallery";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useCallback } from "react";

interface LightboxProps {
  image: GalleryImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ image, open, onOpenChange, onNext, onPrev }: LightboxProps) {
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  }, [onNext, onPrev]);

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  if (!image) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[100vw] h-[100vh] p-0 border-none bg-black/95 flex items-center justify-center sm:rounded-none">
        <DialogTitle className="sr-only">Viewing {image.alt}</DialogTitle>
        
        <DialogClose className="absolute top-6 right-6 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-white/20 transition-colors">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-12 w-12 rounded-full z-50"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">Previous image</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-12 w-12 rounded-full z-50"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Next image</span>
        </Button>

        <div className="relative h-full w-full flex items-center justify-center p-4 md:p-20">
            {/* Using img for simplicity with external urls again, or could use next/image with full size */}
           <img 
              src={image.src} 
              alt={image.alt}
              className="max-h-full max-w-full object-contain shadow-2xl"
           />
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
             <p className="text-white font-serif text-xl tracking-wide">{image.alt}</p>
             <span className="text-gold text-sm tracking-widest uppercase mt-1 block">{image.category}</span>
           </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
