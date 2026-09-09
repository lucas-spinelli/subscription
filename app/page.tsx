"use client";

import { useState } from "react";

const plans = [
  { name: "Esencial", detail: "Para empezar con claridad.", monthly: 12, accent: "lavender", items: ["1 espacio de trabajo", "Proyectos ilimitados", "5 GB de almacenamiento", "Soporte por email"] },
  { name: "Flujo", detail: "Para equipos que hacen más.", monthly: 24, accent: "violet", featured: true, items: ["Todo en Esencial", "Hasta 10 colaboradores", "50 GB de almacenamiento", "Analíticas de equipo", "Soporte prioritario"] },
  { name: "Estudio", detail: "Para organizaciones en movimiento.", monthly: 48, accent: "coral", items: ["Todo en Flujo", "Colaboradores ilimitados", "1 TB de almacenamiento", "Roles y permisos avanzados", "Acompañamiento dedicado"] },
];

export default function Home() {
  const [annual, setAnnual] = useState(true);
  return <main>
    <div className="orb orb-one" /><div className="orb orb-two" /><div className="grain" />
    <nav><a className="brand" href="#top"><span>✦</span> forma</a><a className="login" href="#planes">Iniciar sesión <b>→</b></a></nav>
    <section id="top" className="hero">
      <p className="eyebrow">PLANES TRANSPARENTES</p>
      <h1>Espacio para hacer<br /><i>tu mejor trabajo.</i></h1>
      <p className="intro">Todo lo que necesitas para pensar, construir y avanzar<br className="desktop" /> con tu equipo, en un solo lugar.</p>
      <div className="toggle" aria-label="Frecuencia de facturación">
        <button className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>Mensual</button>
        <button className={annual ? "active" : ""} onClick={() => setAnnual(true)}>Anual <small>Ahorrás 20%</small></button>
      </div>
    </section>
    <section id="planes" className="plans" aria-label="Planes de suscripción">
      {plans.map((plan) => {
        const price = annual ? Math.round(plan.monthly * 0.8) : plan.monthly;
        return <article key={plan.name} className={`card ${plan.featured ? "featured" : ""}`}>
          {plan.featured && <div className="popular">MÁS ELEGIDO</div>}
          <div className={`color-dot ${plan.accent}`} />
          <p className="plan-name">{plan.name}</p><p className="detail">{plan.detail}</p>
          <div className="price"><strong>US${price}</strong><span>/ mes</span></div>
          <p className="billing">{annual ? "Facturado anualmente" : "Facturado mensualmente"}</p>
          <button className="cta">{plan.featured ? "Empezar ahora" : "Elegir plan"}<span>→</span></button>
          <div className="line" />
          <p className="included">INCLUYE</p>
          <ul>{plans.map ? plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>) : null}</ul>
        </article>;
      })}
    </section>
    <footer><span>✦</span> Cancela cuando quieras <b>·</b> Sin tarjeta para probar <b>·</b> Tus datos siempre son tuyos</footer>
  </main>;
}