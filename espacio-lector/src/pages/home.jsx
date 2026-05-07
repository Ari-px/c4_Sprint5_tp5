import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 flex items-center justify-center px-4 py-12">
      {/* Decoraciones de fondo */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-amber-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>

      {/* Patrón suave tipo biblioteca */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#92400e_1px,transparent_1px),linear-gradient(to_bottom,#92400e_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <section className="relative z-10 max-w-5xl w-full text-center bg-white/75 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-200 px-8 py-14">
        <div className="text-7xl mb-5">
          📚
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-amber-950 mb-4">
          Espacio del Lector
        </h1>

        <p className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
          Un rincón digital para organizar tus libros, descubrir nuevas lecturas
          y guardar en un solo lugar las obras que forman parte de tu biblioteca.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/items"
            className="bg-amber-800 text-amber-50 px-7 py-3 rounded-xl shadow-md hover:bg-amber-950 transition"
          >
            Explorar biblioteca
          </Link>

          <Link
            to="/items/create"
            className="bg-orange-500 text-white px-7 py-3 rounded-xl shadow-md hover:bg-orange-600 transition"
          >
            Agregar nueva lectura
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-12 text-center max-w-3xl mx-auto">
          <article className="bg-orange-50/90 rounded-2xl p-5 border border-orange-100 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-amber-950 mb-2">
              📖 Biblioteca
            </h3>
            <p className="text-sm text-stone-600">
              Consultá el listado de libros disponibles y accedé al detalle de cada obra.
            </p>
          </article>

          <article className="bg-amber-50/90 rounded-2xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-amber-950 mb-2">
              ✍️ Organización
            </h3>
            <p className="text-sm text-stone-600">
              Organizá tu biblioteca digital consultando, agregando, editando o eliminando libros.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;