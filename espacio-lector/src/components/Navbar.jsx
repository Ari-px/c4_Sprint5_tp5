import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-linear-to-r from-amber-900 via-yellow-900 to-stone-900 text-amber-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-amber-200 transition"
        >
          📚 Reader's Space
        </Link>

        <div className="flex gap-4">
          <Link
            to="/"
            className="hover:text-amber-200 transition font-medium"
          >
            Inicio
          </Link>

          <Link
            to="/items"
            className="hover:text-amber-200 transition font-medium"
          >
            Libros
          </Link>

          <Link
            to="/items/create"
            className="bg-amber-500 text-stone-900 px-4 py-1 rounded-lg font-semibold hover:bg-amber-300 transition"
          >
            Crear
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;