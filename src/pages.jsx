import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company as c, products, industries, indMap, tileImg, faq, why } from './data.js'
import { Gold, btn, useTitle, wa } from './ui.jsx'

export function Industries() {
  useTitle('Industries')
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      {industries.map(([t, d], i) => {
        const list = products.filter(p => p.cat === indMap[t])
        return (
          <section key={t} className={`grid items-center gap-6 overflow-hidden rounded-3xl border border-plum/10 bg-blush md:grid-cols-2 ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-plum to-plum-dark p-6 md:h-full"><img src={tileImg[t]} alt={t} className="max-h-56 rounded-2xl object-contain shadow-2xl" /></div>
            <div className="p-6 md:p-10">
              <h2 className="text-3xl font-extrabold text-plum">{t}</h2>
              <p className="mt-2 text-lg text-neutral-700">{d}</p>
              <p className="mt-4 font-semibold text-plum">Containers for {t.toLowerCase()}</p>
              <ul className="mt-1 list-inside list-disc text-neutral-700">{list.map(p => <li key={p.id}><Link className="underline" to={`/products/${p.id}`}>{p.name}</Link></li>)}</ul>
              <div className="mt-5"><Gold to={`/contact?product=${encodeURIComponent(list[0].name)}`}>Get a quote</Gold></div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export function Quality() {
  useTitle('Quality')
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-plum">ISO 9001:2015 certified company</h2>
          <p className="mt-3 text-lg text-neutral-700">K-Star Plastic Industries works under an ISO 9001:2015 certified quality system. Our containers are food grade and BPA free, and they are made to handle freezer storage, microwave heating and transport.</p>
        </div>
        {/* TODO: replace this box with the real ISO certificate image (public/images/iso-certificate.jpg) */}
        <div className="flex h-56 items-center justify-center rounded-3xl border-2 border-dashed border-gold bg-blush p-6 text-center text-plum"><div><p className="text-5xl">🏅</p><p className="mt-2 font-semibold">ISO 9001:2015 certificate</p><p className="text-sm text-neutral-600">Certificate copy will be shown here.</p></div></div>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{why.map(([i, t, d]) => <div key={t} className="rounded-3xl border border-plum/10 p-6 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-2xl">{i}</span><h3 className="mt-3 text-xl font-semibold">{t}</h3><p className="mt-1 text-neutral-600">{d}</p></div>)}</div>
    </div>
  )
}

export function Gallery() {
  useTitle('Gallery')
  const [open, setOpen] = useState(null)
  useEffect(() => { const k = (e) => e.key === 'Escape' && setOpen(null); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  const imgs = [...products.map(p => [p.img, p.name]), ['/images/hero.png', 'K-Star product range'], ['/images/flyer.png', 'K-Star brochure']]
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* TODO: add factory and machine photos to public/images/ and list them in imgs above. */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">{imgs.map(([s, a]) => <button key={s} onClick={() => setOpen([s, a])} className="group overflow-hidden rounded-2xl bg-blush"><img src={s} alt={a} loading="lazy" className="aspect-square w-full object-contain p-2 transition group-hover:scale-105" /></button>)}</div>
      {open && <div role="dialog" aria-label={open[1]} onClick={() => setOpen(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"><img src={open[0]} alt={open[1]} className="max-h-full max-w-full rounded-xl bg-white" /><button className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 font-bold" aria-label="Close">X</button></div>}
    </div>
  )
}

export function Faq() {
  useTitle('FAQ')
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="space-y-3">{faq.map(([q, a]) => <details key={q} className="group rounded-2xl border border-plum/15 bg-white p-4 open:border-gold open:bg-blush"><summary className="cursor-pointer list-none font-semibold text-plum">{q}</summary><p className="mt-2 text-neutral-700">{a}</p></details>)}</div>
      <div className="mt-8 flex flex-wrap gap-3"><Gold to="/contact">Get a quote</Gold><a className={`${btn} bg-green-600 text-white`} href={wa('Hello K-Star, I have a question.')} target="_blank" rel="noreferrer">Ask on WhatsApp</a></div>
    </div>
  )
}
