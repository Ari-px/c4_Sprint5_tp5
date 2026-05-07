import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItems } from "../context/ItemContext";
import ItemCard from "../components/ItemCard";

const ItemList = () => {
  const { items, loading, getItems } = useItems();

  useEffect(() => {
    getItems();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-stone-100 flex items-center justify-center">
        <p className="text-xl font-semibold text-amber-900">
          Cargando libros...
        </p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 px-4 py-8">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white/80 border border-amber-200 rounded-2xl shadow-md p-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-amber-950">
              Listado de libros
            </h1>

            <p className="text-stone-600 mt-1">
              Encontrá el libro que más te guste y explorá nuevas lecturas.
            </p>
          </div>

          <Link
            to="/items/create"
            className="bg-amber-700 text-amber-50 px-5 py-2 rounded-lg shadow-md hover:bg-amber-900 transition font-semibold"
          >
            Agregar libro
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="bg-white/80 border border-amber-200 rounded-2xl shadow-md p-6 text-center">
            <p className="text-stone-600">
              Todavía no hay libros cargados.
            </p>
          </div>
        ) : (
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </section>
        )}
      </section>
    </main>
  );
};

export default ItemList;