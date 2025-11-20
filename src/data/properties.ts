export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
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
    id: "1",
    title: "Oke-Ata 2BR Flat",
    location: "Oke-Ata, Ita Oshin, Abeokuta",
    price: "₦35M",
    description: "Fully Completed Standard 2-Bedroom Flat with 4 units currently available. Features fully furnished kitchen, POP, borehole, and more. Payment: 60% first deposit required.",
    type: "House",
    status: "Available",
    features: [
      "2 Bedrooms",
      "4 Units Available",
      "Fully Furnished Kitchen",
      "POP Ceiling",
      "Borehole Water Supply",
      "60% First Deposit",
    ],
    details: {
      bedrooms: 2,
      units: 4,
    },
    amenities: [
      "Fully Furnished Kitchen",
      "POP Ceiling",
      "Borehole",
      "Modern Finishes",
    ],
    image: "/images/house for sale 2.jpeg",
    gallery: [
      "/images/house for sale 2.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "2",
    title: "Olomore 9-Unit Mixed Property",
    location: "Olomore behind SADEEP Filling Station",
    price: "₦75M",
    description: "7 Units Room & Parlour + 2 Units 2-Bedroom Flat with complete documentation. Features full POP, ceramic tiles, borehole, and aluminum step-tiles. Price slightly negotiable.",
    type: "Commercial",
    status: "Selling Fast",
    features: [
      "7 Units Room & Parlour",
      "2 Units 2BR Flat",
      "Full POP Ceiling",
      "Ceramic Tiles",
      "Borehole",
      "Aluminum Step-Tiles",
      "Complete Documentation",
    ],
    details: {
      units: 9,
    },
    amenities: [
      "Full POP",
      "Ceramic Tiles",
      "Borehole Water",
      "Aluminum Step-Tiles",
      "Complete Documentation",
    ],
    image: "/images/land for sale 2.jpeg",
    gallery: [
      "/images/land for sale 2.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "3",
    title: "Land For Sale (3 Plots)",
    location: "Gbokoniyi after Powering Abeokuta",
    price: "₦18M",
    description: "3 Plots of land with Registered Survey, Deed of Assignment and Receipt. Perfect for residential or commercial development.",
    type: "Land",
    status: "Available",
    features: [
      "3 Plots",
      "Registered Survey",
      "Deed of Assignment",
      "Receipt Available",
      "Prime Location",
    ],
    details: {
      plotSize: "3 Plots",
    },
    amenities: [
      "Registered Survey",
      "Deed of Assignment",
      "Receipt",
      "Clear Title",
    ],
    image: "/images/land for sale 4.jpeg",
    gallery: [
      "/images/land for sale 4.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "4",
    title: "7 Blocks of Flats - Liberty Estate",
    location: "Liberty Estate, Laderin, Abeokuta",
    price: "₦145M",
    description: "7 Blocks of 2 Bedroom Flat and 1 3 Bedroom Flat in one of the most secure estates in Abeokuta. Built on 2 plots of land with good road network, 24/7 electricity, and very secured environment. Perfect for Short Let/Service Apartment or rentals. Enough land space for additional blocks or commercial facilities. Videos available on request.",
    type: "Commercial",
    status: "Available",
    features: [
      "7 x 2BR Flats",
      "1 x 3BR Flat",
      "2 Plots of Land",
      "24/7 Electricity",
      "Very Secured Environment",
      "Good Road Network",
      "Short Let Potential",
      "Group Investment Available",
    ],
    details: {
      bedrooms: 2,
      units: 8,
      plotSize: "2 Plots",
    },
    amenities: [
      "24/7 Electricity",
      "Secure Estate",
      "Good Road Network",
      "Extra Land for Development",
      "Survey and Deed of Assignment",
    ],
    image: "/images/house for sale 1.jpeg",
    gallery: [
      "/images/house for sale 1.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "5",
    title: "Land For Sale (2 Plots) - GRA",
    location: "Ibara GRA Extension, Abeokuta",
    price: "₦45M",
    description: "2 Plots of prime land in Ibara GRA Extension with C of O, Deed of Assignment, Registered Survey, and Receipt. Premium location for luxury development.",
    type: "Land",
    status: "Available",
    features: [
      "2 Plots",
      "Certificate of Occupancy (C of O)",
      "Deed of Assignment",
      "Registered Survey",
      "Receipt",
      "GRA Location",
    ],
    details: {
      plotSize: "2 Plots",
    },
    amenities: [
      "C of O",
      "Deed of Assignment",
      "Registered Survey",
      "Receipt",
      "Premium GRA Location",
    ],
    image: "/images/land for sale 3.jpeg",
    gallery: [
      "/images/land for sale 3.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "6",
    title: "3 Units + Room & Parlour",
    location: "Ire Akari, Olomore, After Federal Housing Estate",
    price: "₦37M",
    description: "3 Units of 2 Bedroom Flat and A Room and Parlour Self Contain. Excellent investment opportunity with Deed of Assignment and Receipt.",
    type: "House",
    status: "Available",
    features: [
      "3 Units 2BR Flats",
      "Room & Parlour Self Contain",
      "Deed of Assignment",
      "Receipt Available",
      "Investment Opportunity",
    ],
    details: {
      bedrooms: 2,
      units: 4,
    },
    amenities: [
      "Deed of Assignment",
      "Receipt",
      "Multiple Units",
      "Prime Location",
    ],
    image: "/images/land for sale 1.jpeg",
    gallery: [
      "/images/land for sale 1.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "7",
    title: "4 Bedroom Flat",
    location: "Behind Navy School, Adigbe Road, Abeokuta",
    price: "₦53M",
    description: "Spacious 4-bedroom flat with Registered Survey, Deed of Assignment, Receipt, and Building Approval. Ready for immediate occupation.",
    type: "House",
    status: "Available",
    features: [
      "4 Bedrooms",
      "Registered Survey",
      "Deed of Assignment",
      "Receipt",
      "Building Approval",
      "Ready for Occupation",
    ],
    details: {
      bedrooms: 4,
      bathrooms: 4,
    },
    amenities: [
      "Registered Survey",
      "Deed of Assignment",
      "Receipt",
      "Building Approval",
      "Prime Location",
    ],
    image: "/images/house for sale 3.jpeg",
    gallery: [
      "/images/house for sale 3.jpeg",
    ],
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
