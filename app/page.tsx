'use client';

import { ArrowUpRight, BrainCircuit, ChevronRight, Cloud, Code2, Globe2, Layers3, Menu, Play, ShieldCheck, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

const services = [
  { icon: BrainCircuit, title: 'AI & Automation', text: 'Intelligent systems, agents and workflows that turn complex operations into scalable advantages.' },
  { icon: Code2, title: 'Digital Products', text: 'High-performance web platforms and product experiences designed for real-world growth.' },
  { icon: Cloud, title: 'Cloud & Engineering', text: 'Modern cloud architecture, APIs and infrastructure engineered for speed, security and scale.' },
  { icon: Sparkles, title: 'Growth Engineering', text: 'Data-led acquisition, experimentation and conversion systems built around measurable outcomes.' },
];

const cases = [
  { num: '01', tag: 'FINTECH / PLATFORM', title: 'Reimagining the digital banking experience', metric: '2.4×', label: 'faster onboarding' },
  { num: '02', tag: 'AI / OPERATIONS', title: 'An intelligent operations layer for a global team', metric: '68%', label: 'less manual work' },
  { num: '03', tag: 'COMMERCE / GROWTH', title: 'Turning a commerce platform into a growth engine', metric: '3.1×', label: 'conversion lift' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top">N<span>/</span>XORA</a>
        <div className={`navlinks ${open ? 'show' : ''}`}>
          <a href="#services" onClick={() => setOpen(false)}>Capabilities</a>
          <a href="#work" onClick={() => setOpen(false)}>Selected work</a>
          <a href="#approach" onClick={() => setOpen(false)}>Approach</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
        <a className="navcta" href="#contact">Start a project <ArrowUpRight size={16}/></a>
        <button className="menubtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </nav>

      <section className="hero" id="top">
        <div className="grid-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"/> Independent technology agency · Global delivery</div>
          <h1>We engineer the <em>next.</em></h1>
          <p>Strategy, design, engineering and AI — brought together to build digital businesses that move faster.</p>
          <div className="actions"><a className="button primary" href="#contact">Build with NEXORA <ArrowUpRight size={18}/></a><a className="button ghost" href="#work"><span className="play"><Play size={12} fill="currentColor"/></span> Explore our work</a></div>
        </div>
        <div className="hero-orb"><div className="orb-ring ring1"/><div className="orb-ring ring2"/><div className="orb-core"><Layers3 size={42}/></div><div className="orb-label l1">AI SYSTEMS</div><div className="orb-label l2">DIGITAL PRODUCTS</div><div className="orb-label l3">CLOUD</div></div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="line"/><span>01 — 06</span></div>
      </section>

      <section className="statement"><div className="section-kicker">THE NEXORA DIFFERENCE</div><h2>Technology should create <span>momentum.</span><br/>Not complexity.</h2><p>We partner with ambitious teams to transform ideas into products, platforms and systems that create durable competitive advantage.</p></section>

      <section className="services section" id="services">
        <div className="section-head"><div><div className="section-kicker">CAPABILITIES</div><h2>Built for what’s <span>next.</span></h2></div><p>One senior team across the full digital lifecycle — from first principle to production.</p></div>
        <div className="service-grid">{services.map((s, i) => { const Icon=s.icon; return <article className="service" key={s.title}><div className="service-top"><span>0{i+1}</span><Icon size={26}/></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact">Explore capability <ChevronRight size={16}/></a></article> })}</div>
      </section>

      <section className="work section" id="work"><div className="section-head"><div><div className="section-kicker">SELECTED WORK</div><h2>Ideas into <span>impact.</span></h2></div><a className="textlink" href="#contact">View all work <ArrowUpRight size={17}/></a></div><div className="case-grid">{cases.map(c=><article className="case" key={c.num}><div className="case-art"><div className="case-no">{c.num}</div><div className="case-shape"/><div className="case-code">{`{`}<br/>  SCALE<br/>  /BUILD<br/>{`}`}</div></div><div className="case-meta"><span>{c.tag}</span><div><strong>{c.metric}</strong> {c.label}</div></div><h3>{c.title}</h3><a href="#contact">Read case study <ArrowUpRight size={16}/></a></article>)}</div></section>

      <section className="marquee"><div>AI <span>×</span> PRODUCT <span>×</span> ENGINEERING <span>×</span> GROWTH <span>×</span> AI <span>×</span> PRODUCT <span>×</span> ENGINEERING <span>×</span> GROWTH</div></section>

      <section className="approach section" id="approach"><div className="section-kicker">OUR APPROACH</div><div className="approach-grid"><h2>Small enough to care.<br/><span>Senior enough to deliver.</span></h2><div className="approach-copy"><p>We keep the team focused, senior and close to the work. No layers of handoffs. No black boxes. Just clear thinking, tight execution and a shared obsession with the outcome.</p><div className="principles"><div><b>01</b><strong>Think in systems</strong><span>We solve the root problem, not just the visible symptom.</span></div><div><b>02</b><strong>Build with intent</strong><span>Every pixel and every line of code earns its place.</span></div><div><b>03</b><strong>Ship, learn, repeat</strong><span>Progress compounds when ideas meet reality quickly.</span></div></div></div></div></section>

      <section className="global"><div className="global-map"><div className="map-grid"/><div className="map-dot d1"/><div className="map-dot d2"/><div className="map-dot d3"/><div className="map-dot d4"/><div className="map-line"/></div><div className="global-copy"><div className="section-kicker">GLOBAL BY DEFAULT</div><h2>One team.<br/><span>Anywhere.</span></h2><p>Distributed talent. Local understanding. One consistent standard of craft across every engagement.</p><div className="locations"><span><Globe2 size={15}/> Remote-first</span><span><ShieldCheck size={15}/> Security-minded</span><span><Sparkles size={15}/> AI-native</span></div></div></section>

      <section className="contact" id="contact"><div className="contact-glow"/><div className="section-kicker">LET’S BUILD</div><h2>Have a hard problem?<br/><span>Good. We like those.</span></h2><p>Tell us what you’re building, where you’re stuck, or where you want to go next.</p><a className="button primary large" href="mailto:hello@nexora.agency">Start a conversation <ArrowUpRight size={20}/></a></section>

      <footer><div className="footer-top"><a className="logo" href="#top">N<span>/</span>XORA</a><div><b>Capabilities</b><a href="#services">AI & Automation</a><a href="#services">Digital Products</a><a href="#services">Cloud & Engineering</a></div><div><b>Explore</b><a href="#work">Selected work</a><a href="#approach">Our approach</a><a href="#contact">Contact</a></div><div><b>Connect</b><a href="mailto:hello@nexora.agency">hello@nexora.agency</a><a href="#contact">LinkedIn ↗</a></div></div><div className="footer-bottom"><span>© 2026 NEXORA. Built for the next.</span><span>Privacy · Terms</span></div></footer>
    </main>
  );
}
