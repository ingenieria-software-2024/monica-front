import { useState } from "react";

const initialProducts = [
  { id: 1, name: "iPhone 16", price: 999 },
  { id: 2, name: "MacBook Pro", price: 1999 },
  { id: 3, name: "Apple Watch", price: 399 },
  { id: 4, name: "iPad Pro", price: 1099 },
];

const AdminPanel = () => {
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingProduct, setEditingProduct] = useState<null | {
    id: number;
    name: string;
    price: number;
  }>(null);
  const [filter, setFilter] = useState(""); // Estado para el filtro

  const addProduct = () => {
    if (editingProduct) {
      const updatedProducts = products.map((product) =>
        product.id === editingProduct.id
          ? { ...product, name, price: parseFloat(price) }
          : product,
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
    } else {
      const newProduct = {
        id: products.length + 1,
        name,
        price: parseFloat(price),
      };
      setProducts([...products, newProduct]);
    }
    setName("");
    setPrice("");
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    setName(product.name);
    setPrice(product.price.toString());
    setEditingProduct(product);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.price.toString().includes(filter),
  );

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Panel de Administración</h2>

      {/* Formulario para crear o editar producto */}
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del producto"
          className="bg-gray-800 border border-gray-700 p-2 mr-2 text-white rounded-md"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio del producto"
          className="bg-gray-800 border border-gray-700 p-2 mr-2 text-white rounded-md"
        />
        <button
          onClick={addProduct}
          className="bg-green-700 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          {editingProduct ? "Actualizar Producto" : "Agregar Producto"}
        </button>
      </div>

      {/* Campo para filtrar productos */}
      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar productos por nombre o precio"
          className="bg-gray-800 border border-gray-700 p-2 mr-2 text-white rounded-md w-full"
        />
      </div>

      {/* Listado de productos filtrados */}
      <ul>
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center bg-gray-800 p-4 mb-2 rounded-md"
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <div className="flex space-x-2">
              {/* Botón Editar */}
              <button
                onClick={() => editProduct(product)}
                className="bg-yellow-700 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Editar
              </button>
              {/* Botón Eliminar */}
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-rose-950 text-rose-400 border border-rose-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
