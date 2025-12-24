import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/menu/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { BarSection } from "@/components/sections/BarSection";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-charcoal min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <BarSection />
      <Events />
      <Testimonials />

      <Footer />
    </div>
  );
}
