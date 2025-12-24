"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
         <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-4">
            Guestbook
         </span>
         <h2 className="text-4xl md:text-5xl font-serif text-cream font-bold mb-16">
            Words from our <span className="text-gold">Guests</span>
         </h2>

        <div className="max-w-4xl mx-auto">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {testimonials.map((item) => (
                        <CarouselItem key={item.id} className="md:basis-1/1 lg:basis-1/1">
                            <div className="p-1">
                                <Card className="bg-transparent border-none shadow-none">
                                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-8">
                                        <Quote className="h-12 w-12 text-gold opacity-50" />
                                        <blockquote className="text-xl md:text-2xl font-serif text-white/90 italic leading-relaxed max-w-2xl">
                                            "{item.content}"
                                        </blockquote>
                                        <div className="flex items-center gap-4">
                                            <div 
                                                className="h-12 w-12 rounded-full bg-cover bg-center border border-gold/50" 
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className="text-left">
                                                <cite className="not-italic font-bold text-cream block uppercase tracking-wide text-sm">
                                                    {item.name}
                                                </cite>
                                                <span className="text-gold/70 text-xs uppercase tracking-widest font-bold">
                                                    {item.role}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-transparent border-white/10 text-cream hover:bg-gold hover:text-charcoal" />
                <CarouselNext className="hidden md:flex bg-transparent border-white/10 text-cream hover:bg-gold hover:text-charcoal" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
