export const products = [
  {
    id: 1,
    name: "Premium Almonds",
    description: "Fresh, crunchy almonds sourced from the finest orchards. Rich in healthy fats and perfect for snacking.",
    price: 450,
    originalPrice: 500,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "nuts",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: ["Premium Quality", "Rich in Nutrients", "No Preservatives"],
    nutrition: {
      calories: 579,
      protein: 21.2,
      fat: 49.9,
      carbs: 21.6
    }
  },
  {
    id: 2,
    name: "California Cashews",
    description: "Buttery, creamy cashews with a delicate flavor. Perfect for cooking and snacking.",
    price: 520,
    originalPrice: 600,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400",
    category: "nuts",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    features: ["Premium Quality", "Buttery Texture", "Versatile Use"],
    nutrition: {
      calories: 553,
      protein: 18.2,
      fat: 43.8,
      carbs: 30.2
    }
  },
  {
    id: 3,
    name: "Iranian Pistachios",
    description: "Premium pistachios with vibrant green kernels. Naturally sweet and crunchy.",
    price: 680,
    originalPrice: 750,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1564729694921-2e9a7b79c9a5?w=400",
    category: "nuts",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ["Premium Quality", "Naturally Sweet", "High Protein"],
    nutrition: {
      calories: 562,
      protein: 20.2,
      fat: 45.3,
      carbs: 27.5
    }
  },
  {
    id: 4,
    name: "Medjool Dates",
    description: "Large, soft, and naturally sweet dates. Perfect for desserts and healthy snacking.",
    price: 380,
    originalPrice: 420,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400",
    category: "dates",
    rating: 4.6,
    reviews: 98,
    inStock: true,
    features: ["Naturally Sweet", "High Fiber", "Energy Boost"],
    nutrition: {
      calories: 277,
      protein: 1.8,
      fat: 0.2,
      carbs: 74.9
    }
  },
  {
    id: 5,
    name: "Organic Almonds",
    description: "Certified organic almonds grown without pesticides. Perfect for health-conscious consumers.",
    price: 480,
    originalPrice: 550,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "nuts",
    rating: 4.8,
    reviews: 67,
    inStock: true,
    features: ["Organic Certified", "Pesticide Free", "Nutrient Rich"],
    nutrition: {
      calories: 579,
      protein: 21.2,
      fat: 49.9,
      carbs: 21.6
    }
  },
  {
    id: 6,
    name: "Roasted Cashews",
    description: "Perfectly roasted cashews with a golden color and enhanced flavor. Great for trail mix.",
    price: 550,
    originalPrice: 620,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400",
    category: "nuts",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    features: ["Perfectly Roasted", "Enhanced Flavor", "Great for Mixes"],
    nutrition: {
      calories: 553,
      protein: 18.2,
      fat: 43.8,
      carbs: 30.2
    }
  },
  {
    id: 7,
    name: "Salted Pistachios",
    description: "Premium pistachios lightly salted for enhanced taste. Perfect party snack.",
    price: 720,
    originalPrice: 800,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1564729694921-2e9a7b79c9a5?w=400",
    category: "nuts",
    rating: 4.5,
    reviews: 78,
    inStock: true,
    features: ["Lightly Salted", "Party Perfect", "Premium Quality"],
    nutrition: {
      calories: 562,
      protein: 20.2,
      fat: 45.3,
      carbs: 27.5
    }
  },
  {
    id: 8,
    name: "Deglet Noor Dates",
    description: "Semi-dry dates with a rich, caramel-like flavor. Excellent for cooking and baking.",
    price: 320,
    originalPrice: 380,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400",
    category: "dates",
    rating: 4.4,
    reviews: 45,
    inStock: true,
    features: ["Rich Flavor", "Great for Cooking", "Semi-Dry"],
    nutrition: {
      calories: 277,
      protein: 1.8,
      fat: 0.2,
      carbs: 74.9
    }
  }
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "nuts", name: "Nuts", count: products.filter(p => p.category === "nuts").length },
  { id: "dates", name: "Dates", count: products.filter(p => p.category === "dates").length }
];

export const reviews = [
  {
    id: 1,
    productId: 1,
    user: "Priya Sharma",
    rating: 5,
    comment: "Absolutely delicious! The quality is outstanding and they arrived fresh.",
    date: "2024-01-15"
  },
  {
    id: 2,
    productId: 1,
    user: "Rajesh Kumar",
    rating: 4,
    comment: "Great almonds, very crunchy and fresh. Will order again.",
    date: "2024-01-10"
  },
  {
    id: 3,
    productId: 2,
    user: "Anita Patel",
    rating: 5,
    comment: "These cashews are perfect for my cooking. Love the buttery texture!",
    date: "2024-01-12"
  }
];