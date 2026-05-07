import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useItems } from "../context/ItemContext";
import { toast } from "react-toastify";




const ItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createItem, updateItem, getItemById } = useItems();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const isEditing = Boolean(id);

  useEffect(() => {
    const loadBook = async () => {
      if (isEditing) {
        setLoading(true);
        const book = await getItemById(id);

        if (book) {
          setFormData({
            title: book.title || "",
            author: book.author || "",
            genre: book.genre || "",
            year: book.year || "",
            image: book.image || "",
            description: book.description || "",
          });
        }

        setLoading(false);
      }
    };

    loadBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("El título es obligatorio");
      return;
    }

    if (!formData.author.trim()) {
      toast.error("El autor es obligatorio");
      return;
    }

    if (!formData.genre.trim()) {
      toast.error("El género es obligatorio");
      return;
    }

    if (!formData.year) {
      toast.error("El año es obligatorio");
      return;
    }

    if (isEditing) {
      await updateItem(id, formData);
    } else {
      await createItem(formData);
    }

    navigate("/items");
  };

  if (loading) {
    return (
      <p className="text-center mt-10 text-xl text-purple-800">
        Cargando formulario...
      </p>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 px-4 py-10">
      <section className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-lg border border-purple-100 p-6">
        <h1 className="text-3xl font-bold text-purple-950 mb-2">
          {isEditing ? "Editar libro" : "Agregar libro"}
        </h1>

        <p className="text-gray-600 mb-6">
          Completá los datos para guardar una nueva lectura en el espacio del lector.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-purple-900 mb-1">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ej: El Principito"
              className="w-full border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-purple-900 mb-1">
              Autor
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Ej: Antoine de Saint-Exupéry"
              className="w-full border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-purple-900 mb-1">
              Género
            </label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="Ej: Ficción"
              className="w-full border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-purple-900 mb-1">
              Año
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Ej: 1943"
              className="w-full border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-purple-900 mb-1">
              URL de imagen
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-purple-900 mb-1">
              Descripción
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Escribí una breve descripción del libro..."
              className="w-full border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              className="bg-purple-800 text-white px-5 py-2 rounded-lg hover:bg-purple-950 transition"
            >
              {isEditing ? "Guardar cambios" : "Crear libro"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/items")}
              className="bg-amber-500 text-white px-5 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              Volver
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ItemForm;