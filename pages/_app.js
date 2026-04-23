import { motion } from 'framer-motion';
// Proyecto listo para Vercel (Next.js)
import Head from 'next/head';
import { Phone, Sun, Wrench, Building2, Cpu, CheckCircle, ArrowRight, Shield, Zap } from 'lucide-react';

export default function Ecoformag(){
const projects=[
{title:'Planta Solar en Terreno',img:'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop'},
{title:'Tablero y Automatización',img:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop'},
{title:'Obra Técnica Comercial',img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'},
{title:'Servicio en Campo Magallánico',img:'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'}
];
const stats=[['+50','Proyectos'],['24/7','Respuesta'],['100%','Compromiso']];
return (
<>
<Head>
<title>Ecoformag | Construcción, Automatización y Energía en Punta Arenas</title>
<meta name='description' content='Ecoformag en Punta Arenas: construcción técnica, sistemas fotovoltaicos, automatización industrial y mantenimiento especializado en Magallanes.'/>
<meta name='keywords' content='Punta Arenas, Magallanes, construcción, paneles solares, automatización, fotovoltaico, mantención industrial, Ecoformag'/>
<meta property='og:title' content='Ecoformag | Soluciones Técnicas para Magallanes'/>
<meta property='og:description' content='Infraestructura, energía solar y automatización para empresas, campos y comercio.'/>
<meta name='robots' content='index,follow'/>
</Head>
<div className='min-h-screen bg-black text-white font-sans'>
<header className='sticky top-0 z-50 bg-black/75 backdrop-blur-xl border-b border-zinc-900'>
<nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
<div className='flex items-center gap-4'>
<img src='/logo.png' className='h-14 w-auto rounded-xl' alt='Ecoformag logo'/>
<div><h1 className='text-3xl font-bold'><span className='text-green-500'>Eco</span><span className='text-gray-300'>formag</span></h1><p className='text-xs text-zinc-500'>Infraestructura Técnica & Energía</p></div>
</div>
<div className='hidden md:flex gap-8 text-sm text-zinc-300'>
<a href='#inicio'>Inicio</a><a href='#servicios'>Servicios</a><a href='#proyectos'>Proyectos</a><a href='#contacto'>Contacto</a>
</div>
<a href='https://wa.me/56942787051' className='bg-green-600 hover:bg-green-500 px-5 py-3 rounded-2xl font-semibold shadow-lg'>WhatsApp</a>
</nav></header>

<section id='inicio' className='max-w-7xl mx-auto px-6 pt-16 pb-10 grid lg:grid-cols-2 gap-12 items-center'>
<div>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 text-green-400 text-sm mb-6'><Shield size={16}/> Soluciones confiables para clima extremo</div>
<h2 className='text-6xl font-bold leading-tight'>Construcción, Automatización y Energía para <span className='text-green-500'>Magallanes</span></h2>
<p className='mt-6 text-xl text-zinc-300 max-w-xl'>Ejecutamos proyectos llave en mano para empresas, campos, comercio e industria: infraestructura técnica, sistemas fotovoltaicos, control y mantenimiento especializado.</p>
<div className='mt-8 flex flex-wrap gap-4'>
<a href='#contacto' className='bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2'>Solicitar Cotización <ArrowRight size={18}/></a>
<a href='#proyectos' className='border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-2xl'>Ver Proyectos</a>
</div>
</motion.div>
<div className='grid grid-cols-3 gap-4 mt-10'>
{stats.map((s,i)=><div key={i} className='bg-zinc-900 rounded-2xl p-4 border border-zinc-800'><div className='text-3xl font-bold text-green-500'>{s[0]}</div><div className='text-sm text-zinc-400'>{s[1]}</div></div>)}
</div>
</div>
<div className='bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl'>
<div className='grid grid-cols-2 gap-4'>
<div className='rounded-2xl bg-black p-5 border border-zinc-800'><Building2 className='text-green-500 mb-3'/><h3 className='font-semibold'>Construcción Técnica</h3><p className='text-sm text-zinc-400 mt-2'>Obras civiles, techumbres, ampliaciones y estructuras.</p></div>
<div className='rounded-2xl bg-black p-5 border border-zinc-800'><Cpu className='text-green-500 mb-3'/><h3 className='font-semibold'>Automatización</h3><p className='text-sm text-zinc-400 mt-2'>PLC, tableros, telemetría y control inteligente.</p></div>
<div className='rounded-2xl bg-black p-5 border border-zinc-800'><Sun className='text-green-500 mb-3'/><h3 className='font-semibold'>Fotovoltaico</h3><p className='text-sm text-zinc-400 mt-2'>On-grid, off-grid, híbridos y baterías.</p></div>
<div className='rounded-2xl bg-black p-5 border border-zinc-800'><Wrench className='text-green-500 mb-3'/><h3 className='font-semibold'>Mantención</h3><p className='text-sm text-zinc-400 mt-2'>Respuesta rápida y continuidad operacional.</p></div>
</div>
</div>
</section>

<section id='servicios' className='max-w-7xl mx-auto px-6 py-12'>
<h3 className='text-4xl font-bold mb-8'>Por qué elegir Ecoformag</h3>
<div className='grid md:grid-cols-3 gap-6'>
{[['Experiencia Local','Conocemos operación y clima de Magallanes'],['Solución Integral','Una sola empresa para construir, automatizar y energizar'],['Postventa Real','Acompañamiento técnico después de entregar']].map((x,i)=><div key={i} className='bg-zinc-900 rounded-3xl p-6 border border-zinc-800'><CheckCircle className='text-green-500 mb-4'/><h4 className='text-xl font-semibold'>{x[0]}</h4><p className='text-zinc-400 mt-2'>{x[1]}</p></div>)}
</div>
</section>

<section id='proyectos' className='max-w-7xl mx-auto px-6 py-12'>
<h3 className='text-4xl font-bold mb-8'>Últimos proyectos</h3>
<div className='grid md:grid-cols-4 gap-4'>
{projects.map((p,i)=><div key={i} className='h-52 rounded-3xl overflow-hidden border border-zinc-800 hover:-translate-y-1 transition shadow-xl relative group'><img src={p.img} className='w-full h-full object-cover group-hover:scale-110 transition duration-500' alt={p.title}/><div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent'></div><div className='absolute bottom-0 left-0 right-0 p-4'><h4 className='font-semibold'>{p.title}</h4></div></div>)}
</div>
</section>

<section id='contacto' className='max-w-7xl mx-auto px-6 py-12'>
<div className='grid lg:grid-cols-2 gap-8'>
<div className='bg-zinc-900 rounded-3xl p-8 border border-zinc-800'>
<h3 className='text-4xl font-bold'>Cotiza tu proyecto</h3>
<p className='text-zinc-400 mt-3'>Cuéntanos qué necesitas y te contactaremos.</p>
<form action='https://formsubmit.co/ecoformag@gmail.com' method='POST' className='space-y-4 mt-6'>
<input name='nombre' placeholder='Nombre' className='w-full bg-black border border-zinc-800 rounded-xl px-4 py-3'/>
<input name='telefono' placeholder='Teléfono' className='w-full bg-black border border-zinc-800 rounded-xl px-4 py-3'/>
<textarea name='mensaje' rows='5' placeholder='Proyecto / Requerimiento' className='w-full bg-black border border-zinc-800 rounded-xl px-4 py-3'/>
<input type='hidden' name='_captcha' value='false'/>
<input type='hidden' name='_subject' value='Nueva cotización desde ecoformag.cl'/>
<input type='hidden' name='_next' value='https://ecoformag.cl'/>
<button type='submit' className='w-full text-center bg-green-600 hover:bg-green-500 py-4 rounded-2xl font-bold'>Enviar Solicitud</button>
</form>
</div>
<div className='rounded-3xl p-8 bg-gradient-to-br from-green-600/20 to-zinc-900 border border-green-500/20'>
<Zap className='text-green-400 mb-4' size={40}/><h3 className='text-3xl font-bold'>Atención directa</h3><p className='text-zinc-300 mt-3'>WhatsApp y correo corporativo para respuestas rápidas.</p>
<a href='https://wa.me/56942787051' className='mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-4 rounded-2xl font-semibold'><Phone size={18}/> +56 9 4278 7051</a>
<p className='mt-4 text-zinc-400'>ecoformag@gmail.com</p>
</div>
</div>
</section>

<footer className='border-t border-zinc-900 text-center text-zinc-500 py-8 px-6'>Ecoformag © 2026 · Punta Arenas, Magallanes · ecoformag.cl</footer>
</div>
</>
  );
}
