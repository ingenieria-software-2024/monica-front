const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          {/* Contenedor principal */}
          <div className="flex flex-wrap justify-between items-center">
            {/* Sección de enlaces rápidos */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-gray-100 text-lg font-bold mb-4">Enlaces Rápidos</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200">Inicio</a></li>
                <li><a href="#" className="hover:text-gray-200">Productos</a></li>
                <li><a href="#" className="hover:text-gray-200">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-gray-200">Contacto</a></li>
              </ul>
            </div>
  
            {/* Sección de contacto */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-gray-100 text-lg font-bold mb-4">Contáctanos</h2>
              <p className="mb-2">Teléfono: +1 (555) 123-4567</p>
              <p className="mb-2">Email: info@tuempresa.com</p>
              <p>Dirección: Calle Falsa 123, Ciudad, País</p>
            </div>
  
            {/* Sección de redes sociales */}
            <div className="w-full md:w-1/3">
              <h2 className="text-gray-100 text-lg font-bold mb-4">Síguenos</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-200">
                  <i className="fab fa-facebook-f"></i> {/* Icono de Facebook */}
                </a>
                <a href="#" className="hover:text-gray-200">
                  <i className="fab fa-twitter"></i> {/* Icono de Twitter */}
                </a>
                <a href="#" className="hover:text-gray-200">
                  <i className="fab fa-instagram"></i> {/* Icono de Instagram */}
                </a>
                <a href="#" className="hover:text-gray-200">
                  <i className="fab fa-linkedin-in"></i> {/* Icono de LinkedIn */}
                </a>
              </div>
            </div>
          </div>
  
          {/* Pie de página */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>&copy; 2024 TuEmpresa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;