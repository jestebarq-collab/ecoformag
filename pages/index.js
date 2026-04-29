import { motion } from 'framer-motion'

export default function Ecoformag(){
return (
<main className='min-h-screen bg-black text-white'>

{/* HERO */}
<section className='py-20 text-center max-w-6xl mx-auto px-6'>
<div className='flex justify-center mb-8'>
<img src='/logo.png' alt='Ecoformag' className='h-20 md:h-24 w-auto drop-shadow-2xl'/>
</div>
<h1 className='text-5xl md:text-7xl font-bold leading-tight'>Infraestructura técnica para proyectos exigentes en Magallanes</h1>
<p className='mt-6 text-xl text-zinc-300'>Construcción, sistemas fotovoltaicos, automatización y módulos prefabricados integrados para operar en zonas extremas.</p>
<div className='mt-10 flex flex-col md:flex-row gap-4 justify-center'>
<a href='https://wa.me/56942787051' className='px-8 py-4 rounded-2xl bg-green-500 text-black hover:bg-green-400 font-semibold'>Cotizar Proyecto</a>
<a href='#proyectos' className='px-8 py-4 rounded-2xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-black'>Ver Proyectos</a>
</div>
</section>

{/* SERVICIOS */}
<section className='max-w-6xl mx-auto px-6 py-16'>
<h2 className='text-3xl font-semibold mb-10'>Servicios Integrales Ecoformag</h2>
<div className='grid md:grid-cols-3 gap-6'>
{[
"Construcción y obras civiles",
"Sistemas fotovoltaicos",
"Automatización y control",
"Electricidad y canalizaciones",
"Módulos prefabricados a medida",
"Mantenimiento y optimización"
].map((s,i)=>(
<div key={i} className='p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl hover:bg-zinc-800 border border-green-500/20 transition'>
{s}
</div>
))}
</div>
</section>

{/* PROYECTOS */}
<section id='proyectos' className='max-w-6xl mx-auto px-6 py-16'>
<h2 className='text-3xl font-semibold mb-10'>Proyectos ejecutados</h2>
<p className='text-zinc-400 mb-8'>Experiencia real en terreno: construcción, montaje, módulos y soluciones energéticas.</p>
<div className='grid md:grid-cols-3 gap-4'>
{[
{title:'Proyecto Modular',img:'/galeria/1.jpg'},
{title:'Montaje en Terreno',img:'/galeria/2.jpg'},
{title:'Interior Premium',img:'/galeria/3.jpg'},
{title:'Fabricación Propia',img:'/galeria/4.jpg'},
{title:'Obra Terminada',img:'/galeria/5.jpg'},
{title:'Solución Industrial',img:'/galeria/6.jpg'}].map((item,i)=>(
<div key={i} className='h-64 rounded-2xl overflow-hidden border border-green-500/20 relative group'>
<img src={item.img} alt={item.title} className='w-full h-full object-cover group-hover:scale-105 transition duration-500'/>
<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'/>
<div className='absolute bottom-0 left-0 p-4 font-semibold text-white'>{item.title}</div>
</div>
))}
</div>
</section>

{/* DIFERENCIALES */}
<section className='max-w-6xl mx-auto px-6 py-16'>
<h2 className='text-3xl font-semibold mb-10'>Ventajas Competitivas</h2>
<div className='grid md:grid-cols-2 gap-6 text-zinc-300'>
<div className='p-6 bg-zinc-900 rounded-2xl'>Ejecución completa: construimos, energizamos y automatizamos.</div>
<div className='p-6 bg-zinc-900 rounded-2xl'>Fabricación propia de soluciones modulares.</div>
<div className='p-6 bg-zinc-900 rounded-2xl'>Experiencia en clima extremo y logística compleja.</div>
<div className='p-6 bg-zinc-900 rounded-2xl'>Respuesta rápida y enfoque técnico.</div>
</div>
</section>

{/* CTA FINAL */}
<section className='text-center py-24 border-t border-zinc-800'>
<h2 className='text-4xl md:text-5xl font-bold'>Construimos soluciones reales con energía, ingeniería y terreno</h2>
<p className='mt-4 text-zinc-400'>Punta Arenas • Magallanes • Patagonia</p>
<a href='https://wa.me/56942787051' className='inline-block mt-8 px-10 py-4 bg-white text-black rounded-2xl font-semibold'>Hablar por WhatsApp</a>
</section>

</main>
)}