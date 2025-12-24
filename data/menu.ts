export type Category = "Starters" | "Main Course" | "Chinese" | "Desserts" | "Beverages";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  details: string; // Longer description for modal
  tags?: string[];
}

export const menuCategories: Category[] = [
  "Starters",
  "Main Course",
  "Chinese",
  "Desserts",
  "Beverages",
];

export const menuItems: Dish[] = [
  // Starters
  {
    id: "s1",
    name: "Royal Truffle Edamame",
    description: "Steamed edamame beans tossed in white truffle oil and sea salt.",
    price: "$18",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1729875748324-4698a047ccb5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "Premium young soybeans steamed to perfection and tossed in aromatic white truffle oil, finished with Maldon sea salt flakes. A signature starter to awaken the palate.",
    tags: ["Vegan", "GF"],
  },
  {
    id: "s2",
    name: "Golden Prawn Tempura",
    description: "Crispy tiger prawns served with spicy mayo and gold dust.",
    price: "$24",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1735102087274-ad50ec0d4c44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "Large tiger prawns battered in our secret tempura mix, fried to a light golden crisp. Served with house-made spicy mayonnaise and garnished with edible 24k gold for a royal touch.",
  },
  {
    id: "s3",
    name: "Wagyu Beef Carpaccio",
    description: "Thinly sliced A5 Wagyu with truffle ponzu and crispy garlic.",
    price: "$32",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1589536386711-5300f262657f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "Expertly sliced A5 Japanese Wagyu beef, dressed with a delicate truffle ponzu sauce. Topped with microgreens and crispy garlic chips for texture.",
  },

  // Main Course
  {
    id: "m1",
    name: "Pan-Seared Scallops",
    description: "Jumbo scallops on cauliflower puree with saffron butter.",
    price: "$38",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop",
    details: "Fresh jumbo Atlantic scallops pan-seared to caramelized perfection. Served atop a silky cauliflower puree and drizzled with a rich saffron butter sauce.",
    tags: ["GF"],
  },
  {
    id: "m2",
    name: "Herb-Crusted Lamb Rack",
    description: "New Zealand lamb with fondant potatoes and rosemary jus.",
    price: "$45",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1600891965058-293673c68379?q=80&w=2070&auto=format&fit=crop",
    details: "Tender rack of New Zealand lamb, coated in a fresh herb crust and roasted medium-rare. Accompanied by buttery fondant potatoes and a robust rosemary jus.",
  },
  {
    id: "m3",
    name: "Lobster Thermidor",
    description: "Whole lobster gratin with brandy cream sauce and parmesan.",
    price: "$65",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1553163147-62195751691c?q=80&w=2069&auto=format&fit=crop",
    details: "A classic French dish fit for royalty. Whole lobster meat mixed with a rich brandy cream sauce, returned to the shell, and gratinated with parmesan cheese.",
  },

  // Chinese
  {
    id: "c1",
    name: "Peking Duck",
    description: "Traditional roasted duck with pancakes and hoisin sauce.",
    price: "$55",
    category: "Chinese",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2088&auto=format&fit=crop",
    details: "Crispy skin roasted duck carved tableside. Served with steamed pancakes, scallions, cucumber, and our signature hoisin sauce.",
  },
  {
    id: "c2",
    name: "Szechuan Kung Pao Chicken",
    description: "Spicy stir-fry with peanuts, vegetables, and chili peppers.",
    price: "$28",
    category: "Chinese",
    image: "https://images.unsplash.com/photo-1623689048105-a17b1e1936b8?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "A fiery delight featuring tender chicken cubes stir-fried with peanuts, vegetables, and chili peppers in a savory, spicy Szechuan sauce.",
  },

  // Desserts
  {
    id: "d1",
    name: "Gold Leaf Chocolate Moelleux",
    description: "Warm chocolate lava cake with vanilla bean ice cream.",
    price: "$22",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop",
    details: "Decadent dark chocolate cake with a molten center. Served warm with a scoop of Madagascar vanilla bean ice cream and adorned with edible gold leaf.",
  },
  {
    id: "d2",
    name: "Saffron & Pistachio Kulfi",
    description: "Traditional frozen dairy dessert with cardamom and rose.",
    price: "$16",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1974&auto=format&fit=crop",
    details: "Creamy, dense frozen dessert flavored with saffron, cardamom, and roasted pistachios. Garnished with dried rose petals.",
    tags: ["GF"],
  },

  // Beverages
  {
    id: "b1",
    name: "The Royal Crown",
    description: "Signature cocktail with whiskey, gold dust, and smoked honey.",
    price: "$20",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1601219533375-6f5ddc7f8212?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "Our house signature. Aged whiskey smoked with hickory wood, sweetened with local organic honey, and shaken with edible gold dust.",
  },
  {
    id: "b2",
    name: "Velvet Martini",
    description: "Vodka, espresso, and coffee liqueur with a creamy finish.",
    price: "$18",
    category: "Beverages",
    image: "https://plus.unsplash.com/premium_photo-1670333242891-c7d79208991d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "A sophisticated pick-me-up. Premium vodka shaken vigorously with fresh espresso and coffee liqueur for a velvety foam layer.",
  },
];
