export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Eleanor P.",
    role: "Food Critic",
    content: "An absolute masterpiece of culinary art. The attention to detail in every dish is simply regality on a plate.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "James D.",
    role: "Regular Patron",
    content: "The ambiance is unmatched. Whether it's a business dinner or a romantic evening, We delivers perfection.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Sarah M.",
    role: "Event Planner",
    content: "Hosted a corporate gala here and the service was impeccable. Truly a five-star experience from start to finish.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: "t4",
    name: "Michael R.",
    role: "Chef",
    content: "The flavors are bold yet refined. The truffle edamame is a revelation. Highly recommended.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",
  },
];
