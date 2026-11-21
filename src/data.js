export const company = {
  name: "K-Star Plastic Industries",
  tagline: "We Believe In Providing With The Best...",
  contactPerson: "Mr. Abhishek Kadam",
  phone: "+91 94230 61675",
  whatsapp: "919423061675", // CONFIRM: WhatsApp number (same as phone assumed)
  email: "kstarplastics@gmail.com",
  address:
    "Gat No. 124/1, Mirje, Near Shirwal MIDC, Mirje-Jawale Road, Tal. Khandala, Dist. Satara",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Gat No. 124/1, Mirje, Shirwal MIDC, Khandala, Satara"), // CONFIRM: exact pin
};

// Icon names come from src/icons.jsx
export const features = [
  ["utensils", "Food grade"],
  ["snowflake", "Freezer safe"],
  ["microwave", "Microwave safe"],
  ["leaf", "BPA free"],
  ["shield", "Durable & strong"],
];

// Photos live in public/images/products/. "Ask us" = CONFIRM with client.
// variants = the sizes shown on the product page. size = short text shown on cards and in the spec table.
// The first 6 products show on the home page.
export const products = [
  {
    id: "curd-bucket",
    name: "Curd bucket with handle",
    cat: "Dairy & sweets",
    img: "/images/products/curd-bucket.jpg",
    size: "2, 5, 10 and 20 kg",
    desc: "Strong bucket with carry handle and a snug lid for curd and dairy products, in four sizes.",
    variants: [
      { label: "2 kg" },
      { label: "5 kg" },
      { label: "10 kg" },
      { label: "20 kg" },
    ],
  },
  {
    id: "ice-cream-family-pack",
    name: "Ice cream family pack",
    cat: "Ice cream",
    img: "/images/products/ice-cream-family-pack.jpg",
    size: "Small family pack",
    desc: "Oval family pack tub with lid for ice cream and frozen desserts.",
  },
  {
    id: "ice-cream-family-pack",
    name: "Ice cream family-pack",
    cat: "Ice cream",
    img: "/images/products/square-storage-box.jpg",
    size: "250ml and 500ml",
    desc: "Square box for ice cream and desserts.",
  },
  {
    id: "ice-cream-cup-100ml",
    name: "Ice cream cup 100 ml",
    cat: "Ice cream",
    img: "/images/products/ice-cream-cup-100ml.jpg",
    size: "100 ml",
    desc: "Single-serve cup with lid for ice cream and desserts.",
  },
  {
    id: "ice-cream-cup-50ml",
    name: "Ice cream cup 50 ml",
    cat: "Ice cream",
    img: "/images/products/ice-cream-cup-50ml.jpg",
    size: "50 ml",
    desc: "Small tasting cup with lid for ice cream and desserts.",
  },
  {
    id: "dates-khajur-box",
    name: "Dates (khajur) box",
    cat: "Dry fruits",
    img: "/images/products/dates-khajur-box.jpg",
    size: "Ask us",
    desc: "Rectangular box with lid for dates and dry fruits.",
  },

  {
    id: "ice-cream-round-family-pack",
    name: "Ice cream round family pack",
    cat: "Ice cream",
    img: "/images/products/round-family-pack.jpg",
    size: "2 litre",
    desc: "Round 2 litre family pack for ice cream.",
    variants: [{ label: "2 litre" }],
  },
  {
    id: "dahi-cup",
    name: "Dahi cup",
    cat: "Dairy & sweets",
    img: "/images/products/plain-cup.jpg",
    size: "80, 200 and 400 gm",
    type: "Cup",
    desc: "Custom printed cup for dahi (curd) in three sizes.",
    variants: [{ label: "80 gm" }, { label: "200 gm" }, { label: "400 gm" }],
  },
  {
    id: "lassi-glass-200ml",
    name: "Lassi glass 200 ml",
    cat: "Dairy & sweets",
    img: "/images/products/ice-cream-cup-100ml.jpg",
    size: "200 ml",
    type: "Glass",
    extraSpecs: [["Diameter", "80 mm or 69 mm"]],
    desc: "Custom printed 200 ml glass for lassi, in two diameters.",
    variants: [
      { label: "80 mm diameter", note: "200 ml" },
      { label: "69 mm diameter", note: "200 ml" },
    ],
  },
  {
    id: "shrikhand-amrakhand-container",
    name: "Shrikhand / Amrakhand container",
    cat: "Dairy & sweets",
    img: "/images/products/ice-cream-family-pack.jpg",
    size: "100, 250 and 500 gm",
    type: "Thin wall container",
    desc: "Thin wall container for shrikhand and amrakhand in three sizes.",
    variants: [{ label: "100 gm" }, { label: "250 gm" }, { label: "500 gm" }],
  },
].map((p) => ({
  ...p,
  specs: [
    ["Type", p.type || "Thin wall container"],
    ["Capacity", p.size],
    ...(p.extraSpecs || []),
    ["Material", "Food grade, BPA free"],
    ["Safe for", "Freezer, microwave"],
    ["Dimensions", "Ask us"],
    ["Custom printing", "Yes"],
  ],
}));

export const printMocks = [
  {
    brand: "Crazy Ice-Cream",
    name: "Choco Ripple",
    img: "/images/printing/crazy-choco-ripple.jpg",
  },
  {
    brand: "Kokan Gold",
    name: "Malai Lassi",
    img: "/images/printing/kokan-gold-lassi.jpg",
  },
  {
    brand: "Krishnaraj Dahi",
    name: "Dahi bucket",
    img: "/images/printing/krishnaraj-dahi-bucket.jpg",
  },
  {
    brand: "Shashwath",
    name: "Shahi Shrikhand",
    img: "/images/printing/shashwath-shrikhand.jpg",
  },
];

export const why = [
  [
    "utensils",
    "Food grade",
    "Made for direct contact with ice cream, curd, sweets and dry fruits.",
  ],
  ["leaf", "BPA free", "Safe material your customers can trust."],
  ["snowflake", "Freezer safe", "Holds up in cold storage and deep freezers."],
  [
    "microwave",
    "Microwave safe",
    "Customers can reheat food in the same container.",
  ],
  [
    "shield",
    "Durable & strong",
    "Sturdy walls and lids that survive transport.",
  ],
  [
    "printer",
    "IML printing",
    "Your label is moulded into the container, so it does not peel or fade.",
  ],
];

// Partner logos live in public/images/partners/.
export const partners = [
  ["Snow Barry", "snow-barry.jpg"],
  ["Baskin Robbins", "baskin-robbins.jpg"],
  ["Shashwath", "shashwath.webp"],
  ["Crazy Ice-Cream", "crazy-ice-cream.webp"],
  ["Krishnaraj Dahi", "krishnaraj-dahi.webp"],
  ["Melt n Mellow Ice Cream", "melt-n-mellow.webp"],
  ["Satkripa", "satkripa.webp"],
  ["Fru-Go", "fru-go.webp"],
  ["Nature Delight", "nature-delight.webp"],
  ["Urja Naturals", "urja-naturals.webp"],
  ["Peony", "peony.webp"],
].map(([name, file]) => ({ name, img: `/images/partners/${file}` }));

export const faq = [
  [
    "What containers do you make?",
    "IML and thin wall containers: curd buckets, dahi cups, lassi glasses, shrikhand and amrakhand containers, ice cream cups, boxes and family packs, and dates (khajur) boxes.",
  ],
  [
    "Are they safe for food?",
    "K-Star containers are food grade, BPA free, freezer safe and microwave safe.",
  ],
  [
    "Can you print my brand on the container?",
    "Yes. IML means the label is moulded into the container. Send your artwork and the size you need, and we confirm the details.",
  ],
  [
    "Which sizes are available?",
    "Curd buckets come in 2, 5, 10 and 20 kg. Dahi cups come in 80, 200 and 400 gm, and shrikhand or amrakhand containers in 100, 250 and 500 gm. We also make 200 ml lassi glasses (80 mm and 69 mm diameter), 50 ml and 100 ml ice cream cups, and a 2 litre round family pack. Ask us for the full list.",
  ],
  [
    "What is the minimum order?",
    "It depends on the size and design. Send a quote request with your quantity and we reply with the details.",
  ],
  [
    "Where are you located?",
    "Gat No. 124/1, Mirje, near Shirwal MIDC, Mirje-Jawale Road, Tal. Khandala, Dist. Satara.",
  ],
];
