// TODO: replace placeholders marked CONFIRM with real client details.
export const company = {
  name: 'K-Star Plastic Industries',
  tagline: 'We Believe In Providing With Best...',
  contactPerson: 'Mr. Abhishek Kadam',
  phone: '+91 94230 61675',
  whatsapp: '919423061675', // CONFIRM: WhatsApp number (same as phone assumed)
  email: 'info@your-domain.com', // CONFIRM: real email
  address: 'Gat No. 124/1, Mirje, Near Shirwal MIDC, Mirje-Jawale Road, Tal. Khandala, Dist. Satara',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Gat No. 124/1, Mirje, Shirwal MIDC, Khandala, Satara'), // CONFIRM: exact pin
}

// Icon names come from src/icons.jsx
export const features = [
  ['utensils', 'Food grade'], ['snowflake', 'Freezer safe'], ['microwave', 'Microwave safe'], ['leaf', 'BPA free'], ['shield', 'Durable & strong'],
]

// Photos live in public/images/products/. "Ask us" = CONFIRM with client.
// variants = the sizes shown on the product page. size = short text shown on cards and in the spec table.
// The first 6 products show on the home page.
export const products = [
  { id: 'curd-bucket', name: 'Curd bucket with handle', cat: 'Dairy & sweets', img: '/images/products/curd-bucket.jpg', size: '2, 5, 10 and 20 kg', desc: 'Strong bucket with carry handle and a snug lid for curd and dairy products, in four sizes.', variants: [{ label: '2 kg' }, { label: '5 kg' }, { label: '10 kg' }, { label: '20 kg' }] },
  { id: 'ice-cream-family-pack', name: 'Ice cream family pack', cat: 'Ice cream', img: '/images/products/ice-cream-family-pack.jpg', size: 'Small family pack', desc: 'Oval family pack tub with lid for ice cream and frozen desserts.' },
  { id: 'ice-cream-box', name: 'Ice cream box', cat: 'Ice cream', img: '/images/products/ice-cream-box.jpg', size: 'Ask us', desc: 'Square box with spoon-mark lid for ice cream and desserts.' },
  { id: 'ice-cream-cup-100ml', name: 'Ice cream cup 100 ml', cat: 'Ice cream', img: '/images/products/ice-cream-cup-100ml.jpg', size: '100 ml', desc: 'Single-serve cup with lid for ice cream and desserts.' },
  { id: 'ice-cream-cup-50ml', name: 'Ice cream cup 50 ml', cat: 'Ice cream', img: '/images/products/ice-cream-cup-50ml.jpg', size: '50 ml', desc: 'Small tasting cup with lid for ice cream and desserts.' },
  { id: 'dates-khajur-box', name: 'Dates (khajur) box', cat: 'Dry fruits', img: '/images/products/dates-khajur-box.jpg', size: 'Ask us', desc: 'Rectangular box with lid for dates and dry fruits.' },

  // TODO: the four products below use stand-in photos. Replace each img with the client's real photo.
  { id: 'ice-cream-round-family-pack', name: 'Ice cream round family pack', cat: 'Ice cream', img: '/images/products/ice-cream-cup-50ml.jpg', size: '2 litre', desc: 'Round 2 litre family pack for ice cream.', variants: [{ label: '2 litre' }] },
  { id: 'dahi-cup', name: 'Dahi IML cup', cat: 'Dairy & sweets', img: '/images/products/ice-cream-cup-100ml.jpg', size: '80, 200 and 400 gm', type: 'IML cup', desc: 'IML printed cup for dahi (curd) in three sizes.', variants: [{ label: '80 gm' }, { label: '200 gm' }, { label: '400 gm' }] },
  { id: 'lassi-glass-200ml', name: 'Lassi IML glass 200 ml', cat: 'Dairy & sweets', img: '/images/products/ice-cream-cup-100ml.jpg', size: '200 ml', type: 'IML glass', extraSpecs: [['Diameter', '80 mm or 69 mm']], desc: 'IML printed 200 ml glass for lassi, in two diameters.', variants: [{ label: '80 mm diameter', note: '200 ml' }, { label: '69 mm diameter', note: '200 ml' }] },
  { id: 'shrikhand-amrakhand-container', name: 'Shrikhand / Amrakhand container', cat: 'Dairy & sweets', img: '/images/products/ice-cream-family-pack.jpg', size: '100, 250 and 500 gm', type: 'Thin wall IML container', desc: 'Thin wall IML container for shrikhand and amrakhand in three sizes.', variants: [{ label: '100 gm' }, { label: '250 gm' }, { label: '500 gm' }] },
].map(p => ({ ...p, specs: [['Type', p.type || 'IML / thin wall container'], ['Capacity', p.size], ...(p.extraSpecs || []), ['Material', 'Food grade, BPA free'], ['Safe for', 'Freezer, microwave'], ['Dimensions', 'Ask us'], ['Custom printing', 'Yes, IML']] }))

export const industries = [
  ['Ice cream', 'Tubs and cups that handle freezer storage.'],
  ['Dairy', 'Curd buckets, dahi cups, lassi glasses and shrikhand containers.'],
  ['Sweets', 'Clean, printed boxes that show your brand.'],
  ['Dry fruits', 'Sturdy boxes that keep dates and dry fruits fresh.'],
]

export const why = [
  ['utensils', 'Food grade', 'Made for direct contact with ice cream, curd, sweets and dry fruits.'],
  ['leaf', 'BPA free', 'Safe material your customers can trust.'],
  ['snowflake', 'Freezer safe', 'Holds up in cold storage and deep freezers.'],
  ['microwave', 'Microwave safe', 'Customers can reheat food in the same container.'],
  ['shield', 'Durable & strong', 'Sturdy walls and lids that survive transport.'],
  ['printer', 'IML printing', 'Your label is moulded into the container, so it does not peel or fade.'],
]

export const indMap = { 'Ice cream': 'Ice cream', Dairy: 'Dairy & sweets', Sweets: 'Dairy & sweets', 'Dry fruits': 'Dry fruits' }
export const tileImg = {
  'Ice cream': '/images/products/ice-cream-box.jpg',
  Dairy: '/images/products/curd-bucket.jpg',
  Sweets: '/images/products/ice-cream-family-pack.jpg',
  'Dry fruits': '/images/products/dates-khajur-box.jpg',
}

// Partner logos live in public/images/partners/ (WebP, 400x260)
export const partners = [
  ['Shashwath', 'shashwath'], ['Crazy Ice-Cream', 'crazy-ice-cream'], ['Krishnaraj Dahi', 'krishnaraj-dahi'],
  ['Melt n Mellow Ice Cream', 'melt-n-mellow'], ['Satkripa', 'satkripa'], ['Fru-Go', 'fru-go'],
  ['Nature Delight', 'nature-delight'], ['Urja Naturals', 'urja-naturals'], ['Peony', 'peony'],
].map(([name, file]) => ({ name, img: `/images/partners/${file}.webp` }))

// IML label designs (front panels only). Images live in public/images/printing/.
// products = the product pages where the sample is shown. home = also shown on the home page.
export const printing = [
  { id: 'fru-go', brand: 'Fru-Go', title: 'Alphonso mango pulp tub', img: '/images/printing/fru-go-mango-tub.jpg', products: ['ice-cream-round-family-pack', 'ice-cream-cup-100ml', 'ice-cream-cup-50ml'], home: true },
  { id: 'shashwath-lassi', brand: 'Shashwath', title: 'Lassi 200 ml glass', img: '/images/printing/shashwath-lassi-label.jpg', products: ['lassi-glass-200ml'], home: true },
  { id: 'anant-shrikhand-500g', brand: 'Anant', title: 'Shrikhand 500 gm', img: '/images/printing/anant-shrikhand-500g.jpg', products: ['shrikhand-amrakhand-container'], home: true },
  { id: 'krishnaraj-dahi', brand: 'Krishnaraj', title: 'Dahi 5 kg pack', img: '/images/printing/krishnaraj-dahi-label.jpg', products: ['curd-bucket'], home: true },
  { id: 'anant-shrikhand-250g', brand: 'Anant', title: 'Shrikhand 250 gm', img: '/images/printing/anant-shrikhand-250g.jpg', products: ['shrikhand-amrakhand-container'], home: false },
  { id: 'anant-shrikhand-100g', brand: 'Anant', title: 'Shrikhand 100 gm', img: '/images/printing/anant-shrikhand-100g.jpg', products: ['shrikhand-amrakhand-container'], home: false },
]

export const faq = [
  ['What containers do you make?', 'IML and thin wall containers: curd buckets, dahi cups, lassi glasses, shrikhand and amrakhand containers, ice cream cups, boxes and family packs, and dates (khajur) boxes.'],
  ['Are they safe for food?', 'K-Star containers are food grade, BPA free, freezer safe and microwave safe.'],
  ['Can you print my brand on the container?', 'Yes. IML means the label is moulded into the container. Send your artwork and the size you need, and we confirm the details.'],
  ['Which sizes are available?', 'Curd buckets come in 2, 5, 10 and 20 kg. Dahi cups come in 80, 200 and 400 gm, and shrikhand or amrakhand containers in 100, 250 and 500 gm. We also make 200 ml lassi glasses (80 mm and 69 mm diameter), 50 ml and 100 ml ice cream cups, and a 2 litre round family pack. Ask us for the full list.'],
  ['What is the minimum order?', 'It depends on the size and design. Send a quote request with your quantity and we reply with the details.'],
  ['Where are you located?', 'Gat No. 124/1, Mirje, near Shirwal MIDC, Mirje-Jawale Road, Tal. Khandala, Dist. Satara.'],
]