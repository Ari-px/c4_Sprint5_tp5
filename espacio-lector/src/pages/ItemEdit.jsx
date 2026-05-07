import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useItems } from "../context/ItemContext";
import ItemForm from "../components/ItemForm";

const ItemEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItemById, updateItem } = useItems();

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    const loadItem = async () => {
      const data = await getItemById(id);

      if (data) {
        setForm({
          title: data.title,
          author: data.author,
          genre: data.genre,
          image: data.image,
          description: data.description,
        });
      }
    };

    loadItem();
  }, [id]);

  const handleUpdate = async () => {
    await updateItem(id, form);
    navigate("/items");
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">
        Editar libro
      </h1>

      <ItemForm
        form={form}
        setForm={setForm}
        onSubmit={handleUpdate}
        buttonText="Actualizar libro"
      />
    </main>
  );
};

export default ItemEdit;