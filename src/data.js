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

// Only facts from the client flyer are filled in. "Ask us" = CONFIRM with client.
export const products = [
  { id: 'icecream-450ml', name: 'Ice cream container 450 ml', cat: 'Ice cream', img: '/images/ice450.png', size: '450 ml', desc: 'IML printed round tub with lid for ice cream and frozen desserts.' },
  { id: 'icecream-100ml', name: 'Ice cream cup 100 ml', cat: 'Ice cream', img: '/images/ice100.png', size: '100 ml', desc: 'Single-serve IML cup with lid for ice cream and desserts.' },
  { id: 'shrikhand-tub', name: 'Shrikhand tub', cat: 'Dairy & sweets', img: '/images/shrikhand.png', size: 'Ask us', desc: 'Rectangular IML tub with lid for shrikhand and other sweets.' },
  { id: 'curd-bucket', name: 'Curd bucket with handle', cat: 'Dairy & sweets', img: '/images/curd.png', size: 'Ask us', desc: 'Strong IML bucket with carry handle for curd and dairy products.' },
  { id: 'khajur-box', name: 'Khajur transparent box', cat: 'Dry fruits', img: '/images/khajur.png', size: 'Ask us', desc: 'Clear thin wall box with IML label for dates and dry fruits.' },
].map(p => ({ ...p, specs: [['Type', p.cat === 'Dry fruits' ? 'Thin wall container' : 'IML container'], ['Capacity', p.size], ['Material', 'Food grade, BPA free'], ['Safe for', 'Freezer, microwave'], ['Dimensions', 'Ask us'], ['Custom printing', 'Yes, IML']] }))

export const industries = [
  ['Ice cream', 'Tubs and cups that handle freezer storage.'],
  ['Dairy', 'Curd and shrikhand packs that stay secure in transport.'],
  ['Sweets', 'Clean, printed boxes that show your brand.'],
  ['Dry fruits', 'Clear containers that show the product inside.'],
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
export const tileImg = { 'Ice cream': '/images/ice450.png', Dairy: '/images/curd.png', Sweets: '/images/shrikhand.png', 'Dry fruits': '/images/khajur.png' }

export const faq = [
  ['What containers do you make?', 'IML and thin wall containers: ice cream tubs and cups, shrikhand tubs, curd buckets and khajur boxes.'],
  ['Are they safe for food?', 'K-Star containers are food grade, BPA free, freezer safe and microwave safe.'],
  ['Can you print my brand on the container?', 'Yes. IML means the label is moulded into the container. Send your artwork and the size you need, and we confirm the details.'],
  ['Which sizes are available?', 'We make 100 ml and 450 ml ice cream containers, plus shrikhand, curd and khajur packs. Ask us for the full size list.'],
  ['What is the minimum order?', 'It depends on the size and design. Send a quote request with your quantity and we reply with the details.'],
  ['Where are you located?', 'Gat No. 124/1, Mirje, near Shirwal MIDC, Mirje-Jawale Road, Tal. Khandala, Dist. Satara.'],
]