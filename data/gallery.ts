export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Interior" | "Food" | "Events";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Main Dining Hall",
    category: "Interior",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1654856842828-e7c47a973b39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bar Lounge Area",
    category: "Interior",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Private Booth Seating",
    category: "Interior",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    alt: "Signature Starters",
    category: "Food",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",
    alt: "Chef Plating Dish",
    category: "Food",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1974&auto=format&fit=crop",
    alt: "Dessert Presentation",
    category: "Food",
  },
  {
    id: "g7",
    src: "https://plus.unsplash.com/premium_photo-1681841594224-ad729a249113?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Private Event Setup",
    category: "Events",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    alt: "Outdoor Terrace",
    category: "Interior",
  },
];
