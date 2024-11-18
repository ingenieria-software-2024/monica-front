import React, { useEffect, useState } from "react";
import { useSession } from "../context/UserContext";
import { fetchProducts, createProduct, updateProduct, deleteProduct } from "../services/product.service";

type Product = {
  id: number;
  name: string;
  price: number;
};

const AdminPanel: React.FC = () => {
  const { token } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      if (token) {
        const products = await fetchProducts(token);
        setProducts(products);
      }
    };

    loadProducts();
  }, [token]);

  const handleCreate = async () => {
    if (token) {
      const createdProduct = await createProduct(newProduct, token);
      setProducts([...products, createdProduct]);
      setNewProduct({ name: "", price: 0 });
    }
  };

  const handleEdit = (product: Product) => {
    setEditProduct(product);
  };

  const handleUpdate = async () => {
    if (editProduct && token) {
      const updatedProduct = await updateProduct(editProduct.id, editProduct, token);
      setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
      setEditProduct(null);
    }
  };

  const handleDelete = async (productId: number) => {
    if (token) {
      await deleteProduct(productId, token);
      setProducts(products.filter((p) => p.id !== productId));
    }
  };

  return (
    <div>
      <h1>Panel de Administración</h1>
      <div>
        <h2>Crear Producto</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
        />
        <button onClick={handleCreate}>Agregar</button>
      </div>

      <div>
        <h2>Lista de Productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => handleEdit(product)}>Editar</button>
              <button onClick={() => handleDelete(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>

      {editProduct && (
        <div>
          <h2>Editar Producto</h2>
          <input
            type="text"
            value={editProduct.name}
            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
          />
          <input
            type="number"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: Number(e.target.value) })}
          />
          <button onClick={handleUpdate}>Guardar Cambios</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
