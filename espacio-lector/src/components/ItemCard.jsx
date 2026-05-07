import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useItems } from "../context/ItemContext";

const ItemCard = ({ item }) => {
  const { deleteItem } = useItems();
  const navigate = useNavigate();

  const imageFallback = "https://placehold.co/400x600?text=Sin+imagen";

  const handleDelete = () => {
    Swal.fire({
      title: "¿Eliminar libro?",
      text: `Se eliminará "${item.title}" de la lista.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7e22ce",
      cancelButtonColor: "#e11d48",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(item.id);
      }
    });
  };

  return (
    <article className="bg-white/90 rounded-2xl shadow-md overflow-hidden border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <img
        src={item.image || imageFallback}
        alt={item.title}
        className="w-full h-56 object-contain bg-amber-50 p-2"
        onError={(e) => {
          e.currentTarget.src = imageFallback;
        }}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth <= 1) {
            e.currentTarget.src = imageFallback;
          }
        }}
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-purple-950">
          {item.title}
        </h2>

        <p className="text-gray-700 mt-1">
          Autor: {item.author}
        </p>

        <p className="text-sm text-amber-700 font-bold mt-1">
          Género: {item.genre}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            to={`/items/${item.id}`}
            className="bg-purple-700 text-white px-3 py-2 rounded-lg hover:bg-purple-900 transition"
          >
            Ver
          </Link>

          <button
            onClick={() => navigate(`/items/${item.id}/edit`)}
            className="bg-amber-500 text-white px-3 py-2 rounded-lg hover:bg-amber-600 transition"
          >
            Editar
          </button>

          <button
            onClick={handleDelete}
            className="bg-rose-600 text-white px-3 py-2 rounded-lg hover:bg-rose-700 transition"
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;