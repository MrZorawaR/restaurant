export interface BarItem {
  id: string;
  name: string;
  description: string;
  image: string;
  type: "Cocktail" | "Lounge" | "Mocktail";
}

export const barItems: BarItem[] = [
  {
    id: "b1",
    name: "The Golden Era",
    description: "A timeless blend of aged whiskey, smoked honey, and gold dust.",
    image: "https://plus.unsplash.com/premium_photo-1694994145939-e14a3db640a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Cocktail",
  },
  {
    id: "b2",
    name: "Midnight Velvet",
    description: "An elegant fusion of espresso, premium vodka, and dark chocolate liqueur.",
    image: "https://images.unsplash.com/photo-1701541065403-750666e4a3b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Cocktail",
  },
  {
    id: "b3",
    name: "Royal Lounge",
    description: "Experience our plush velvet seating and intimate atmosphere.",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1974&auto=format&fit=crop",
    type: "Lounge",
  },
  {
    id: "b4",
    name: "Sapphire Gin Fizz",
    description: "Botanical gin, blue curaçao, egg white, and fresh lemon.",
    image: "https://images.unsplash.com/photo-1685700947293-1a4e62e095b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29ja3RhaWwlMjBTYXBwaGlyZSUyMEdpbnxlbnwwfHwwfHx8MA%3D%3D",
    type: "Cocktail",
  },
  {
    id: "b5",
    name: "Virgin Rose",
    description: "Sparkling rose water, cranberry, and lime twist.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop",
    type: "Mocktail",
  },
];
