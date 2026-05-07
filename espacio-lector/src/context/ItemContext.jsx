import { createContext, useContext, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const ItemContext = createContext();

export const useItems = () => {
  return useContext(ItemContext);
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    try {
      setLoading(true);

      const response = await api.get("/books");

      const booksWithId = response.data.map((book, index) => ({
        ...book,
        id: book.id || index + 1,
      }));

      setItems(booksWithId);
    } catch (error) {
      toast.error("Error al cargar los libros");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getItemById = async (id) => {
    try {
      const response = await api.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      toast.error("No se pudo obtener el libro");
      console.log(error);
      return null;
    }
  };

  const createItem = async (item) => {
    try {
      await api.post("/books", item);
      toast.success("Libro creado correctamente");
    } catch (error) {
      toast.error("Error al crear el libro");
      console.log(error);
    }
  };

  const updateItem = async (id, item) => {
    try {
      await api.put(`/books/${id}`, item);
      toast.success("Libro actualizado correctamente");
    } catch (error) {
      toast.error("Error al actualizar el libro");
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await api.delete(`/books/${id}`);

      setItems((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );

      toast.success("Libro eliminado correctamente");
    } catch (error) {
      toast.error("Error al eliminar el libro");
      console.log(error);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        loading,
        getItems,
        getItemById,
        createItem,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};