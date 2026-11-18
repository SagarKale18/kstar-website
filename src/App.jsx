import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { company as c, features, products, why, partners } from './data.js'
import { wa, useTitle, btn, btnPlum, btnOutline, btnWa, Gold, PageHead, Heading } from './ui.jsx'
import { Icon, IconBadge } from './icons.jsx'
import { Industries, Quality, Gallery, Faq } from './pages.jsx'

const Page = ({ t, s, children }) => <><PageHead title={t} sub={s} />{children}</>
const tel = `tel:${c.phone.replace(/\s/g, '')}`

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  const links = [['/', 'Home'], ['/products', 'Products'], ['/industries', 'Industries'], ['/quality', 'Quality'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/faq', 'FAQ']]
  return (<>
    <div className="hidden bg-plum-dark text-xs text-white/80 lg:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5">
        <span className="flex items-center gap-2"><Icon name="award" className="h-4 w-4 text-gold" />ISO 9001:2015 certified company</span>
        <a href={tel} className="flex items-center gap-2 hover:text-gold"><Icon name="phone" className="h-4 w-4 text-gold" />{c.phone}</a>
      </div>
    </div>
    <header className="sticky top-0 z-30 border-b border-gold/30 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link to="/"><img src="/images/logo.png" alt="K-Star Plastic Industries" className="h-11 w-auto sm:h-12" /></Link>
        <nav className="hidden items-center gap-7 text-[15px] lg:flex">
          {links.map(([to, l]) => <NavLink key={to} to={to} className={({ isActive }) => `font-medium transition ${isActive ? 'text-plum underline decoration-gold decoration-2 underline-offset-8' : 'text-neutral-700 hover:text-plum'}`}>{l}</NavLink>)}
          <Link to="/contact" className={`${btn} ${btnPlum} btn-sm`}>Get a quote</Link>
        </nav>
        <button className="p-2 text-plum lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
      </div>
      {open && <nav className="flex flex-col border-t border-plum/10 bg-white px-4 pb-4 lg:hidden">
        {links.map(([to, l]) => <NavLink key={to} to={to} className={({ isActive }) => `border-b border-plum/5 py-3 font-medium ${isActive ? 'text-plum' : ''}`}>{l}</NavLink>)}
        <Link to="/contact" className={`${btn} ${btnPlum} mt-4`}>Get a quote</Link>
      </nav>}
    </header>
  </>)
}

function Footer() {
  const row = 'flex items-start gap-3 py-1.5 transition hover:text-gold'
  return (
    <footer className="bg-plum-dark text-white/80">
      <div className="h-1 bg-gradient-to-r from-gold via-[#f0c24a] to-gold" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div><img src="/images/logo.png" alt="" className="mb-4 h-14 rounded bg-white p-1" /><p className="max-w-xs text-sm leading-relaxed">ISO 9001:2015 certified maker of IML and thin wall containers. {c.tagline}</p></div>
        <div><h3 className="mb-3 text-lg text-gold">Pages</h3>{[['/products', 'Products'], ['/industries', 'Industries'], ['/quality', 'Quality'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/faq', 'FAQ'], ['/contact', 'Get a quote']].map(([t, l]) => <Link key={t} to={t} className="block py-1 text-sm transition hover:text-gold">{l}</Link>)}</div>
        <div className="text-sm"><h3 className="mb-3 text-lg text-gold">Contact</h3>
          <p className="py-1.5 font-semibold text-white">{c.contactPerson}</p>
          <a className={row} href={tel}><Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{c.phone}</a>
          <a className={row} href={`mailto:${c.email}`}><Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{c.email}</a>
          <a className={row} href={c.mapsLink} target="_blank" rel="noreferrer"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{c.address}</a>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {c.name}. All rights reserved.</p>
    </footer>
  )
}

function MobileBar() {
  const cls = 'flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold'
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex bg-plum text-white shadow-[0_-2px_10px_rgba(0,0,0,.2)] md:hidden">
      <a className={cls} href={tel}><Icon name="phone" className="h-4 w-4" />Call</a>
      <a className={`${cls} bg-green-700`} href={wa('Hello K-Star, I need a quote for containers.')} target="_blank" rel="noreferrer"><Icon name="chat" className="h-4 w-4" />WhatsApp</a>
      <Link className={`${cls} bg-gold text-plum-dark`} to="/contact">Get quote</Link>
    </div>
  )
}

function NotFound() {
  useTitle('Page not found')
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 text-3xl font-bold text-plum">Page not found</h1>
      <p className="mt-3 text-neutral-700">The page or product you requested does not exist.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Gold to="/">Go home</Gold>
        <Link to="/products" className={`${btn} ${btnOutline}`}>View products</Link>
      </div>
    </section>
  )
}

function ProductCard({ p }) {
  return (
    <Link to={`/products/${p.id}`} className="card-lift group overflow-hidden rounded-3xl border border-plum/10 bg-white shadow-sm">
      <div className="relative isolate flex aspect-[5/4] items-center justify-center overflow-hidden border-b border-plum/5 bg-gradient-to-br from-blush/60 to-white p-3 before:absolute before:inset-8 before:rounded-full before:bg-gold/20 before:blur-2xl">
        <img src={p.img} alt={p.name} loading="lazy" className="relative h-full w-full rounded-2xl border border-plum/10 object-contain p-2 shadow-[0_4px_18px_rgba(92,10,64,0.12)] transition duration-300 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="eyebrow">{p.cat}</p>
        <h3 className="mt-1 text-lg font-semibold leading-snug">{p.name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
        {p.size !== 'Ask us' && <p className="mt-2 text-sm font-semibold text-plum">Sizes: {p.size}</p>}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-plum">View details<Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </div>
    </Link>
  )
}

/* Use the desktop artwork at wide sizes and the uncropped mobile artwork on phones. */
function Hero() {
  return (
    <section>
      <h1 className="sr-only hidden md:block">K-Star Plastic Industries: versatile and durable food packaging solutions</h1>
      <div className="relative aspect-[850/700] w-full overflow-hidden bg-[#f6e3c8] md:aspect-[1316/700]">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/hero-banner.jpg" />
          <img src="/images/hero-banner-mobile.jpg" alt="Curd bucket, ice cream family pack, ice cream box, ice cream cups and dates box" width="850" height="700" fetchpriority="high" decoding="async" className="absolute inset-0 h-full w-full object-contain md:object-cover" />
        </picture>
        {/* Makes the "Explore Our Packaging Range" button inside the banner clickable */}
        <Link to="/products" aria-label="Explore our packaging range" className="absolute hidden rounded-full transition hover:bg-white/15 md:block" style={{ left: '5.1%', top: '77.7%', width: '26.8%', height: '7.4%' }} />
      </div>
      <div className="bg-gradient-to-b from-[#fbeed8] to-[#f6dfbf] px-5 pb-12 pt-7 text-center md:hidden">
        <h1 className="text-3xl font-bold leading-tight text-[#9c5204]">Versatile &amp; Durable Packaging Solutions</h1>
        <p className="mx-auto mt-3 max-w-md text-[#5a3a1e]">A complete range of high-quality, food-grade containers for curd, ice cream, dates and more, designed for freshness, safety and longer shelf life.</p>
        <Link to="/products" className="btn mt-6 text-white" style={{ background: 'linear-gradient(135deg, #c4780f, #8a4600)', boxShadow: '0 10px 22px -10px rgba(138,70,0,.7)' }}>Explore our packaging range<Icon name="arrow" className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section aria-label="Our partners" className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Heading eyebrow="Trusted by brands" sub="Food and beverage brands that work with K-Star Plastic Industries.">Our partners</Heading>
      </div>
      <div className="marquee-mask">
        <div className="marquee" style={{ animationDuration: `${partners.length * 9}s` }}>
          {[0, 1, 2, 3].map(k => (
            <ul key={k} className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6" aria-hidden={k > 0 ? 'true' : undefined}>
              {partners.map(p => (
                <li key={p.name} className="flex h-20 w-36 items-center justify-center rounded-2xl border border-plum/10 bg-white p-2 shadow-sm sm:h-28 sm:w-52 sm:p-3">
                  <img src={p.img} alt={k > 0 ? '' : p.name} loading="lazy" width="400" height="260" className="h-full w-full object-contain" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

function Home() {
  useTitle('IML & Thin Wall Containers')
  return (<>
    <Hero />

    <section className="relative z-10 mx-auto -mt-6 max-w-6xl px-4"><ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
      {features.map(([i, t], n) => <li key={t} className={`card-lift flex flex-col items-center rounded-2xl border border-gold/40 bg-white p-4 text-center shadow-lg ${n === features.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}><IconBadge name={i} /><p className="mt-3 font-semibold text-plum">{t}</p></li>)}
    </ul></section>

    <section className="mx-auto max-w-6xl px-4 py-16">
      <Heading eyebrow="Our range" sub="Cups, boxes, family packs and buckets with your brand printed in.">Our containers</Heading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0, 6).map(p => <ProductCard key={p.id} p={p} />)}</div>
      <div className="mt-10 text-center"><Link to="/products" className={`${btn} ${btnOutline}`}>View all products</Link></div>
    </section>

    <section className="bg-blush"><div className="mx-auto max-w-6xl px-4 py-16">
      <Heading eyebrow="Why K-Star">Why choose K-Star</Heading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{why.map(([i, t, d]) => <div key={t} className="card-lift rounded-3xl border border-transparent bg-white p-6 shadow-sm"><IconBadge name={i} /><h3 className="mt-4 text-xl font-semibold">{t}</h3><p className="mt-1 text-neutral-600">{d}</p></div>)}</div>
    </div></section>

    <Partners />

    <section className="bg-plum-dark text-white"><div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 text-center"><p className="eyebrow mb-2">Simple process</p><h2 className="text-3xl font-bold md:text-4xl">How an order works</h2></div>
      <ol className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">{[['Tell us what you pack', 'Share the product, size and quantity.'], ['Send your artwork', 'Your label is printed into the container (IML).'], ['We make it', 'Food grade material under ISO 9001:2015.'], ['Delivery', 'Packed and sent to your plant.']].map(([t, d], i) => <li key={t} className="rounded-3xl border border-white/15 bg-white/5 p-5"><span className="font-display text-4xl font-bold text-gold">0{i + 1}</span><h3 className="mt-2 text-lg font-semibold">{t}</h3><p className="text-white/75">{d}</p></li>)}</ol>
    </div></section>

    <section className="mx-auto max-w-5xl px-4 py-16"><div className="rounded-3xl bg-gradient-to-r from-gold to-[#f0c24a] p-8 text-center text-plum-dark md:p-12">
      <h2 className="text-3xl font-bold md:text-4xl">Need containers with your brand on them?</h2>
      <p className="mt-3 text-lg">Tell us the size and quantity. We reply with a quote.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3"><Link to="/contact" className={`${btn} ${btnPlum}`}>Get a quote</Link><a href={tel} className={`${btn} ${btnOutline}`}><Icon name="phone" className="h-5 w-5" />Call {c.phone}</a></div>
    </div></section>
  </>)
}

function Products() {
  useTitle('Products')
  const cats = ['All', ...new Set(products.map(p => p.cat))]
  const [cat, setCat] = useState('All')
  const list = products.filter(p => cat === 'All' || p.cat === cat)
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap gap-2">{cats.map(k => <button key={k} onClick={() => setCat(k)} aria-pressed={cat === k} className={`rounded-full border px-5 py-1.5 text-sm font-medium transition ${cat === k ? 'border-plum bg-plum text-white' : 'border-plum/30 text-plum hover:border-gold'}`}>{k}</button>)}</div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(p => <ProductCard key={p.id} p={p} />)}</div>
    </section>
  )
}

function ProductDetail() {
  const p = products.find(x => x.id === useParams().id)
  useTitle(p ? p.name : 'Product not found')
  if (!p) return <NotFound />
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-plum underline"><Icon name="arrow" className="h-4 w-4 rotate-180" />Back to products</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <div className="relative isolate flex items-center justify-center overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-blush/60 to-white p-4 before:absolute before:inset-12 before:rounded-full before:bg-gold/20 before:blur-3xl">
          <img src={p.img} alt={p.name} className="relative max-h-[440px] w-full rounded-2xl border border-plum/10 object-contain p-2 shadow-[0_4px_18px_rgba(92,10,64,0.12)]" />
        </div>
        <div>
          <p className="eyebrow">{p.cat}</p>
          <h1 className="mt-1 text-3xl font-bold text-plum">{p.name}</h1>
          <p className="mt-2 text-neutral-700">{p.desc}</p>
          <table className="mt-5 w-full text-left"><tbody>{p.specs.map(([k, v]) => <tr key={k} className="border-b border-plum/10"><th className="w-1/3 py-2.5 pr-3 font-semibold text-plum">{k}</th><td className="py-2.5">{v}</td></tr>)}</tbody></table>
          {p.variants && (
            <div className="mt-6">
              <h2 className="text-xl font-bold text-plum">Available sizes</h2>
              <p className="mt-1 text-sm text-neutral-600">Tap a size to ask for a quote.</p>
              <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {p.variants.map(v => {
                  const size = v.note ? `${v.label}, ${v.note}` : v.label
                  return (
                    <li key={v.label}>
                      <Link to={`/contact?product=${encodeURIComponent(p.name)}&size=${encodeURIComponent(size)}`} className="card-lift flex h-full flex-col items-center justify-center rounded-2xl border border-gold/50 bg-blush px-3 py-4 text-center">
                        <span className="font-display text-xl font-bold text-plum">{v.label}</span>
                        {v.note && <span className="text-sm text-neutral-600">{v.note}</span>}
                        <span className="mt-2 text-xs font-bold uppercase tracking-widest text-gold">Get quote</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <Gold to={`/contact?product=${encodeURIComponent(p.name)}`}>Get a quote</Gold>
            <a className={`${btn} ${btnWa}`} href={wa(`Hello K-Star, I want a quote for: ${p.name}`)} target="_blank" rel="noreferrer"><Icon name="chat" className="h-5 w-5" />WhatsApp us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  useTitle('About')
  const steps = [['Tell us what you pack', 'Share the product, size and quantity.'], ['Approve the design', 'We print your label inside the mould (IML).'], ['We make it', 'Food grade material, checked before dispatch.'], ['Delivery', 'Packed and sent to your plant.']]
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <p className="eyebrow">Who we are</p>
      <p className="mt-2 text-lg text-neutral-700">K-Star Plastic Industries is an ISO 9001:2015 certified company in Mirje, near Shirwal MIDC, Satara. We make IML and thin wall containers for ice cream, dairy, sweets and dry fruits. {c.tagline}</p>
      {/* TODO: add founder name, year started, machine list and factory photos once the client shares them. */}
      <h2 className="mt-10 text-2xl font-bold text-plum">How an order works</h2>
      <ol className="mt-4 space-y-3">{steps.map(([t, d], i) => <li key={t} className="flex gap-4 rounded-xl border border-plum/10 bg-blush p-4"><span className="font-display text-2xl font-bold text-gold">{i + 1}</span><div><h3 className="font-semibold">{t}</h3><p className="text-neutral-600">{d}</p></div></li>)}</ol>
    </section>
  )
}

function Contact() {
  useTitle('Get a quote')
  const q = new URLSearchParams(useLocation().search)
  const pre = q.get('product') || ''
  const preSize = q.get('size') || ''
  const [f, setF] = useState({ name: '', phone: '', product: pre, qty: '', msg: preSize ? `Size needed: ${preSize}` : '' })
  const [state, setState] = useState('idle')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const key = import.meta.env.VITE_WEB3FORMS_KEY // optional: free key from web3forms.com, sends quotes to email
  const text = ['Quote request', `Name: ${f.name}`, `Phone: ${f.phone}`, `Product: ${f.product}`, `Quantity: ${f.qty}`, f.msg].join('\n')
  async function submit(e) {
    e.preventDefault()
    if (!key) { window.open(wa(text), '_blank', 'noopener'); return }
    setState('sending')
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ access_key: key, subject: 'New quote request - K-Star website', ...f }) })
      setState((await r.json()).success ? 'done' : 'error')
    } catch { setState('error') }
  }
  const field = 'w-full rounded-lg border border-plum/30 bg-white px-3 py-2.5 focus:border-plum'
  const row = 'flex items-start gap-3'
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 className="mt-1 text-3xl font-bold text-plum">Talk to our team</h2>
        <p className="mt-2 text-neutral-700">Tell us the container, size and quantity. We reply with a quote.</p>
        <div className="mt-6 space-y-3">
          <p className="font-semibold">{c.contactPerson}</p>
          <a className={`${row} text-plum hover:underline`} href={tel}><Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{c.phone}</a>
          <a className={`${row} break-all text-plum hover:underline`} href={`mailto:${c.email}`}><Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{c.email}</a>
          <p className={row}><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{c.address}</p>
          <a className="inline-flex items-center gap-1 text-plum underline" href={c.mapsLink} target="_blank" rel="noreferrer">Open in Google Maps<Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </div>
      {state === 'done'
        ? <p className="flex items-center gap-3 rounded-xl bg-blush p-6 font-semibold text-plum"><Icon name="check" className="h-6 w-6 text-gold" />Request sent. We will contact you soon.</p>
        : <form onSubmit={submit} className="space-y-3 rounded-3xl border border-gold/30 bg-blush/50 p-5 md:p-6">
          <input required aria-label="Your name" className={field} placeholder="Your name" value={f.name} onChange={set('name')} />
          <input required type="tel" aria-label="Phone number" className={field} placeholder="Phone number" value={f.phone} onChange={set('phone')} />
          <input required aria-label="Product" className={field} placeholder="Product or container" value={f.product} onChange={set('product')} />
          <input required aria-label="Quantity" className={field} placeholder="Required quantity" value={f.qty} onChange={set('qty')} />
          <textarea aria-label="Additional details" className={`${field} min-h-24 resize-y`} placeholder="Size, material or other details" value={f.msg} onChange={set('msg')} />
          <button type="submit" disabled={state === 'sending'} className="w-full rounded-lg bg-plum px-4 py-3 font-semibold text-white transition hover:bg-plum-dark disabled:cursor-wait disabled:opacity-70">
            {state === 'sending' ? 'Sending...' : 'Send quote request'}
          </button>
          {state === 'error' && <p role="alert" className="text-sm font-semibold text-red-700">We could not send the request. Please try again or contact us on WhatsApp.</p>}
        </form>}
    </section>
  )
}

function App() {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBar />
    </div>
  )
}

export default App