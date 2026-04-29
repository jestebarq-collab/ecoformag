import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoFormag | Construcción y Automatización Sustentable</title>
        <meta
          name="description"
          content="Construcción modular, obras civiles, energía solar y soluciones técnicas en Magallanes."
        />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section
          className="bg-cover bg-center min-h-screen flex items-center"
          style={{
            backgroundImage:
              "url('/galeria/principal.jpg')",
          }}
        >
          <div className="bg-black/60 w-full h-full">
            <div className="max-w-6xl mx-auto px-6 py-24">
              <img
                src="/logo.png"
                alt="EcoFormag"
                className="w-44 mb-8"
              />

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Infraestructura técnica para proyectos exigentes en Magallanes
              </h1>

              <p className="mt-6 text-xl text-gray-200 max-w-2xl">
                Construcción, energía, automatización y módulos prefabricados
                integrados para operar en zonas extremas.
              </p>

              <a
                href="https://wa.me/56942787051"
                target="_blank"
                className="inline-block mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-green-400 mb-10">
            Nuestros Servicios
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="bg-zinc-900 p-6 rounded-2xl">
              Construcción y Obras Civiles
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              Sistemas Fotovoltaicos
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              Automatización y Control
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              Módulos Prefabricados
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              Mantención y Optimización
            </div>
          </div>
        </section>

        {/* GALERÍA */}
        <section className="bg-zinc-950 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-green-400 mb-10">
              Proyectos Ejecutados
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <img src="/galeria/1.jpg" className="rounded-2xl" />
              <img src="/galeria/2.jpg" className="rounded-2xl" />
              <img src="/galeria/3.jpg" className="rounded-2xl" />
              <img src="/galeria/4.jpg" className="rounded-2xl" />
              <img src="/galeria/5.jpg" className="rounded-2xl" />
              <img src="/galeria/6.jpg" className="rounded-2xl" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-14 text-center border-t border-zinc-800">
          <p className="text-xl font-semibold text-green-400">
            Hablemos de tu proyecto
          </p>
          <p className="mt-2 text-2xl font-bold">+56 9 4278 7051</p>
          <p className="mt-2 text-gray-400">
            Punta Arenas · Magallanes · Chile
          </p>
        </footer>
      </main>
    </>
  );
}