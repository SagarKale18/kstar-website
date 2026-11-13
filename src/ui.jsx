import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { company as c } from './data.js'
export const wa = (t) => `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(t)}`
export const useTitle = (t) => useEffect(() => { document.title = `${t} | K-Star Plastic Industries` }, [t])
export const btn = 'inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition'
export const Gold = ({ to, children }) => <Link to={to} className={`${btn} bg-gold text-plum-dark shadow-lg shadow-gold/30 hover:brightness-110`}>{children}</Link>
export const PageHead = ({ title, sub }) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-plum-dark to-plum text-white">
    <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
    <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16"><h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>{sub && <p className="mt-3 max-w-2xl text-lg text-white/80">{sub}</p>}</div>
  </div>
)
export const Heading = ({ children, sub }) => (
  <div className="mb-8 text-center"><h2 className="text-3xl font-extrabold text-plum md:text-4xl">{children}</h2><div className="mx-auto mt-3 h-1 w-16 rounded bg-gold" />{sub && <p className="mx-auto mt-3 max-w-xl text-neutral-600">{sub}</p>}</div>
)
