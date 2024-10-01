import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú hamburguesa
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  const handleToggle = () => {
    setIsOpen(!isOpen); // Cambiar el estado del menú hamburguesa
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualizar el término de búsqueda
  };

  return (
    <nav className="bg-gray-900 p-4 fixed top-0 left-0 w-full z-50"> {/* Clases para hacerlo fijo y siempre visible */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-lg font-bold">Mi Tienda</Link>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-white focus:outline-none">
            {isOpen ? '✖️' : '☰'} {/* Icono de hamburguesa */}
          </button>
        </div>

        <ul className={`flex items-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/products" className="text-white">Productos</Link></li>
          <li><Link to="/about" className="text-white">Sobre Nosotros</Link></li>
          <li>
            <Link to="/cart" className="text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l1 9h13l1-9h2M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
              </svg>
              Carrito
            </Link>
          </li>
          <li><Link to="/login">Iniciar Sesión</Link></li> {/* Enlace a login */}
          <li>
            <input
              type="text"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-1 rounded-md"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;