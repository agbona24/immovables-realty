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
    title: "Wura Garden Estate",
    location: "Abeokuta, Ogun State",
    price: "From ₦2.5M",
    priceNumeric: 2500000,
    description: "A Serene, Secure & Fast-Developing Residential Estate by Immovables Realty. Beautifully planned estate offering comfort, security, and long-term investment value in a peaceful, fast-growing area. Ideal for buyers seeking safe community, future home development, and high land appreciation. Available plot sizes: 300sqm, 600sqm, 900sqm. Flexible payment: 40% initial deposit, 60% balance spread. All plots secured with Freehold Title, Registered Survey, and Registered Deed of Assignment.",
    type: "Estate",
    status: "Available",
    features: [
      "100% Dry Land - Ready to Build",
      "Freehold Title",
      "Registered Survey & Deed of Assignment",
      "Flexible Payment (40% Initial, 60% Balance)",
      "Multiple Plot Sizes (300sqm, 600sqm, 900sqm)",
      "High Appreciation & Low Entry",
      "Family-Centered Community",
      "Verified & Secured Documentation",
    ],
    details: {
      plotSize: "300sqm - 900sqm",
    },
    amenities: [
      "Gated and Secured Environment",
      "Beautifully Planned Road Network",
      "Drainage and Water System",
      "Electricity Access and Street Lighting",
      "Green Areas & Open Spaces for Recreation",
      "Peaceful, Clean Family-Friendly Environment",
      "Excellent for Residential and Investment",
      "Ready-to-Build Dry & Stable Land",
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
    id: "prime-haven-2br-bungalow",
    title: "2-Bedroom Fully Finished Bungalow - Prime Haven Grove",
    location: "Prime Haven Grove Estate, Abeokuta",
    price: "Contact for Price",
    priceNumeric: 20000000,
    description: "Perfect for young families, retirees, or investors seeking rental-ready units. Modern home designed for comfort with quality finishes throughout. Features 2 ensuite bedrooms, visitor's toilet, spacious living room, and modern fitted kitchen. Flexible payment plan available: 40% initial deposit, 60% balance spread over agreed period. Built on 100% dry, stable land with verified documentation (Freehold, Registered Survey & Deed of Assignment).",
    type: "House",
    status: "Available",
    features: [
      "2 Ensuite Bedrooms",
      "Visitor's Toilet",
      "Spacious Living Room",
      "Modern Fitted Kitchen",
      "POP Ceiling Finish",
      "Quality Doors & Windows",
      "Personal Compound with Gate",
      "Parking Space for 2 Cars",
      "Flexible Payment (40% Initial, 60% Balance)",
    ],
    details: {
      bedrooms: 2,
      bathrooms: 3,
      size: "Rental-ready unit",
    },
    amenities: [
      "Gated and Secured Estate",
      "100% Dry & Stable Land",
      "Good Road Network",
      "Drainage & Sewage Systems",
      "Electricity Access & Streetlights",
      "Water System",
      "Serene Family-Friendly Environment",
      "Verified Documentation",
    ],
    image: "/images/properties/prime-haven-2br.jpg",
    gallery: [
      "/images/properties/prime-haven-2br.jpg",
    ],
    coordinates: {
      lat: 7.1480,
      lng: 3.3625,
    },
    address: "Prime Haven Grove Estate, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "prime-haven-3br-bungalow",
    title: "3-Bedroom Fully Finished Bungalow - Prime Haven Grove",
    location: "Prime Haven Grove Estate, Abeokuta",
    price: "Contact for Price",
    priceNumeric: 28000000,
    description: "A spacious and elegant home built for comfortable family living. Features 3 ensuite bedrooms, visitor's toilet, large living and dining area, and fully fitted kitchen. Quality finishes with POP throughout and quality sanitary fittings. Flexible payment plan available: 40% initial deposit, 60% balance spread over agreed period. Built on 100% dry, stable land with verified documentation (Freehold, Registered Survey & Deed of Assignment).",
    type: "House",
    status: "Available",
    features: [
      "3 Ensuite Bedrooms",
      "Visitor's Toilet",
      "Large Living and Dining Area",
      "Fully Fitted Kitchen",
      "POP Finishing Throughout",
      "Quality Sanitary Fittings",
      "Private Fenced Compound",
      "Parking for 2-3 Cars",
      "Flexible Payment (40% Initial, 60% Balance)",
    ],
    details: {
      bedrooms: 3,
      bathrooms: 4,
      size: "Family-sized home",
    },
    amenities: [
      "Gated and Secured Estate",
      "100% Dry & Stable Land",
      "Good Road Network",
      "Drainage & Sewage Systems",
      "Electricity Access & Streetlights",
      "Water System",
      "Serene Family-Friendly Environment",
      "Verified Documentation",
    ],
    image: "/images/properties/prime-haven-3br.jpg",
    gallery: [
      "/images/properties/prime-haven-3br.jpg",
    ],
    coordinates: {
      lat: 7.1478,
      lng: 3.3622,
    },
    address: "Prime Haven Grove Estate, Abeokuta, Ogun State",
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "prime-haven-4br",
    title: "4-Bedroom Modern Bungalow - Prime Haven Grove",
    location: "Prime Haven Grove Estate, Abeokuta",
    price: "Contact for Price",
    priceNumeric: 45000000,
    description: "A luxurious and spacious home perfect for large families or investors seeking premium rental value. This unit offers comfort, elegance, and modern architecture. Features 4 large ensuite bedrooms, grand living areas, and premium interior finishing. Flexible payment plan available: 40% initial deposit, 60% balance spread over agreed period. Built on 100% dry, stable land with verified documentation (Freehold, Registered Survey & Deed of Assignment).",
    type: "House",
    status: "Few Units Left",
    features: [
      "4 Large Ensuite Bedrooms",
      "Grand Living Room + Dining Area",
      "Visitor's Toilet",
      "Fully Fitted Modern Kitchen with Store",
      "POP & Premium Interior Finishing",
      "High-Quality Tiles & Sanitary Fittings",
      "Beautiful Architectural Design",
      "Wide Compound with Parking for 3-4 Cars",
      "Flexible Payment (40% Initial, 60% Balance)",
    ],
    details: {
      bedrooms: 4,
      bathrooms: 5,
      size: "Long-term family convenience",
    },
    amenities: [
      "Gated and Secured Estate",
      "100% Dry & Stable Land",
      "Good Road Network",
      "Drainage & Sewage Systems",
      "Electricity Access & Streetlights",
      "Water System",
      "Serene Family-Friendly Environment",
      "Verified Documentation",
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
    title: "3-Bedroom Semi-Detached Duplex - Prime Haven Grove",
    location: "Prime Haven Grove Estate, Abeokuta",
    price: "Contact for Price",
    priceNumeric: 35000000,
    description: "Ideal for clients who prefer a blend of comfort and modern aesthetics. Features spacious master suite with wardrobe space, stylish kitchen, large living & dining area, and contemporary exterior design. Flexible payment plan available: 40% initial deposit, 60% balance spread over agreed period. Built on 100% dry, stable land with verified documentation (Freehold, Registered Survey & Deed of Assignment).",
    type: "House",
    status: "Available",
    features: [
      "Spacious Master Suite with Wardrobe Space",
      "Stylish Kitchen",
      "Large Living & Dining Area",
      "Balcony",
      "Contemporary Exterior Design",
      "Private Compound & Ample Parking",
      "High-End Interior Finishing",
      "Flexible Payment (40% Initial, 60% Balance)",
    ],
    details: {
      bedrooms: 3,
      bathrooms: 4,
      size: "Modern duplex design",
    },
    amenities: [
      "Gated and Secured Estate",
      "100% Dry & Stable Land",
      "Good Road Network",
      "Drainage & Sewage Systems",
      "Electricity Access & Streetlights",
      "Water System",
      "Serene Family-Friendly Environment",
      "Verified Documentation",
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
    title: "6 Units of 3-Bedroom Flats + Car Wash - Olomore",
    location: "Olomore, Abeokuta, Ogun State",
    price: "₦100M",
    priceNumeric: 100000000,
    description: "Exceptional mixed-use property for sale in Olomore, Abeokuta - ideal for investors seeking both residential rental income and commercial cash flow. Features 6 units of spacious 3-bedroom flats alongside a fully operational car wash. Strategically located in highly demanded residential and commercial zone with excellent access roads, constant foot traffic, and proximity to key amenities. Complete with verifiable documentation: Deed of Assignment, Registered Survey, Building Approval, and Receipts. Dual income streams from residential rentals and daily car wash operations.",
    type: "Commercial",
    status: "Available",
    features: [
      "6 Units of 3-Bedroom Flats",
      "Functional Car Wash Facility",
      "Dual Income Streams",
      "High Rental Demand Area",
      "Strategic Roadside Commercial Position",
      "Verified Complete Documentation",
      "Perfect for Long-Term Returns",
      "Prime Investment Property",
    ],
    details: {
      bedrooms: 3,
      bathrooms: 3,
      units: 6,
    },
    amenities: [
      "Spacious 3-Bedroom Apartments",
      "Borehole Water Supply",
      "Well-Structured Car Wash Station",
      "Ample Parking Space",
      "Secure Fencing with Gate",
      "Good Access Road",
      "Stable Electricity Area",
      "Quality Finishing Throughout",
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
