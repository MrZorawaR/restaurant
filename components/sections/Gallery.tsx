"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages, GalleryImage } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { ZoomIn } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [open, setOpen] = useState(false);

  // Split images into columns for masonry effect (simple 3 columns)
  // In a real masonry component we might use a lib, but simple columns work for fixed data
  const col1 = galleryImages.filter((_, i) => i % 3 === 0);
  const col2 = galleryImages.filter((_, i) => i % 3 === 1);
  const col3 = galleryImages.filter((_, i) => i % 3 === 2);
  const columns = [col1, col2, col3];

  const handleImageClick = (img: GalleryImage) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const idx = galleryImages.findIndex(i => i.id === selectedImage.id);
    const nextIdx = (idx + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIdx]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const idx = galleryImages.findIndex(i => i.id === selectedImage.id);
    const prevIdx = (idx - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIdx]);
  };

  return (
    <section id="gallery" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">
                Visual Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-cream font-bold">
                The Gallery
            </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-6">
                    {col.map((img, idx) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative cursor-zoom-in overflow-hidden rounded-sm"
                            onClick={() => handleImageClick(img)}
                        >
                            <img 
                                src={img.src} 
                                alt={img.alt}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="text-gold h-8 w-8" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>

        <Lightbox 
            image={selectedImage}
            open={open}
            onOpenChange={setOpen}
            onNext={handleNext}
            onPrev={handlePrev}
        />
      </div>
    </section>
  );
}
