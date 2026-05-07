import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useItems } from "../context/ItemContext";

const ItemDetail = () => {
  const { id } = useParams();
  const { getItemById } = useItems();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const imageFallback = "https://placehold.co/400x600?text=Sin+imagen";

  useEffect(() => {
    const loadItem = async () => {
      const data = await getItemById(id);
      setItem(data);
      setLoading(false);
    };

    loadItem();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-xl text-purple-800">
        Cargando libro...
      </p>
    );
  }

  if (!item) {
    return (
      <main className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-indigo-100 px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-purple-900">
            Libro no encontrado
          </h2>

          <Link
            to="/items"
            className="inline-block mt-4 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-900 transition"
          >
            Volver al listado
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 px-4 py-10">
      <section className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
        <img
          src={item.image || imageFallback}
          alt={item.title}
          className="w-full max-h-[500px] object-contain bg-amber-50 p-4"
          onError={(e) => {
            e.currentTarget.src = imageFallback;
          }}
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth <= 1) {
              e.currentTarget.src = imageFallback;
            }
          }}
        />

        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-purple-900 mb-3">
            {item.title}
          </h1>

          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-purple-800">Autor:</span>{" "}
            {item.author}
          </p>

          <p className="text-amber-700 font-bold mb-2">
            Género: {item.genre}
          </p>

          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-purple-800">Año:</span>{" "}
            {item.year}
          </p>

          <p className="text-gray-800 leading-relaxed">
            {item.description}
          </p>

          <Link
            to="/items"
            className="inline-block mt-6 bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-900 transition"
          >
            Volver al listado
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ItemDetail;