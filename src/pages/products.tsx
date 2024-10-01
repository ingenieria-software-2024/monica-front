import { useState } from 'react';
import { useCart } from '../context/CartContext'; // Importa el hook useCart

const products = [
  { id: 1, name: 'iPhone 16', price: 999, category: 'celulares', imageUrl: '/images/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg' },
  { id: 2, name: 'MacBook Pro', price: 1999, category: 'computadoras', imageUrl: '/images/MacBook_Pro_16-in_Space_Gray_PDP_Image_Position-1__MXLA.jpeg' },
  { id: 3, name: 'PlayStation 5', price: 499, category: 'consolas', imageUrl: '/images/play-5.png' },
  { id: 4, name: 'Xbox Series X', price: 499, category: 'consolas', imageUrl: '/images/seriex.jpg' },
  { id: 5, name: 'Samsung S24', price: 799, category: 'celulares', imageUrl: '/images/s24u.jpg' },
  { id: 6, name: 'Dell XPS 13', price: 1399, category: 'computadoras', imageUrl: '/images/dell.jpg' },
  { id: 7, name: 'Nintendo Switch', price: 299, category: 'consolas', imageUrl: '/images/nintendo.jpg' },
  { id: 8, name: 'Google Pixel 6', price: 599, category: 'celulares', imageUrl: '/images/pixel6.jpg' },
];

const Products = () => {
  const [category, setCategory] = useState('todos');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { addToCart } = useCart();  // Obtén la función addToCart del contexto

  const filteredProducts = category === 'todos'
    ? products
    : products.filter(product => product.category === category);

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 mt-20 mb-8">
      {/* Filtros a la izquierda */}
      <div className="w-48 mb-4 md:mb-0">
        <button
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Filtrar por categoría
        </button>

        {dropdownOpen && (
          <div className="origin-top-left absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button onClick={() => setCategory('todos')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Todos</button>
              <button onClick={() => setCategory('celulares')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Celulares</button>
              <button onClick={() => setCategory('computadoras')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Computadoras</button>
              <button onClick={() => setCategory('consolas')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consolas de Juego</button>
              <button onClick={() => setCategory('otros')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Otros</button>
            </div>
          </div>
        )}
      </div>

      {/* Contenedor de productos */}
      <div className="flex-grow flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Productos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="w-60 h-80 bg-gray-800 p-3 flex flex-col gap-1 rounded-br-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-48">
                <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover rounded-t-lg" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <span className="text-xl text-gray-50 font-bold">{product.name}</span>
                    <p className="text-xs text-gray-400">ID: {product.id}</p>
                  </div>
                  <span className="font-bold text-red-600">${product.price}</span>
                </div>
                <button
                  onClick={() => addToCart(product)}  // Añadir producto al carrito
                  className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-br-xl"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
