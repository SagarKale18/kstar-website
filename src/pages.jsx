import { useEffect, useState } from 'react'
import { products, faq, why, printMocks } from './data.js'
import { Gold, btn, btnWa, useTitle, wa } from './ui.jsx'
import { Icon, IconBadge } from './icons.jsx'

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
  const imgs = [...new Map(products.map(p => [p.img, p.name]))]
  // TODO: add factory and machine photos to public/images/ and list them in imgs above.
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {imgs.map(([s, a]) => (
            <button key={s} onClick={() => setOpen([s, a])} aria-label={`Open ${a}`} className="card-lift group overflow-hidden rounded-2xl border border-plum/10 bg-white">
              <img src={s} alt={a} loading="lazy" className="aspect-square w-full object-contain p-2 transition duration-300 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </section>
      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-2">Custom printing</p>
            <h2 className="text-3xl font-bold text-plum md:text-4xl">Printed product mockups</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {printMocks.map(item => (
              <button key={item.name} type="button" onClick={() => setOpen([item.img, `${item.brand} ${item.name} packaging`])} aria-label={`Open ${item.brand} ${item.name} packaging`} className="overflow-hidden rounded-3xl border border-plum/10 bg-white text-left">
                <div className="flex aspect-[4/3] items-center justify-center p-3">
                  <img src={item.img} alt={`${item.brand} ${item.name} packaging`} loading="lazy" className="h-full w-full object-contain" />
                </div>
                <div className="border-t border-plum/5 p-4">
                  <p className="eyebrow">{item.brand}</p>
                  <h3 className="mt-1 text-lg font-semibold">{item.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
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