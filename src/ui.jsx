import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { company as c } from './data.js'
import { Icon } from './icons.jsx'

export const wa = (t) => `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(t)}`
export const useTitle = (t) => useEffect(() => { document.title = `${t} | K-Star Plastic Industries` }, [t])
export const btn = 'inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold tracking-wide transition duration-300'

export const Gold = ({ to, children }) => (
  <Link to={to} className={`${btn} group bg-gradient-to-r from-gold to-[#f0c24a] text-plum-dark shadow-lg shadow-gold/30 hover:brightness-110`}>
    {children}<Icon name="arrow" className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
  </Link>
)

export const PageHead = ({ title, sub }) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-plum-dark to-plum text-white">
    <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
    <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
      <p className="eyebrow">K-Star Plastic Industries</p>
      <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">{title}</h1>
      {sub && <p className="mt-3 max-w-2xl text-lg text-white/80">{sub}</p>}
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
  </div>
)

export const Heading = ({ children, sub, eyebrow }) => (
  <div className="mb-10 text-center">
    {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
    <h2 className="text-3xl font-extrabold text-plum md:text-4xl">{children}</h2>
    <div className="mt-4 flex items-center justify-center gap-2"><span className="h-px w-12 bg-gold/60" /><span className="h-1.5 w-1.5 rotate-45 bg-gold" /><span className="h-px w-12 bg-gold/60" /></div>
    {sub && <p className="mx-auto mt-4 max-w-xl text-neutral-600">{sub}</p>}
  </div>
)