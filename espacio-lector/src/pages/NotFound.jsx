import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 flex items-center justify-center px-4 py-10">
      <section className="relative z-10 max-w-xl text-center bg-white/80 rounded-3xl shadow-xl border border-amber-200 px-8 py-12">
        <div className="text-6xl mb-4">📚</div>

        <h1 className="text-4xl font-extrabold text-amber-950 mb-3">
          Página no encontrada
        </h1>

        <p className="text-stone-700 mb-6">
          La página que intentás abrir no existe dentro del Espacio del Lector.
        </p>

        <Link
          to="/"
          className="bg-amber-800 text-amber-50 px-6 py-3 rounded-xl shadow-md hover:bg-amber-950 transition"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
};

export default NotFound;