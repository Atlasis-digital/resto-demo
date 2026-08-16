import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from './i18n/I18nProvider';
import { i18n, photos, contact } from './data';

const wa = (lang: string) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  lang === 'ar' ? `مرحباً ${contact.name}، أرغب في الحجز` : lang === 'en' ? `Hello, I'd like to book` : `Bonjour ${contact.name}, je souhaite réserver`
)}`;

const heroV = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } } };
const heroChild = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const fade = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ ...fade, show: { ...fade.show, transition: { ...fade.show.transition, delay } } }}>{children}</motion.div>;
}
const pageV = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }, exit: { opacity: 0, y: -16, transition: { duration: 0.3 } } };

function Home() {
  const { lang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  return (
    <div>
      <section className="split">
        <motion.div className="split-photo" style={{ backgroundImage: `url(${photos[2]})` }} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} />
        <motion.div className="split-text" variants={heroV} initial="hidden" animate="show">
          <motion.span style={{ fontSize: '.7rem', letterSpacing: '.3em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }} variants={heroChild}>{t('eyebrow')}</motion.span>
          <motion.h1 className="black" style={{ fontSize: 'clamp(3rem,8vw,5rem)', textTransform: 'uppercase', lineHeight: '.9', marginBottom: '1.25rem' }} variants={heroChild}>{contact.name}</motion.h1>
          <motion.p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '2rem' }} variants={heroChild}>{t('hero_lead')}</motion.p>
          <motion.div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} variants={heroChild}>
            <a href={wa(lang)} target="_blank" rel="noopener noreferrer" className="btn">{t('nav_contact')}</a>
            <Link to="/menu" className="btn btn-ghost">{t('nav_menu')}</Link>
          </motion.div>
        </motion.div>
      </section>
      <div className="checker" />

      <section className="container">
        <Reveal>
          <div className="box" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="black" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>{t('about_title')}</h2>
            <p style={{ fontWeight: 500 }}>{t('about')}</p>
            <p style={{ color: 'var(--mustard)', fontWeight: 700, marginTop: '1rem' }}>🕒 {t('hours')}</p>
          </div>
        </Reveal>
      </section>

      <section style={{ background: 'var(--brick-d)' }}>
        <div className="container menu-wrap">
          <h2 className="black" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--cream)' }}>{t('menu_title')}</h2>
          {(i18n.menu[lang] as any[]).map((c, ci) => (
            <Reveal key={ci}>
              <div style={{ marginBottom: '2rem' }}>
                <div className="cat">{c.cat}</div>
                {c.items.map((m: any, i: number) => (
                  <motion.div key={i} className="dish" whileHover={{ x: 8 }} transition={{ duration: 0.25 }}><div><div className="n">{m.n}</div><div className="d">{m.d}</div></div><div className="p">{m.p}</div></motion.div>
                ))}
              </div>
            </Reveal>
          ))}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}><Link to="/menu" className="btn">Voir la carte complète</Link></div>
        </div>
      </section>
    </div>
  );
}

function Menu() {
  const { lang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  return (
    <section style={{ paddingTop: '7rem' }}>
      <div className="container menu-wrap">
        <h2 className="black" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--cream)' }}>{t('menu_title')}</h2>
        {(i18n.menu[lang] as any[]).map((c, ci) => (
          <div key={ci} style={{ marginBottom: '2rem' }}>
            <div className="cat">{c.cat}</div>
            {c.items.map((m: any, i: number) => (<div key={i} className="dish"><div><div className="n">{m.n}</div><div className="d">{m.d}</div></div><div className="p">{m.p}</div></div>))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const { lang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  return (
    <section style={{ paddingTop: '7rem' }}>
      <div className="container">
        <h2 className="black" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', textTransform: 'uppercase', marginBottom: '2rem', color: 'var(--cream)' }}>{t('gallery_title')}</h2>
        <div className="masonry">
          {photos.map((p, i) => (
            <motion.div key={i} className={`ph ${i % 3 === 0 ? 'tall' : 'wide'}`} style={{ backgroundImage: `url(${p})` }}
              initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} whileHover={{ scale: 1.05 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { lang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  return (
    <section style={{ paddingTop: '7rem' }}>
      <div className="container">
        <h2 className="black reveal" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', textTransform: 'uppercase', marginBottom: '2rem', color: 'var(--cream)' }}>{t('contact_title')}</h2>
        <p className="reveal" style={{ fontWeight: 500, marginBottom: '2rem' }}>{t('contact_text')}</p>
        <div className="contact-grid">
          <Reveal>
            <div className="box-cream">
              <ul className="contact-list" style={{ color: 'var(--ink)' }}>
                <li>📍 {contact.address}</li>
                <li>📞 <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a></li>
                <li>🕒 {t('hours')}</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href={wa(lang)} target="_blank" rel="noopener noreferrer" className="btn">🟢 {t('whatsapp')}</a>
                <a href={`tel:${contact.phone}`} className="btn btn-ghost">📞 {t('call')}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}><motion.div className="split-photo" style={{ backgroundImage: `url(${photos[4]})`, minHeight: '320px', borderRadius: '12px' }} whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} /></Reveal>
        </div>
      </div>
    </section>
  );
}

function Shell() {
  const { lang, setLang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  const loc = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [loc.pathname]);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/menu', label: t('nav_menu') },
    { to: '/gallery', label: t('nav_gallery') },
    { to: '/contact', label: t('nav_contact') },
  ];

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--cream)', minHeight: '100vh' }}>
      <header>
        <div className="container nav">
          <Link to="/" className="brand black">{contact.name}</Link>
          <nav><ul className="nav-links">
            {links.map((l) => (<li key={l.to}><Link to={l.to} className={loc.pathname === l.to ? 'active' : ''}>{l.label}</Link></li>))}
          </ul></nav>
          <div className="langs">
            {(['fr', 'en', 'ar'] as const).map((l) => (<button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>{l === 'fr' ? 'FR' : l === 'en' ? 'EN' : 'ع'}</button>))}
          </div>
        </div>
      </header>
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={loc.pathname} variants={pageV} initial="initial" animate="animate" exit="exit">
            <Routes location={loc}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="container">{contact.name} · {t('rights')}</footer>
    </div>
  );
}

export default function App() { return <Shell />; }
