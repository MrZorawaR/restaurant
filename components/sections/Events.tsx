"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Removed unused Calendar import
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  date: z.string().refine((val) => val !== "", { message: "Please select a date." }),
  guests: z.string().refine((val) => parseInt(val) > 0, { message: "At least 1 guest required." }),
  type: z.string().min(1, { message: "Please select an event type." }),
  notes: z.string().optional(),
});

export function Events() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      type: "Dinner",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success("Reservation request sent!", {
        description: "We will confirm your table shortly via email.",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  }

  return (
    <section id="events" className="py-24 bg-charcoal border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div className="space-y-8">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">
              Reservations
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-cream font-bold leading-tight">
              Book Your <br /><span className="text-gold italic">Royal Table</span>
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed">
              Whether it's an intimate dinner for two, a corporate gathering, or a grand celebration, 
              King's Crown offers the perfect setting. Reserve your table now for an unforgettable experience.
            </p>
            
            <div className="space-y-4 pt-4">
                <h3 className="text-gold text-sm font-bold uppercase tracking-widest">For Private Events</h3>
                <p className="text-white/60 text-sm font-light">
                    Contact our event concierge directly for parties larger than 12 or for private lounge buyouts.
                    <br />
                    <span className="text-cream block mt-2 font-serif font-medium text-lg">+91 9876543210</span>
                </p>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/50 p-8 md:p-12 border border-white/5 backdrop-blur-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-gold font-bold">Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-charcoal border-white/10 text-cream focus:border-gold rounded-none h-12" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-gold font-bold">Phone</FormLabel>
                        <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} className="bg-charcoal border-white/10 text-cream focus:border-gold rounded-none h-12" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-gold font-bold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-charcoal border-white/10 text-cream focus:border-gold rounded-none h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-gold font-bold">Date</FormLabel>
                        <FormControl>
                            <Input type="date" {...field} className="bg-charcoal border-white/10 text-cream focus:border-gold rounded-none h-12 [color-scheme:dark]" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-gold font-bold">Guests</FormLabel>
                        <FormControl>
                            <Input type="number" min="1" max="12" {...field} className="bg-charcoal border-white/10 text-cream focus:border-gold rounded-none h-12" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-gold font-bold">Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="bg-charcoal border-white/10 text-cream focus:border-gold rounded-none h-12">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-charcoal border-white/10 text-cream">
                                <SelectItem value="Dinner">Dinner</SelectItem>
                                <SelectItem value="Lunch">Lunch</SelectItem>
                                <SelectItem value="Birthday">Birthday</SelectItem>
                                <SelectItem value="Anniversary">Anniversary</SelectItem>
                                <SelectItem value="Private">Private</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <Button 
                    type="submit" 
                    className="w-full bg-gold text-charcoal hover:bg-white hover:text-charcoal font-bold uppercase tracking-widest py-6 rounded-none transition-all duration-300"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                        </>
                    ) : (
                        "Confirm Reservation"
                    )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
    </section>
  );
}
