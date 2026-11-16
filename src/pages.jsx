import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { products, industries, indMap, tileImg, faq, why } from './data.js'
import { Gold, btn, btnWa, useTitle, wa } from './ui.jsx'
import { Icon, IconBadge } from './icons.jsx'

export function Industries() {
  useTitle('Industries')
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      {industries.map(([t, d], i) => {
        const list = products.filter(p => p.cat === indMap[t])
        return (
          <section key={t} className={`card-lift grid items-center gap-6 overflow-hidden rounded-3xl border border-plum/10 bg-blush md:grid-cols-2 ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-plum to-plum-dark p-6 md:h-full"><img src={tileImg[t]} alt={t} loading="lazy" className="max-h-56 rounded-2xl bg-white object-contain shadow-2xl" /></div>
            <div className="p-6 md:p-10">
              <p className="eyebrow">Industry</p>
              <h2 className="mt-1 text-3xl font-bold text-plum">{t}</h2>
              <p className="mt-2 text-lg text-neutral-700">{d}</p>
              <p className="mt-4 font-semibold text-plum">Containers for {t.toLowerCase()}</p>
              <ul className="mt-1 list-inside list-disc text-neutral-700">{list.map(p => <li key={p.id}><Link className="underline" to={`/products/${p.id}`}>{p.name}</Link></li>)}</ul>
              <div className="mt-5"><Gold to={list.length ? `/contact?product=${encodeURIComponent(list[0].name)}` : '/contact'}>Get a quote</Gold></div>
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
          <p className="eyebrow">Certified quality</p>
          <h2 className="mt-1 text-3xl font-bold text-plum">ISO 9001:2015 certified company</h2>
          <p className="mt-3 text-lg text-neutral-700">K-Star Plastic Industries works under an ISO 9001:2015 certified quality system. Our containers are food grade and BPA free, and they are made to handle freezer storage, microwave heating and transport.</p>
        </div>
        {/* TODO: replace this box with the real ISO certificate image (public/images/iso-certificate.jpg) */}
        <div className="flex h-56 items-center justify-center rounded-3xl border border-gold/50 bg-blush p-6 text-center text-plum">
          <div className="flex flex-col items-center"><IconBadge name="award" /><p className="mt-3 font-semibold">ISO 9001:2015 certificate</p><p className="text-sm text-neutral-600">Certificate copy will be shown here.</p></div>
        </div>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {why.map(([i, t, d]) => <div key={t} className="card-lift rounded-3xl border border-plum/10 p-6 shadow-sm"><IconBadge name={i} /><h3 className="mt-4 text-xl font-semibold">{t}</h3><p className="mt-1 text-neutral-600">{d}</p></div>)}
      </div>
    </div>
  )
}

export function Gallery() {
  useTitle('Gallery')
  const [open, setOpen] = useState(null)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  // One tile per image file (some products share a stand-in photo)
  const imgs = [...new Map([...products.map(p => [p.img, p.name]), ['/images/hero-banner.jpg', 'K-Star packaging range'], ['/images/flyer.jpg', 'K-Star brochure']])]
  // TODO: add factory and machine photos to public/images/ and list them in imgs above.
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {imgs.map(([s, a]) => (
          <button key={s} onClick={() => setOpen([s, a])} aria-label={`Open ${a}`} className="card-lift group overflow-hidden rounded-2xl border border-plum/10 bg-white">
            <img src={s} alt={a} loading="lazy" className="aspect-square w-full object-contain p-2 transition duration-300 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-label={open[1]} onClick={() => setOpen(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <img src={open[0]} alt={open[1]} className="max-h-full max-w-full rounded-xl bg-white" />
          <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-plum" aria-label="Close" onClick={() => setOpen(null)}><Icon name="close" className="h-5 w-5" /></button>
        </div>
      )}
    </div>
  )
}

export function Faq() {
  useTitle('FAQ')
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="space-y-3">
        {faq.map(([q, a]) => (
          <details key={q} className="group rounded-2xl border border-plum/15 bg-white p-4 transition open:border-gold open:bg-blush">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-plum">
              {q}<span className="text-2xl leading-none text-gold transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 text-neutral-700">{a}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Gold to="/contact">Get a quote</Gold>
        <a className={`${btn} ${btnWa}`} href={wa('Hello K-Star, I have a question.')} target="_blank" rel="noreferrer"><Icon name="chat" className="h-5 w-5" />Ask on WhatsApp</a>
      </div>
    </div>
  )
}