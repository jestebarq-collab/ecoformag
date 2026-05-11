import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galerias = [
    {
      titulo: "Plantas Fotovoltaicas",
      carpeta: "fotovoltaicos",
      fotos: ["1.jpg", "2.jpg", "3.jpg"],
    },

    {
      titulo: "Remodelación e Interiores",
      carpeta: "interiores",
      fotos: ["5.JPG", "6.jpeg", "7.jpg", "8.jpg"],
    },

    {
      titulo: "Módulos Prefabricados",
      carpeta: "prefabricados",
      fotos: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          EcoFormag | Construcción y Automatización Sustentable
        </title>

        <meta
          name="description"
          content="Construcción, energía solar, automatización y módulos prefabricados en Magallanes."
        />

        <meta property="og:title" content="EcoFormag" />
        <meta
          property="og:description"
          content="Infraestructura técnica para proyectos exigentes."
        />

        <meta
          property="og:image"
          content="/galeria/prefabricados/1.jpg"
        />

        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-black text-white">

        {/* HERO */}
        <section
          className="bg-cover bg-center min-h-screen flex items-center"
          style={{
            backgroundImage:
              "url('/galeria/prefabricados/1.jpg')",
          }}
        >
          <div className="bg-black/70 w-full h-full">
            <div className="max-w-6xl mx-auto px-6 py-24">

              <img
                src="/galeria/0.jpg"
                alt="EcoFormag"
                className="w-40 mb-8"
              />

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Construcción y soluciones técnicas para proyectos exigentes
              </h1>

              <p className="mt-6 text-xl text-gray-200 max-w-2xl">
                Obras civiles, energía solar, automatización y módulos
                prefabricados en Magallanes.
              </p>

              <a
                href="https://wa.me/56942787051"
                target="_blank"
                className="inline-block mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold transition"
              >
                Solicitar Cotización
              </a>

            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold text-green-400 mb-10">
            Servicios
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            {[
              "Construcción y Obras Civiles",
              "Sistemas Fotovoltaicos",
              "Automatización y Control",
              "Módulos Prefabricados",
              "Mantención Técnica",
              "Remodelaciones y Mejoras",
            ].map((servicio, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition"
              >
                {servicio}
              </div>
            ))}

          </div>
        </section>

        {/* APLICACIONES */}
        <section className="bg-zinc-950 py-20 px-6">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-green-400 mb-10">
              Aplicaciones
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">
                  Hoteles y Turismo
                </h3>

                <p className="text-gray-400">
                  Mantención, remodelación y optimización energética
                  para operaciones turísticas de alto estándar.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">
                  Industrial
                </h3>

                <p className="text-gray-400">
                  Infraestructura técnica, automatización y soluciones
                  para operación en terreno.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">
                  Habitacional
                </h3>

                <p className="text-gray-400">
                  Viviendas, módulos y proyectos personalizados
                  para clima extremo.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* GALERIAS */}
        <section className="bg-black py-20 px-6">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-green-400 mb-16">
              Proyectos Ejecutados
            </h2>

            {galerias.map((grupo) => (
              <div key={grupo.titulo} className="mb-20">

                <h3 className="text-3xl font-bold mb-8">
                  {grupo.titulo}
                </h3>

                <div className="grid md:grid-cols-3 gap-6">

                  {grupo.fotos.map((foto) => {

                    const ruta = `/galeria/${grupo.carpeta}/${foto}`;

                    return (
                      <div
                        key={ruta}
                        className="overflow-hidden rounded-2xl cursor-pointer bg-zinc-900"
                        onClick={() => setSelectedImage(ruta)}
                      >
                        <img
                          src={ruta}
                          className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                        />
                      </div>
                    );
                  })}

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-24 px-6">

          <h2 className="text-5xl font-bold text-green-400">
            ¿Tienes un proyecto?
          </h2>

          <p className="mt-6 text-gray-300 text-xl">
            Te ayudamos a diseñarlo y ejecutarlo.
          </p>

          <a
            href="https://wa.me/56942787051"
            target="_blank"
            className="inline-block mt-10 bg-green-500 hover:bg-green-600 px-10 py-5 rounded-xl text-xl font-semibold transition"
          >
            Hablemos
          </a>

        </section>

        {/* FOOTER */}
        <footer className="py-14 text-center border-t border-zinc-800">

          <p className="text-2xl font-bold text-green-400">
            EcoFormag
          </p>

          <p className="mt-4 text-xl">
            +56 9 4278 7051
          </p>

          <p className="mt-2 text-gray-500">
            Punta Arenas · Puerto Natales · Torres del Paine
          </p>

        </footer>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-full max-h-full rounded-2xl"
            />
          </div>
        )}

      </main>
    </>
  );
}