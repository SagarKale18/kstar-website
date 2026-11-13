import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { company as c, features, products, industries, why, tileImg } from './data.js'

import { wa, useTitle, btn, Gold, PageHead, Heading } from './ui.jsx'
import { Industries, Quality, Gallery, Faq } from './pages.jsx'
const Page = ({ t, s, children }) => <><PageHead title={t} sub={s} />{children}</>

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  const links = [['/', 'Home'], ['/products', 'Products'], ['/industries', 'Industries'], ['/quality', 'Quality'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/faq', 'FAQ']]
  return (
    <header className="sticky top-0 z-30 border-b border-plum/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link to="/"><img src="/images/logo.png" alt="K-Star Plastic Industries" className="h-12 w-auto" /></Link>
        <nav className="hidden items-center gap-6 text-[15px] lg:flex">
          {links.map(([to, l]) => <NavLink key={to} to={to} className={({ isActive }) => `font-medium ${isActive ? 'text-plum underline decoration-gold decoration-2 underline-offset-8' : 'hover:text-plum'}`}>{l}</NavLink>)}
          <Link to="/contact" className={`${btn} bg-plum py-2 text-white hover:bg-plum-dark`}>Get a quote</Link>
        </nav>
        <button className="p-2 lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-plum" /><span className="my-1.5 block h-0.5 w-6 bg-plum" /><span className="block h-0.5 w-6 bg-plum" />
        </button>
      </div>
      {open && <nav className="flex flex-col border-t border-plum/10 bg-white px-4 pb-3 lg:hidden">
        {links.map(([to, l]) => <NavLink key={to} to={to} className="border-b border-plum/5 py-3 font-medium">{l}</NavLink>)}
      </nav>}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-plum-dark text-white/85">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div><img src="/images/logo.png" alt="" className="mb-3 h-14 rounded bg-white p-1" /><p className="max-w-xs text-sm">ISO 9001:2015 certified maker of IML and thin wall containers. {c.tagline}</p></div>
        <div><h3 className="mb-2 text-lg text-gold">Pages</h3>{[['/products', 'Products'], ['/industries', 'Industries'], ['/quality', 'Quality'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/faq', 'FAQ'], ['/contact', 'Get a quote']].map(([t, l]) => <Link key={t} to={t} className="block py-1 hover:text-gold">{l}</Link>)}</div>
        <div className="text-sm"><h3 className="mb-2 text-lg text-gold">Contact</h3><p>{c.contactPerson}</p><a className="block py-1 hover:text-gold" href={`tel:${c.phone.replace(/\s/g, '')}`}>{c.phone}</a><a className="block py-1 hover:text-gold" href={`mailto:${c.email}`}>{c.email}</a><a className="mt-1 block hover:text-gold" href={c.mapsLink} target="_blank" rel="noreferrer">{c.address}</a></div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {c.name}. All rights reserved.</p>
    </footer>
  )
}

function MobileBar() {
  const cls = 'flex-1 py-3 text-center text-sm font-semibold'
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex bg-plum text-white shadow-[0_-2px_10px_rgba(0,0,0,.2)] md:hidden">
      <a className={cls} href={`tel:${c.phone.replace(/\s/g, '')}`}>Call</a>
      <a className={`${cls} bg-green-600`} href={wa('Hello K-Star, I need a quote for containers.')} target="_blank" rel="noreferrer">WhatsApp</a>
      <Link className={`${cls} bg-gold text-plum-dark`} to="/contact">Get quote</Link>
    </div>
  )
}

function ProductCard({ p }) {
  return (
    <Link to={`/products/${p.id}`} className="group overflow-hidden rounded-3xl border border-plum/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-xl">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blush to-[#f1d6e6]"><img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-contain p-3 transition group-hover:scale-105" /></div>
      <div className="p-4"><p className="text-sm text-plum">{p.cat}</p><h3 className="text-lg font-semibold leading-snug">{p.name}</h3><p className="mt-1 text-sm text-neutral-600">{p.desc}</p><span className="mt-3 inline-block text-sm font-semibold text-plum">View details</span></div>
    </Link>
  )
}

function Home() {
  useTitle('IML & Thin Wall Containers')
  return (<>
    <section className="relative overflow-hidden bg-gradient-to-br from-plum-dark via-plum to-[#8a1a69] text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-28 pt-12 md:grid-cols-2 md:pt-20">
        <div className="hero-in">
          <p className="inline-block rounded-full border border-gold/70 bg-white/10 px-4 py-1 text-sm">ISO 9001:2015 certified company</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] md:text-6xl">Packaging that makes your food look as good as it tastes</h1>
          <p className="mt-5 max-w-md text-lg text-white/85">IML and thin wall containers for ice cream, curd, shrikhand and dry fruits. Made in Mirje, Satara.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Gold to="/products">See products</Gold><Link to="/contact" className={`${btn} border-2 border-white/80 text-white hover:bg-white hover:text-plum`}>Get a quote</Link></div>
        </div>
        <div className="hero-float relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-4 border-gold" />
          <img src="/images/hero.png" alt="K-Star ice cream, shrikhand, curd and khajur containers" className="relative w-full rounded-3xl shadow-2xl" />
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-4 py-2 text-plum shadow-xl"><p className="text-xs text-neutral-500">Made in</p><p className="font-bold">Mirje, Satara</p></div>
        </div>
      </div>
      <svg className="absolute bottom-0 h-14 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path fill="#fff" d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,30 L1440,80 L0,80Z" /></svg>
    </section>
    <section className="relative z-10 mx-auto -mt-6 max-w-6xl px-4"><ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
      {features.map(([i, t]) => <li key={t} className="rounded-2xl border border-gold/40 bg-white p-4 text-center shadow-lg"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blush text-2xl">{i}</span><p className="mt-2 font-semibold text-plum">{t}</p></li>)}
    </ul></section>
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Heading sub="Tubs, cups, buckets and boxes with your brand printed in.">Our containers</Heading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map(p => <ProductCard key={p.id} p={p} />)}</div>
      <div className="mt-8 text-center"><Link to="/products" className={`${btn} border-2 border-plum text-plum hover:bg-plum hover:text-white`}>View all products</Link></div>
    </section>
    <section className="bg-blush"><div className="mx-auto max-w-6xl px-4 py-16">
      <Heading>Why choose K-Star</Heading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{why.map(([i, t, d]) => <div key={t} className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-lg"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-plum text-2xl">{i}</span><h3 className="mt-3 text-xl font-semibold">{t}</h3><p className="mt-1 text-neutral-600">{d}</p></div>)}</div>
    </div></section>
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Heading>Who we pack for</Heading>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{industries.map(([t, d]) => <Link to="/industries" key={t} className="group relative flex h-56 items-end overflow-hidden rounded-3xl bg-plum"><img src={tileImg[t]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-plum-dark via-plum-dark/40 to-transparent" /><div className="relative p-4 text-white"><h3 className="text-xl font-bold">{t}</h3><p className="hidden text-sm text-white/80 sm:block">{d}</p></div></Link>)}</div>
    </section>
    <section className="bg-plum-dark text-white"><div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-extrabold md:text-4xl">How an order works</h2>
      <ol className="grid gap-4 md:grid-cols-4">{[['Tell us what you pack', 'Share the product, size and quantity.'], ['Send your artwork', 'Your label is printed into the container (IML).'], ['We make it', 'Food grade material under ISO 9001:2015.'], ['Delivery', 'Packed and sent to your plant.']].map(([t, d], i) => <li key={t} className="rounded-3xl border border-white/15 bg-white/5 p-5"><span className="font-display text-4xl font-extrabold text-gold">{i + 1}</span><h3 className="mt-2 text-lg font-semibold">{t}</h3><p className="text-white/75">{d}</p></li>)}</ol>
    </div></section>
    <section className="mx-auto max-w-5xl px-4 py-16"><div className="rounded-3xl bg-gradient-to-r from-gold to-[#f0c24a] p-8 text-center text-plum-dark md:p-12">
      <h2 className="text-3xl font-extrabold md:text-4xl">Need containers with your brand on them?</h2>
      <p className="mt-3 text-lg">Tell us the size and quantity. We reply with a quote.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3"><Link to="/contact" className={`${btn} bg-plum text-white hover:bg-plum-dark`}>Get a quote</Link><a href={`tel:${c.phone.replace(/\s/g, '')}`} className={`${btn} border-2 border-plum-dark`}>Call {c.phone}</a></div>
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
      
      <div className="mt-5 flex flex-wrap gap-2">{cats.map(k => <button key={k} onClick={() => setCat(k)} className={`rounded-full border px-4 py-1.5 text-sm font-medium ${cat === k ? 'border-plum bg-plum text-white' : 'border-plum/30 text-plum'}`}>{k}</button>)}</div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(p => <ProductCard key={p.id} p={p} />)}</div>
    </section>
  )
}

function ProductDetail() {
  const p = products.find(x => x.id === useParams().id)
  useTitle(p ? p.name : 'Product not found')
  if (!p) return <div className="px-4 py-20 text-center"><p>We could not find that product.</p><Link className="text-plum underline" to="/products">Back to products</Link></div>
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/products" className="text-sm text-plum underline">Back to products</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl bg-blush p-4"><img src={p.img} alt={p.name} className="max-h-[420px] w-full object-contain" /></div>
        <div>
          <h1 className="text-3xl font-extrabold text-plum">{p.name}</h1>
          <p className="mt-2 text-neutral-700">{p.desc}</p>
          <table className="mt-5 w-full text-left"><tbody>{p.specs.map(([k, v]) => <tr key={k} className="border-b border-plum/10"><th className="w-1/3 py-2 pr-3 font-semibold text-plum">{k}</th><td className="py-2">{v}</td></tr>)}</tbody></table>
          <div className="mt-6 flex flex-wrap gap-3"><Gold to={`/contact?product=${encodeURIComponent(p.name)}`}>Get a quote</Gold><a className={`${btn} bg-green-600 text-white hover:brightness-110`} href={wa(`Hello K-Star, I want a quote for: ${p.name}`)} target="_blank" rel="noreferrer">WhatsApp us</a></div>
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
      
      <p className="mt-4 text-lg text-neutral-700">K-Star Plastic Industries is an ISO 9001:2015 certified company in Mirje, near Shirwal MIDC, Satara. We make IML and thin wall containers for ice cream, dairy, sweets and dry fruits. {c.tagline}</p>
      {/* TODO: add founder name, year started, machine list and factory photos once the client shares them. */}
      <h2 className="mt-10 text-2xl font-bold text-plum">How an order works</h2>
      <ol className="mt-4 space-y-3">{steps.map(([t, d], i) => <li key={t} className="flex gap-4 rounded-xl bg-blush p-4"><span className="font-display text-2xl font-extrabold text-gold">{i + 1}</span><div><h3 className="font-semibold">{t}</h3><p className="text-neutral-600">{d}</p></div></li>)}</ol>
    </section>
  )
}

function Contact() {
  useTitle('Get a quote')
  const pre = new URLSearchParams(useLocation().search).get('product') || ''
  const [f, setF] = useState({ name: '', phone: '', product: pre, qty: '', msg: '' })
  const [state, setState] = useState('idle')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const text = `Quote request%0AName: ${f.name}%0APhone: ${f.phone}%0AProduct: ${f.product}%0AQuantity: ${f.qty}%0A${f.msg}`
  async function submit(e) {
    e.preventDefault()
    const key = import.meta.env.VITE_WEB3FORMS_KEY // optional: free key from web3forms.com, sends quotes to email
    if (!key) { window.open(`https://wa.me/${c.whatsapp}?text=${text}`, '_blank'); return }
    setState('sending')
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ access_key: key, subject: 'New quote request - K-Star website', ...f }) })
      setState((await r.json()).success ? 'done' : 'error')
    } catch { setState('error') }
  }
  const field = 'w-full rounded-lg border border-plum/30 px-3 py-2.5 focus:border-plum'
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
      <div>
        
        
        <div className="mt-6 space-y-2"><p className="font-semibold">{c.contactPerson}</p><a className="block text-plum underline" href={`tel:${c.phone.replace(/\s/g, '')}`}>{c.phone}</a><a className="block text-plum underline" href={`mailto:${c.email}`}>{c.email}</a><p>{c.address}</p><a className="inline-block text-plum underline" href={c.mapsLink} target="_blank" rel="noreferrer">Open in Google Maps</a></div>
      </div>
      {state === 'done' ? <p className="rounded-xl bg-blush p-6 font-semibold text-plum">Request sent. We will contact you soon.</p> :
      <form onSubmit={submit} className="space-y-3">
        <input required className={field} placeholder="Your name" value={f.name} onChange={set('name')} />
        <input required type="tel" className={field} placeholder="Phone number" value={f.phone} onChange={set('phone')} />
        <select className={field} value={f.product} onChange={set('product')}><option value="">Choose a product</option>{products.map(p => <option key={p.id}>{p.name}</option>)}</select>
        <input className={field} placeholder="Quantity needed" value={f.qty} onChange={set('qty')} />
        <textarea rows="4" className={field} placeholder="Message" value={f.msg} onChange={set('msg')} />
        <button disabled={state === 'sending'} className={`${btn} w-full bg-plum text-white hover:bg-plum-dark`}>{state === 'sending' ? 'Sending...' : import.meta.env.VITE_WEB3FORMS_KEY ? 'Send request' : 'Send on WhatsApp'}</button>
        {state === 'error' && <p className="text-red-700">The request did not send. Call us or use WhatsApp instead.</p>}
      </form>}
    </section>
  )
}

export default function App() {
  return (<>
    <Header />
    <main><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Page t="Products" s="Containers for ice cream, dairy, sweets and dry fruits."><Products /></Page>} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/industries" element={<Page t="Industries" s="Who we make containers for."><Industries /></Page>} />
      <Route path="/quality" element={<Page t="Quality" s="Food grade, BPA free and ISO 9001:2015 certified."><Quality /></Page>} />
      <Route path="/gallery" element={<Page t="Gallery" s="Our container range."><Gallery /></Page>} />
      <Route path="/about" element={<Page t="About us" s="Mirje, near Shirwal MIDC, Satara."><About /></Page>} />
      <Route path="/faq" element={<Page t="Questions and answers" s="Quick answers before you ask for a quote."><Faq /></Page>} />
      <Route path="/contact" element={<Page t="Get a quote" s="Send the size and quantity you need. We will call you back."><Contact /></Page>} />
      <Route path="*" element={<Home />} />
    </Routes></main>
    <Footer /><MobileBar />
  </>)
}
