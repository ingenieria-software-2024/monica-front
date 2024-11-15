import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Asegúrate de que la ruta sea correcta

const Carrito = () => {
  const { cart, removeFromCart, addToCart } = useCart(); // Añadimos addToCart

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex flex-col items-center mt-20 mb-8">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {cart.map((product) => (
            <div
              key={product.id}
              className="w-60 h-80 bg-gray-800 p-3 flex flex-col gap-1 rounded-br-3xl"
            >
              <div className="h-48">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl text-gray-50 font-bold">
                  {product.name}
                </span>
                <span className="font-bold text-red-600">${product.price}</span>
                <div className="flex gap-2">
                  {/* Botón para eliminar */}
                  <button
                    className="hover:bg-red-700 text-gray-50 bg-red-600 py-2 px-3 rounded-br-xl"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Eliminar
                  </button>
                  {/* Botón para agregar otra unidad */}
                  <button
                    className="hover:bg-green-600 text-gray-50 bg-green-500 py-2 px-3 rounded-br-xl"
                    onClick={() => addToCart(product)}
                  >
                    Agregar otra unidad
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 className="mt-4 text-xl">Total: ${total}</h3>
      <Link to="/checkout">
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Comprar
        </button>
      </Link>
    </div>
  );
};

export default Carrito;
