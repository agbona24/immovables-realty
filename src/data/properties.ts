export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceNumeric?: number; // Numeric value for filtering/comparison
  description: string;
  type: "Estate" | "House" | "Land" | "Commercial";
  status: "Available" | "Selling Fast" | "Few Units Left";
  features: string[];
  details: {
    size?: string;
    bedrooms?: number;
    bathrooms?: number;
    units?: number;
    plotSize?: string;
  };
  amenities: string[];
  image: string;
  gallery?: string[];
  videoUrl?: string; // YouTube/Vimeo video URL
  tour360Url?: string; // 360° virtual tour URL
  coordinates?: {
    lat: number;
    lng: number;
  };
  address?: string;
  contactInfo: {
    phone: string;
    whatsapp: string;
  };
}

export const properties: Property[] = [
  {
    id: "prime-haven-grove",
    title: "Prime Haven Grove Estate",
    location: "Abeokuta, Ogun State",
    price: "From ₦3M",
    priceNumeric: 3000000,
    description: "A Premium, Secure & Fast-Appreciating Estate in Abeokuta by Immovables Realty. Modern residential estate designed to offer comfort, security, and profitable real-estate investment. Strategically located in a fast-developing corridor of Abeokuta with verified ownership, ready-to-build land, and flexible payment plans (40% initial deposit, 60% balance spread). Available plot sizes: 300sqm, 600sqm, 900sqm. All plots come with Freehold Title, Registered Survey, and Registered Deed of Assignment.",
    type: "Estate",
    status: "Selling Fast",
    features: [
      "100% Dry, Table Land",
      "Freehold Title",
      "Registered Survey & Deed of Assignment",
      "Flexible Payment (40% Initial, 60% Balance)",
      "Ready-to-Build Environment",
      "Multiple Plot Sizes (300sqm, 600sqm, 900sqm)",
      "Fast-Appreciating Location",
      "Fully Verified Documentation",
    ],
    details: {
      plotSize: "300sqm - 900sqm",
    },
    amenities: [
      "Gated and Secured Environment",
      "Accessible Road Network",
      "Drainage and Sewage System",
      "Electricity Access and Streetlights",
      "Water System",
      "Green Recreational Spaces",
      "Clear Land Layout",
      "Peaceful Residential Neighbourhood",
    ],
    image: "/images/properties/prime-haven-grove.jpg",
    gallery: [
      "/images/properties/prime-haven-grove.jpg",
      "/images/properties/wura-gardens.jpg",
      "/images/properties/the-peninsula.jpg",
      "/images/properties/serenity-heights.jpg",
      "/images/properties/golden-palm-estate.jpg",
      "/images/properties/victoria-court.jpg",
    ],
    coordinates: {
      lat: 7.1475,
      lng: 3.3619,
    },
    address: "Prime Haven Grove Estate, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "wura-gardens",
    title: "Wura Gardens Estate",
    location: "Abeokuta, Ogun State",
    price: "₦3.2M",
    priceNumeric: 3200000,
    description: "An exclusive estate development designed for smart investors and homeowners. Wura Gardens offers affordable luxury with excellent ROI potential.",
    type: "Estate",
    status: "Available",
    features: [
      "Affordable Payment Plans",
      "Strategic Location",
      "Investment Opportunity",
      "Modern Infrastructure",
      "High ROI Potential",
    ],
    details: {
      plotSize: "450sqm",
    },
    amenities: [
      "Gated Security",
      "Good Road Access",
      "Electricity",
      "Water Supply",
      "Perimeter Fence",
    ],
    image: "/images/properties/wura-gardens.jpg",
    gallery: [
      "/images/properties/wura-gardens.jpg",
      "/images/properties/prime-haven-grove.jpg",
      "/images/properties/serenity-heights.jpg",
      "/images/properties/victoria-court.jpg",
      "/images/properties/golden-palm-estate.jpg",
    ],
    coordinates: {
      lat: 7.1575,
      lng: 3.3719,
    },
    address: "Wura Gardens Estate, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "prime-haven-4br",
    title: "Prime Haven Groven 4BR Detached",
    location: "Abeokuta, Ogun State",
    price: "₦45M",
    priceNumeric: 45000000,
    description: "Luxury 4-bedroom detached duplex in the prestigious Prime Haven Groven estate. Features contemporary design, premium finishes, and modern amenities for sophisticated living.",
    type: "House",
    status: "Few Units Left",
    features: [
      "4 Bedrooms with En-suite",
      "Spacious Living Area",
      "Modern Kitchen",
      "Family Lounge",
      "Parking Space for 3 Cars",
      "Boys Quarter",
    ],
    details: {
      bedrooms: 4,
      bathrooms: 5,
      size: "350sqm built on 500sqm",
    },
    amenities: [
      "24/7 Security",
      "Swimming Pool Access",
      "Gym Facility",
      "Power Supply",
      "Water Treatment Plant",
      "Recreation Area",
    ],
    image: "/images/properties/prime-haven-4br.jpg",
    gallery: [
      "/images/properties/prime-haven-4br.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video URL
    tour360Url: "https://momento360.com/e/u/4f5e3c8f5d0a4c8c8b5e3c8f5d0a4c8c", // Sample 360 tour
    coordinates: {
      lat: 7.1485,
      lng: 3.3629,
    },
    address: "Prime Haven Groven Estate, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "prime-haven-semi",
    title: "Prime Haven Groven Semi-Detached",
    location: "Abeokuta, Ogun State",
    price: "₦35M",
    priceNumeric: 35000000,
    description: "Elegant semi-detached homes in Prime Haven Groven offering premium living at competitive prices. Perfect for families looking for luxury on a budget.",
    type: "House",
    status: "Available",
    features: [
      "3 Bedrooms with En-suite",
      "Modern Design",
      "Quality Finishes",
      "Spacious Compound",
      "Parking Space",
    ],
    details: {
      bedrooms: 3,
      bathrooms: 4,
      size: "280sqm",
    },
    amenities: [
      "Estate Security",
      "Power Supply",
      "Water Supply",
      "Recreation Facilities",
      "Good Road Network",
    ],
    image: "/images/properties/prime-haven-semi.jpg",
    gallery: [
      "/images/properties/prime-haven-semi.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video URL
    coordinates: {
      lat: 7.1495,
      lng: 3.3639,
    },
    address: "Prime Haven Groven Estate, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "olomore-house",
    title: "House in Olomore",
    location: "Olomore, Abeokuta, Ogun State",
    price: "₦25M",
    priceNumeric: 25000000,
    description: "Well-finished property in the heart of Olomore. Ideal for families or investment purposes with easy access to major amenities and roads.",
    type: "House",
    status: "Available",
    features: [
      "Strategic Location",
      "Close to Amenities",
      "Good Access Road",
      "Secure Neighborhood",
      "Ready for Occupation",
    ],
    details: {
      bedrooms: 3,
      bathrooms: 3,
    },
    amenities: [
      "Parking Space",
      "Fenced Compound",
      "Water Supply",
      "Power Supply",
    ],
    image: "/images/properties/olomore-house.jpg",
    gallery: [
      "/images/properties/olomore-house.jpg",
    ],
    coordinates: {
      lat: 7.1605,
      lng: 3.3449,
    },
    address: "Olomore, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "3-units",
    title: "3 Units (2BR Flats + Self-Con)",
    location: "Abeokuta, Ogun State",
    price: "₦18M",
    priceNumeric: 18000000,
    description: "Excellent investment opportunity! Three-unit property comprising 2-bedroom flats and self-contained apartments. Great rental income potential.",
    type: "Commercial",
    status: "Selling Fast",
    features: [
      "High Rental Yield",
      "Strategic Location",
      "Fully Tenanted",
      "Low Maintenance",
      "Investment Opportunity",
    ],
    details: {
      units: 3,
    },
    amenities: [
      "Separate Meters",
      "Parking Space",
      "Fenced Compound",
      "Water Supply",
    ],
    image: "/images/properties/3-units.jpg",
    gallery: [
      "/images/properties/3-units.jpg",
    ],
    coordinates: {
      lat: 7.1555,
      lng: 3.3549,
    },
    address: "Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "blocks-of-flats",
    title: "Blocks of Flats - Prime Area",
    location: "Prime Area, Abeokuta, Ogun State",
    price: "₦65M",
    priceNumeric: 65000000,
    description: "Premium commercial property in a prime location. Multiple units offering excellent returns on investment with consistent rental income.",
    type: "Commercial",
    status: "Available",
    features: [
      "Prime Location",
      "Multiple Units",
      "High Occupancy Rate",
      "Excellent ROI",
      "Well Maintained",
    ],
    details: {
      units: 8,
    },
    amenities: [
      "Parking Area",
      "Security",
      "Water Supply",
      "Power Supply",
      "Generator",
    ],
    image: "/images/properties/blocks-of-flats.jpg",
    gallery: [
      "/images/properties/blocks-of-flats.jpg",
    ],
    coordinates: {
      lat: 7.1525,
      lng: 3.3589,
    },
    address: "Prime Area, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "gbokoniyi-plots",
    title: "3 Plots at Gbokoniyi",
    location: "Gbokoniyi, Abeokuta, Ogun State",
    price: "₦9M",
    priceNumeric: 9000000,
    description: "Three adjoining plots in the fast-developing Gbokoniyi area. Perfect for residential or commercial development with excellent appreciation potential.",
    type: "Land",
    status: "Available",
    features: [
      "3 Plots Together",
      "Development Area",
      "Good Access Road",
      "Verified Title",
      "High Appreciation",
    ],
    details: {
      plotSize: "500sqm each",
    },
    amenities: [
      "Road Access",
      "Nearby Development",
      "Electricity Available",
    ],
    image: "/images/properties/gbokoniyi-plots.jpg",
    gallery: [
      "/images/properties/gbokoniyi-plots.jpg",
    ],
    coordinates: {
      lat: 7.1435,
      lng: 3.3759,
    },
    address: "Gbokoniyi, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "2-plots",
    title: "2 Plots for Sale",
    location: "Abeokuta, Ogun State",
    price: "₦6M",
    priceNumeric: 6000000,
    description: "Two adjoining plots in a developing area. Ideal for building your dream home or investment development with verified documentation.",
    type: "Land",
    status: "Available",
    features: [
      "2 Plots Together",
      "Verified Documentation",
      "Good Location",
      "Development Ready",
      "Flexible Payment",
    ],
    details: {
      plotSize: "450sqm each",
    },
    amenities: [
      "Access Road",
      "Growing Neighborhood",
      "Utilities Available",
    ],
    image: "/images/properties/2-plots.jpg",
    gallery: [
      "/images/properties/2-plots.jpg",
    ],
    coordinates: {
      lat: 7.1655,
      lng: 3.3689,
    },
    address: "Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
];

// Helper function to get property by ID
export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((property) => property.id === id);
};

// Helper function to get related properties (same type, different id)
export const getRelatedProperties = (
  currentId: string,
  limit: number = 3
): Property[] => {
  const currentProperty = getPropertyById(currentId);
  if (!currentProperty) return [];

  return properties
    .filter(
      (property) =>
        property.type === currentProperty.type && property.id !== currentId
    )
    .slice(0, limit);
};
