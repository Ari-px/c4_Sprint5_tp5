import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useItems } from "../context/ItemContext";
import ItemForm from "../components/ItemForm";

const ItemCreate = () => {
  const navigate = useNavigate();
  const { createItem } = useItems();

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: "",
  });

  const handleCreate = async () => {
    await createItem(form);
    navigate("/items");
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">
        Crear nuevo libro
      </h1>

      <ItemForm
        form={form}
        setForm={setForm}
        onSubmit={handleCreate}
        buttonText="Guardar libro"
      />
    </main>
  );
};

export default ItemCreate;