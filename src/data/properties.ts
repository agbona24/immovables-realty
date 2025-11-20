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
    title: "Property for Sale in Olomore - 7 Units Room & Parlour + 2 Units 2BR Flats",
    location: "Olomore, Abeokuta (1 minute from SADEEP Filling Station)",
    price: "₦100M",
    description: "High-yield multi-unit residential property in Olomore, Abeokuta. Features 7 Room & Parlour self-contain units and 2 units of 2-bedroom flats. Fully developed with premium finishing, modern kitchen cabinets, POP ceilings, ceramic tiles, borehole water, and aluminum step-tile roofing. Perfect for investors seeking stable rental income, long-term appreciation, and strong cash flow. Property is ready for inspection, occupation, or rental. Pictures and videos available on request. Slightly negotiable.",
    type: "Commercial",
    status: "Selling Fast",
    features: [
      "7 Room & Parlour Self-Contain Units",
      "2 Units of 2-Bedroom Flats",
      "Fully POP Ceilings",
      "Modern Kitchen Cabinets",
      "3 Toilets & 2 Bathrooms",
      "Borehole Water System",
      "Ceramic Tiles Throughout",
      "100% Motorable Access Road",
      "30-Second Drive off Tarred Road",
      "Secure Fence with Gate",
      "Aluminum Step-Tile Roofing",
      "Ample Parking Space",
      "High Rental Yield",
      "Low Maintenance Structure",
    ],
    details: {
      units: 9,
    },
    amenities: [
      "Deed of Land Purchase Contract",
      "Registered Survey",
      "Building Approval",
      "Receipts Available",
      "Full POP Ceilings",
      "Modern Kitchen Cabinets",
      "Borehole Water",
      "Ceramic Tiles",
      "Aluminum Step-Tile Roofing",
      "Secure Fencing",
      "Good Access Road",
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
  {
    id: "8",
    title: "6 Units 3BR Flats + Functional Car Wash",
    location: "Olomore, Abeokuta, Ogun State",
    price: "₦100M",
    description: "Immovables Realty presents an exceptional mixed-use property for sale in Olomore, Abeokuta, ideal for investors seeking both residential rental income and commercial cash flow. This strategically located property features 6 units of spacious 3-bedroom flats alongside a fully operational car wash facility. Located in the heart of Olomore, Abeokuta—a highly demanded residential and commercial zone with excellent access roads, constant foot traffic, and proximity to key amenities including schools, hospitals, markets, and banks. The residential component comprises 6 units of well-finished 3-bedroom flats. Each apartment is designed with modern living in mind. The commercial component is a fully functional car wash business already generating consistent daily revenue. This facility is well-structured with water supply systems, drainage, shaded wash bays, and ample customer parking. Earn consistent monthly returns from the 3-bedroom flats while generating daily cash flow from the car wash business. The property is located along a major road with high visibility and foot traffic, making the car wash highly patronized. This is a rare opportunity to own a property that offers two income sources in one location. Perfect for long-term capital appreciation, portfolio expansion, or family investment. The property is available for inspection at any time. Pictures and videos can be provided upon request.",
    type: "Commercial",
    status: "Available",
    features: [
      "6 Units of 3-Bedroom Flats",
      "Functional Car Wash Facility",
      "Dual Income Streams (Residential + Commercial)",
      "Spacious 3-Bedroom Apartments",
      "Borehole Water Supply",
      "Well-Structured Car Wash Station",
      "Ample Parking Space",
      "Secure Fencing with Gate",
      "Good Access Road",
      "Stable Electricity Area",
      "Quality Finishing Throughout",
      "Roadside Commercial Position",
      "High Rental Demand Area",
      "Modern Kitchen & Bathrooms",
      "POP Ceilings",
      "Ceramic Floor Tiles",
    ],
    details: {
      bedrooms: 3,
      units: 6,
    },
    amenities: [
      "Deed of Assignment",
      "Registered Survey",
      "Building Approval",
      "Receipts Available",
      "Borehole Water Supply",
      "Secure Fencing",
      "Good Access Road",
      "Parking Space",
      "Commercial Car Wash",
      "High Visibility Location",
    ],
    image: "/images/house for sale 4.jpeg",
    gallery: [
      "/images/house for sale 4.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "9",
    title: "Prime Haven Grove Estate - 2BR Semi-Detached",
    location: "Prime Haven Grove Estate, Abeokuta, Ogun State",
    price: "Carcass: ₦22M | Fully Completed: ₦40M",
    description: "Immovables Realty presents a brand-new 2-Bedroom Semi-Detached Home in the prestigious Prime Haven Grove Estate, Abeokuta. Available in two purchase stages: Carcass (structural shell ready for interior finishing) at ₦22M or Fully Completed (move-in ready) at ₦40M. This modern home is designed for comfort, privacy, and contemporary living. Prime Haven Grove Estate is one of Abeokuta's most sought-after residential developments, offering secure gated living, tarred roads, green landscapes, drainage systems, and 24/7 security. Located in a well-planned estate with constant electricity supply (via estate power), organized waste management, and close proximity to schools, hospitals, shopping centers, and major roads. The 2-bedroom semi-detached home features an open-plan layout, spacious living areas, well-sized bedrooms, a modern kitchen space, quality flooring, and a private compound with parking space. Carcass Option (₦22M): Completed structural work including roofing, plastering, windows, doors, electrical wiring, and plumbing—ready for your custom interior finishes. Fully Completed Option (₦40M): Move-in ready with full tiling, POP ceilings, painted walls, fitted kitchen, modern bathroom fixtures, and landscape finishing. Flexible payment plans available. Perfect for first-time homeowners, young families, or investors looking for affordable estate living. Ideal for rental income or owner-occupier residence. Prime Haven Grove Estate offers residents peace of mind with controlled access, perimeter fencing, street lighting, and a secure environment. This is your opportunity to own a home in one of Abeokuta's fastest-growing residential estates.",
    type: "House",
    status: "Available",
    features: [
      "2 Bedrooms Semi-Detached",
      "Two Purchase Options: Carcass or Fully Completed",
      "Prime Haven Grove Estate",
      "Gated Estate with 24/7 Security",
      "Tarred Estate Roads",
      "Estate Power Supply",
      "Modern Architecture",
      "Spacious Living Area",
      "Private Compound",
      "Parking Space",
      "Waste Management System",
      "Perimeter Fencing",
      "Street Lighting",
      "Close to Amenities",
    ],
    details: {
      bedrooms: 2,
      bathrooms: 2,
    },
    amenities: [
      "Gated Estate",
      "24/7 Security",
      "Tarred Roads",
      "Estate Power Supply",
      "Drainage System",
      "Waste Management",
      "Street Lighting",
      "Perimeter Fencing",
      "Green Landscape",
      "Parking Space",
    ],
    image: "/images/prime haven 2.jpeg",
    gallery: [
      "/images/prime haven 2.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "10",
    title: "Prime Haven Grove Estate - 3BR Fully Detached",
    location: "Prime Haven Grove Estate, Abeokuta, Ogun State",
    price: "Carcass: ₦25M | Fully Completed: ₦55M",
    description: "Immovables Realty presents an elegant 3-Bedroom Fully Detached Home in the prestigious Prime Haven Grove Estate, Abeokuta. Available in two purchase stages: Carcass (structural shell ready for interior finishing) at ₦25M or Fully Completed (move-in ready) at ₦55M. This spacious fully detached home is designed for families who value privacy, space, and modern living. Prime Haven Grove Estate is one of Abeokuta's most sought-after residential developments, offering secure gated living, tarred roads, green landscapes, drainage systems, and 24/7 security. Located in a well-planned estate with constant electricity supply (via estate power), organized waste management, and close proximity to schools, hospitals, shopping centers, and major roads. The 3-bedroom fully detached home features a generous floor plan with large living and dining areas, three well-sized bedrooms (master bedroom en-suite), modern kitchen space, guest toilet, private backyard, and a spacious compound with parking for multiple vehicles. Carcass Option (₦25M): Completed structural work including roofing, plastering, windows, doors, electrical wiring, and plumbing—ready for your custom interior finishes. Fully Completed Option (₦55M): Move-in ready with full tiling, POP ceilings, painted walls, fitted kitchen, modern bathroom fixtures, wardrobes, and landscape finishing. Flexible payment plans available. Perfect for growing families, professionals, or investors looking for quality estate living. Ideal for rental income, owner-occupier residence, or long-term investment. Prime Haven Grove Estate offers residents peace of mind with controlled access, perimeter fencing, street lighting, and a secure environment. This is your opportunity to own a premium fully detached home in one of Abeokuta's fastest-growing residential estates.",
    type: "House",
    status: "Available",
    features: [
      "3 Bedrooms Fully Detached",
      "Two Purchase Options: Carcass or Fully Completed",
      "Prime Haven Grove Estate",
      "Gated Estate with 24/7 Security",
      "Tarred Estate Roads",
      "Estate Power Supply",
      "Modern Architecture",
      "Spacious Living & Dining Area",
      "Master Bedroom En-Suite",
      "Guest Toilet",
      "Private Backyard",
      "Ample Parking Space",
      "Waste Management System",
      "Perimeter Fencing",
      "Street Lighting",
      "Close to Amenities",
    ],
    details: {
      bedrooms: 3,
      bathrooms: 3,
    },
    amenities: [
      "Gated Estate",
      "24/7 Security",
      "Tarred Roads",
      "Estate Power Supply",
      "Drainage System",
      "Waste Management",
      "Street Lighting",
      "Perimeter Fencing",
      "Green Landscape",
      "Parking Space",
    ],
    image: "/images/prime haven 4.jpeg",
    gallery: [
      "/images/prime haven 4.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "11",
    title: "Prime Haven Grove Estate - 4BR Fully Detached with Recreational Centre",
    location: "Prime Haven Grove Estate, Abeokuta, Ogun State",
    price: "Carcass: ₦35M | Fully Completed: ₦65M",
    description: "Immovables Realty presents a luxurious 4-Bedroom Fully Detached Home with Recreational Centre in the prestigious Prime Haven Grove Estate, Abeokuta. Available in two purchase stages: Carcass (structural shell ready for interior finishing) at ₦35M or Fully Completed (move-in ready) at ₦65M. This premium fully detached home is designed for families who desire luxury, space, comfort, and entertainment within their private residence. Prime Haven Grove Estate is one of Abeokuta's most sought-after residential developments, offering secure gated living, tarred roads, green landscapes, drainage systems, and 24/7 security. Located in a well-planned estate with constant electricity supply (via estate power), organized waste management, and close proximity to schools, hospitals, shopping centers, and major roads. The 4-bedroom fully detached home features an expansive floor plan with large living and dining areas, four spacious bedrooms (master bedroom en-suite with walk-in closet), modern kitchen with pantry, guest toilet, family lounge, a dedicated recreational centre (suitable for gym, home theater, or game room), private backyard with landscaping potential, and a large compound with parking for multiple vehicles. Carcass Option (₦35M): Completed structural work including roofing, plastering, windows, doors, electrical wiring, and plumbing—ready for your custom interior finishes and luxury upgrades. Fully Completed Option (₦65M): Move-in ready with full tiling, POP ceilings, painted walls, fitted kitchen with cabinets, modern bathroom fixtures, wardrobes, luxury finishes, and landscape finishing. Flexible payment plans available. Perfect for large families, executives, or high-net-worth individuals seeking premium estate living. Ideal for luxury rental income, owner-occupier residence, or long-term investment. Prime Haven Grove Estate offers residents peace of mind with controlled access, perimeter fencing, street lighting, and a secure environment. This is your opportunity to own a premium fully detached home with a recreational centre in one of Abeokuta's fastest-growing and most prestigious residential estates.",
    type: "House",
    status: "Available",
    features: [
      "4 Bedrooms Fully Detached",
      "Recreational Centre Included",
      "Two Purchase Options: Carcass or Fully Completed",
      "Prime Haven Grove Estate",
      "Gated Estate with 24/7 Security",
      "Tarred Estate Roads",
      "Estate Power Supply",
      "Modern Luxury Architecture",
      "Spacious Living & Dining Area",
      "Master Bedroom En-Suite with Walk-in Closet",
      "Family Lounge",
      "Guest Toilet",
      "Modern Kitchen with Pantry",
      "Private Backyard",
      "Large Compound with Parking",
      "Waste Management System",
      "Perimeter Fencing",
      "Street Lighting",
      "Close to Amenities",
    ],
    details: {
      bedrooms: 4,
      bathrooms: 4,
    },
    amenities: [
      "Gated Estate",
      "24/7 Security",
      "Tarred Roads",
      "Estate Power Supply",
      "Drainage System",
      "Waste Management",
      "Street Lighting",
      "Perimeter Fencing",
      "Green Landscape",
      "Parking Space",
      "Recreational Centre",
    ],
    image: "/images/prime haven 3.jpeg",
    gallery: [
      "/images/prime haven 3.jpeg",
    ],
    contactInfo: {
      phone: "+234 813 283 3083",
      whatsapp: "2348132833083",
    },
  },
  {
    id: "12",
    title: "Wura Garden Estate - Serene & Secure Land",
    location: "Abeokuta, Ogun State",
    price: "Contact for Pricing",
    description: "Wura Garden Estate is a beautifully planned residential estate created to offer comfort, security, and long-term investment value. Located in a peaceful and fast-growing area of Abeokuta, Ogun State, the estate is ideal for buyers who desire a safe community, future home development, and high land appreciation. With verified documentation, accessible location, and a flexible payment structure, Wura Garden Estate stands as one of the most reliable and promising land investment opportunities in the region. Available plot sizes: 300 sqm, 600 sqm, and 900 sqm. All plots are fully secured with Freehold Title, Registered Survey, and Registered Deed of Assignment. The estate offers 100% dry land suitable for immediate construction, gated and secured environment, beautifully planned road network, drainage and water system, electricity access and street lighting, green areas and open spaces for recreation, and a peaceful, clean, family-friendly environment. Flexible Payment Option: 40% Initial Deposit to instantly secure your plot, and the remaining 60% balance can be spread across an agreed payment duration. This gives buyers complete control and flexibility, making it easy for salary earners, new families, and investors to own property without stress. Perfect for first-time land buyers, families planning home development, investors seeking long-term land banking, diaspora clients wanting verified property, and individuals looking for flexible and stress-free payment plans.",
    type: "Estate",
    status: "Available",
    features: [
      "Plot Sizes: 300 sqm, 600 sqm, 900 sqm",
      "100% Dry Land",
      "Gated and Secured Environment",
      "Freehold Title",
      "Registered Survey",
      "Registered Deed of Assignment",
      "Flexible Payment Plan (40% Deposit + 60% Balance)",
      "Beautifully Planned Road Network",
      "Drainage and Water System",
      "Electricity Access",
      "Street Lighting",
      "Green Areas for Recreation",
      "Family-Friendly Environment",
      "Ready for Immediate Construction",
      "High Appreciation Potential",
    ],
    details: {
      plotSize: "300 sqm / 600 sqm / 900 sqm",
    },
    amenities: [
      "Freehold Title",
      "Registered Survey",
      "Registered Deed of Assignment",
      "Gated Estate",
      "Road Network",
      "Drainage System",
      "Water System",
      "Electricity Access",
      "Street Lighting",
      "Green Spaces",
      "Security",
    ],
    image: "/images/wura gardens.jpeg",
    gallery: [
      "/images/wura gardens.jpeg",
      "/images/wura gardens kids.jpeg",
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
