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

// Product photos live in public/images/products/. "Ask us" = CONFIRM with client.
export const products = [
  { id: 'curd-bucket', name: 'Curd bucket with handle', cat: 'Dairy & sweets', img: '/images/products/curd-bucket.jpg', size: 'Large', desc: 'Large bucket with carry handle and a snug lid for curd and dairy products.' },
  { id: 'ice-cream-family-pack', name: 'Ice cream family pack', cat: 'Ice cream', img: '/images/products/ice-cream-family-pack.jpg', size: 'Small family pack', desc: 'Oval family pack tub with lid for ice cream and frozen desserts.' },
  { id: 'ice-cream-box', name: 'Ice cream box', cat: 'Ice cream', img: '/images/products/ice-cream-box.jpg', size: 'Ask us', desc: 'Square box with spoon-mark lid for ice cream and desserts.' },
  { id: 'ice-cream-cup-100ml', name: 'Ice cream cup 100 ml', cat: 'Ice cream', img: '/images/products/ice-cream-cup-100ml.jpg', size: '100 ml', desc: 'Single-serve cup with lid for ice cream and desserts.' },
  { id: 'ice-cream-cup-50ml', name: 'Ice cream cup 50 ml', cat: 'Ice cream', img: '/images/products/ice-cream-cup-50ml.jpg', size: '50 ml', desc: 'Small tasting cup with lid for ice cream and desserts.' },
  { id: 'dates-khajur-box', name: 'Dates (khajur) box', cat: 'Dry fruits', img: '/images/products/dates-khajur-box.jpg', size: 'Ask us', desc: 'Rectangular box with lid for dates and dry fruits.' },
].map(p => ({ ...p, specs: [['Type', 'IML / thin wall container'], ['Capacity', p.size], ['Material', 'Food grade, BPA free'], ['Safe for', 'Freezer, microwave'], ['Dimensions', 'Ask us'], ['Custom printing', 'Yes, IML']] }))

export const industries = [
  ['Ice cream', 'Tubs and cups that handle freezer storage.'],
  ['Dairy', 'Curd packs that stay secure in transport.'],
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

// Partner logos live in public/images/partners/
export const partners = [
  ['Ladybean Coffee', 'ladybean-coffee'], ['Pepsi', 'pepsi'], ['Chaitanya Parathas', 'chaitanya-parathas'], ['Cafe 17-30', 'cafe-17-30'],
  ['Zorko', 'zorko'], ['Dilli Darbar', 'dilli-darbar'], ['RD Cafe Ice-Cream', 'rd-cafe-ice-cream'], ['Zeeshan', 'zeeshan'],
].map(([name, file]) => ({ name, img: `/images/partners/${file}.png` }))

export const faq = [
  ['What containers do you make?', 'IML and thin wall containers: ice cream cups, boxes and family packs, curd buckets and dates (khajur) boxes.'],
  ['Are they safe for food?', 'K-Star containers are food grade, BPA free, freezer safe and microwave safe.'],
  ['Can you print my brand on the container?', 'Yes. IML means the label is moulded into the container. Send your artwork and the size you need, and we confirm the details.'],
  ['Which sizes are available?', 'We make 50 ml and 100 ml ice cream cups, an ice cream box, a family pack, a large curd bucket and a dates (khajur) box. Ask us for the full size list.'],
  ['What is the minimum order?', 'It depends on the size and design. Send a quote request with your quantity and we reply with the details.'],
  ['Where are you located?', 'Gat No. 124/1, Mirje, near Shirwal MIDC, Mirje-Jawale Road, Tal. Khandala, Dist. Satara.'],
]